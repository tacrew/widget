<script setup lang="ts">
import { computed, ref } from 'vue';
import { Icon } from '@iconify/vue';
import { fromBech32, toBech32, toHex } from '@cosmjs/encoding';
import { sha256 } from '@cosmjs/crypto';
import ChainRegistryClient from '@ping-pub/chain-registry-client';
import {
    Asset,
    IBCInfo,
    IBCPath,
} from '@ping-pub/chain-registry-client/dist/types';
import { getBalance, getStakingParam, getOsmosisPools } from '../../utils/http';
import { ConnectedWallet } from '../../wallet/Wallet';
import { Coin } from '../../utils/type';
import { osmosis } from 'osmojs';
import { tokens, type TokenConfig } from './tokens';
import { decimal2percent } from '../../utils/format';

const props = defineProps({
    chainName: { type: String, required: true },
    endpoint: { type: String, required: true },
    hdPath: String,
});
const OSMOSIS_RPC = 'https://rpc.osmosis.zone';
const OSMOSIS_REST = 'https://lcd.osmosis.zone';
const DEFAULT_HDPATH = "m/44'/118/0'/0/0";

const direction = ref('buy');
const sending = ref(false);
const open = ref(false);
const error = ref('');
const chains = ref([] as IBCPath[]);
const osmosisPath = ref({} as IBCPath | undefined);
const osmosisPathInfo = ref({} as IBCInfo);
const defaultDenom = ref('');
const sender = ref({} as ConnectedWallet);
const localBalances = ref([] as Coin[]);
const osmoBalances = ref([] as Coin[]);
const localCoinInfo = ref([] as Asset[]);
const swapIn = ref({} as TokenConfig | undefined);
const swapOut = ref({} as TokenConfig | undefined);
const amountIn = ref(0);
const allPools = ref([] as any[]);
const client = new ChainRegistryClient();

async function initData() {
    sender.value = JSON.parse(
        localStorage.getItem(props.hdPath || DEFAULT_HDPATH) || '{}'
    ) as ConnectedWallet;
    if (sender.value.cosmosAddress) {
        const osmoClient = await osmosis.ClientFactory.createRPCQueryClient({
            rpcEndpoint: OSMOSIS_RPC,
        });
        osmoClient.cosmos.bank.v1beta1
            .allBalances({ address: osmosAddress(sender.value.cosmosAddress) })
            .then((res) => {
                osmoBalances.value = res.balances.filter(
                    (x) => !x.denom.startsWith('gamm')
                );
            });
        await getBalance(props.endpoint, sender.value.cosmosAddress).then(
            (res) => {
                localBalances.value = res.balances;
            }
        );
    }
}

function osmosAddress(addr: string) {
    const { data } = fromBech32(addr);
    return toBech32('osmo', data);
}

getStakingParam(props.endpoint).then((x) => {
    defaultDenom.value = x.params.bond_denom;
});
getOsmosisPools(OSMOSIS_REST).then((res) => {
    allPools.value = res.pools;
});

client.fetchIBCPaths().then((paths) => {
    chains.value = paths.filter(
        (x) => x.from === props.chainName || x.to === props.chainName
    );
    const path = chains.value.find(
        (x) => x.from === 'osmosis' || x.to === 'osmosis'
    );
    if (path) {
        osmosisPath.value = path;
        client.fetchIBCPathInfo(path.path).then((info) => {
            osmosisPathInfo.value = info;
        });
    }
    client.fetchAssetsList(props.chainName).then((al) => {
        localCoinInfo.value = al.assets;
    });
});

function showBalance(denom?: string, decimal = 0) {
    const bal = osmoBalances.value.find((x) => x.denom === denom || '');
    if (bal) {
        return Number(bal.amount) / 10 ** decimal;
    }
    return 0;
}

function findlocalCoinDecimal(denom: string) {
    const localCoin = localCoinInfo.value.find((x) => x.base === denom);
    if (localCoin) {
        const unit = localCoin.denom_units.find(
            (x) => x.denom === localCoin.symbol.toLowerCase()
        );
        if (unit) return unit.exponent;
    }
    return 0;
}

function findTokenUrl(coinInfo?: Asset) {
    const url =
        coinInfo?.logo_URIs?.svg ||
        coinInfo?.logo_URIs?.png ||
        coinInfo?.logo_URIs?.jpeg;
    return url
        ? url.replace(
              'https://raw.githubusercontent.com/cosmos/chain-registry/master',
              'https://registry.ping.pub'
          )
        : '';
}

const localTokenOnOsmosis = computed(() => {
    const channel = osmosisPathInfo.value.channels?.find(
        (x) => x.chain_1.port_id === 'transfer'
    );
    const channelId =
        osmosisPathInfo.value.chain_1?.chain_name === 'osmosis'
            ? channel?.chain_1.channel_id
            : channel?.chain_2.channel_id;
    const ibcDenom = toHex(
        sha256(
            new TextEncoder().encode(
                `transfer/${channelId}/${defaultDenom.value}`
            )
        )
    ).toUpperCase();
    const localCoin = localCoinInfo.value?.find(
        (x) => x.base === defaultDenom.value
    );
    return [
        {
            denom: defaultDenom.value,
            symbol: localCoin?.symbol || '',
            ibcDenom: `ibc/${ibcDenom}`,
            sourceChannelId: channelId,
            decimals: findlocalCoinDecimal(defaultDenom.value),
            coinImageUrl: findTokenUrl(localCoin),
        },
    ];
});

const inTokens = computed(() => {
    if (direction.value === 'buy') {
        swapIn.value = tokens[0];
        return tokens;
    } else {
        swapIn.value = localTokenOnOsmosis.value[0];
        return localTokenOnOsmosis.value;
    }
});

const outTokens = computed(() => {
    if (direction.value === 'buy') {
        swapOut.value = localTokenOnOsmosis.value[0];
        return localTokenOnOsmosis.value;
    } else {
        swapOut.value = tokens[0];
        return tokens;
    }
});

const pool = computed(() => {
    // find the available pools and sort by liquidity depth
    const a = allPools.value
        .filter(
            (x) =>
                x.pool_assets?.findIndex(
                    (a) => a.token.denom === swapIn.value?.ibcDenom
                ) > -1
        )
        .filter(
            (x) =>
                x.pool_assets?.findIndex(
                    (a) => a.token.denom === swapOut.value?.ibcDenom
                ) > -1
        )
        .sort(
            (a, b) =>
                Number(b.total_shares.amount) - Number(a.total_shares.amount)
        );
    // console.log(a)
    return a.length > 0 ? a[0] : null;
});

function switchs() {
    direction.value = direction.value === 'buy' ? 'sell' : 'buy';
}

const outAmount = computed(() => {
    // tokenBalanceOut * [1 - { tokenBalanceIn / (tokenBalanceIn + (1 - swapFee) * tokenAmountIn)} ^ (tokenWeightIn / tokenWeightOut)]
    const p = pool.value;
    if (p) {
        const tokenBalanceOut = p.pool_assets?.find(
            (x) => x.token.denom === swapOut.value?.ibcDenom
        );
        const tokenBalanceIn = p.pool_assets?.find(
            (x) => x.token.denom === swapIn.value?.ibcDenom
        );
        if (tokenBalanceIn && tokenBalanceOut) {
            const balanceOut = Number(tokenBalanceOut.token.amount);
            const balanceIn = Number(tokenBalanceIn.token.amount);
            const weightOut = Number(tokenBalanceOut.weight);
            const weightIn = Number(tokenBalanceIn.weight);
            const swapFee = Number(p.pool_params.swap_fee);
            const amount = Number(amountIn.value) * (1 - swapFee);
            const out =
                balanceOut *
                (1 -
                    balanceIn / (balanceIn + amount) ** (weightIn / weightOut));
            return out;
        }
    }
    return 0;
});
</script>
<template>
    <div>
        <!-- modal content -->
        <input
            v-model="open"
            type="checkbox"
            id="PingTokenConvert"
            class="modal-toggle"
            @change="initData()"
        />

        <label for="PingTokenConvert" class="modal cursor-pointer">
            <label class="modal-box relative rounded-lg" for="">
                <h3 class="text-xl font-semibold">Token Convert</h3>

                <div v-if="!osmosisPath" class="text-error mt-3">
                    <span>Not available for chain [{{ chainName }}]</span>
                </div>

                <div class="flex items-center">
                    <input
                        v-model="amountIn"
                        type="text"
                        placeholder="0.01"
                        class="input"
                    />
                    <div class="dropdown">
                        <label tabindex="0" class="flex items-center">
                            <div>{{ swapIn?.symbol }}</div>
                            <Icon icon="mdi:chevron-down" />
                        </label>
                        <div
                            tabindex="0"
                            class="card compact dropdown-content shadow bg-base-100 rounded-box w-64"
                        >
                            <div class="card-body">
                                <div v-for="b in inTokens">
                                    <div class="avatar">
                                        <div class="w-24 rounded-full">
                                            <img :src="b.coinImageUrl" />
                                        </div>
                                    </div>
                                    {{ b.symbol }}
                                    {{
                                        showBalance(
                                            b.ibcDenom || b.denom,
                                            b.decimals
                                        )
                                    }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    Balance:
                    {{ showBalance(swapIn?.ibcDenom, swapIn?.decimals) }}
                </div>

                <div class="" @click="switchs">
                    <Icon
                        icon="mdi:arrow-down-circle"
                        color="#999"
                        class="text-4xl"
                    />
                </div>

                <div class="flex items-center">
                    <div>{{ `≈${outAmount}` }}</div>
                    <div class="dropdown">
                        <label tabindex="0" class="flex items-center">
                            <div>{{ swapOut?.symbol }}</div>
                            <Icon icon="mdi:chevron-down" />
                        </label>
                        <div
                            tabindex="0"
                            class="card compact dropdown-content shadow bg-base-100 rounded-box w-64"
                        >
                            <div class="card-body">
                                <div v-for="b in outTokens">
                                    <div class="avatar">
                                        <div class="w-24 rounded-full">
                                            <img :src="b.coinImageUrl" />
                                        </div>
                                    </div>
                                    {{ b.symbol }}
                                    {{
                                        showBalance(
                                            b.ibcDenom || b.denom,
                                            b.decimals
                                        )
                                    }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="">
                    Balance:
                    {{ showBalance(swapOut?.ibcDenom, swapOut?.decimals) }}
                </div>

                <div>
                    Swap Fee:
                    {{ decimal2percent(pool?.pool_params.swap_fee) }}%
                </div>

                <div v-if="error" class="text-error mt-3">
                    <span>{{ error }}.</span>
                </div>

                <div class="mt-4">
                    <button
                        class="btn btn-primary w-full ping-connect-confirm capitalize text-base"
                        :class="sending ? 'loading' : ''"
                        @click=""
                    >
                        Convert
                    </button>
                </div>
            </label>
        </label>
    </div>
</template>
<script lang="ts">
export default {
    name: 'TokenConvert',
};
</script>

<style scoped></style>
