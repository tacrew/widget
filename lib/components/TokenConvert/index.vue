<script setup lang="ts">
import { computed, ref } from 'vue';
import ChainRegistryClient from '@ping-pub/chain-registry-client';
import { IBCInfo, IBCPath } from '@ping-pub/chain-registry-client/dist/types'
import { getBalance, getStakingParam } from '../../utils/http';
import { ConnectedWallet } from '../../wallet/Wallet';
import { Coin } from '../../utils/type';

const props = defineProps({
    chainName: {type: String, required: true },
    endpoint: {type: String, required: true },
    hdPath: String,
});
const OSMOSIS_RPC = "https://rpc.osmosis.zone"
const OSMOSIS_REST = "https://lcd.osmosis.zone"
const DEFAULT_HDPATH = "m/44'/118/0'/0/0"

const sending = ref(false);
const open = ref(false);
const error = ref('');
const chains = ref([] as IBCPath[])
const osmosisPath = ref({} as IBCPath | undefined)
const osmosisPathInfo = ref({} as IBCInfo)
const defaultDenom = ref("")
const sender = ref({} as ConnectedWallet)
const balances = ref([] as Coin[])

async function initData() {
    sender.value = JSON.parse(localStorage.getItem(props.hdPath || DEFAULT_HDPATH ) || '{}') as ConnectedWallet
    if(sender.value.cosmosAddress) {
        await getBalance(props.endpoint, sender.value.cosmosAddress).then((x) => {
            balances.value = x.balances;
        });
    }
}

getStakingParam(props.endpoint).then(x => {
    defaultDenom.value = x.params.bond_denom
})

const client = new ChainRegistryClient()

client.fetchIBCPaths().then(paths => {
    chains.value = paths.filter(x => x.from === props.chainName || x.to === props.chainName)
    const path = chains.value.find(x => x.from === 'osmosis' || x.to === 'osmosis')
    if(path) {
        osmosisPath.value = path
        client.fetchIBCPathInfo(path.path).then(info => {
            osmosisPathInfo.value = info
        })
    }
})


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

        <label for="PingTokenConvert" class="modal cursor-pointer z-[999999]">
            <label class="modal-box relative rounded-lg" for="">
                <h3 class="text-xl font-semibold">Token Convert</h3>
                <div v-if="!osmosisPath" class="text-error mt-3">
                    <span>Not available for chain [{{ chainName }}]</span>
                </div>
                <div class="stats stats-vertical w-full">
  
                    <div class="stat">
                        <div class="stat-title">Osmosis
                            <div class="dropdown">
                            <label tabindex="0" class="btn btn-circle btn-ghost btn-xs text-info">
                                V
                            </label>
                            <div tabindex="0" class="card compact dropdown-content shadow bg-base-100 rounded-box w-64">
                                <div class="card-body">
                                    <ul>
                                        <li>ATOM</li>
                                        <li>Osmosis</li>
                                        <li>AKT</li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="stat-value"><input type="text" class="input" /></div>
                        <div class="stat-desc">Jan 1st - Feb 1st</div>
                    </div>
                    
                    <div class="stat">
                        <div class="stat-title capitalize">{{ chainName }}</div>
                        <div class="stat-value">4,200</div>
                        <div class="stat-desc">↗︎ 400 (22%)</div>
                    </div>
                    
                </div>
                <div v-if="error" class="text-error mt-3">
                    <span>{{ error }}.</span>
                </div>
                <div class="mt-4">
                    <label
                        class="btn btn-primary ping-connect-confirm"
                        :class="sending ? 'loading' : ''"
                        @click=""
                        >Buy</label
                    >
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
