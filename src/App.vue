<script setup lang="ts">
import { onMounted, ref } from 'vue';
import pingWidget from '../lib/main';
import { ethToEthermint, ethermintToEth } from '../lib/utils/format';

// const sender = "evmos1ayp22xk4nwc9lhjh6tvdat2j2klnvvk29yx87m"
const sender = 'evmos13zl7c4ea60jt05hxhl2dp443r7zrlz4plc5m8z';
// const endpoint = 'https://api-cosmoshub-ia.cosmosia.notional.ventures'// 'https://rest.stargaze-apis.com';
// const endpoint = 'https://api.uni.junonetwork.io'
const endpoint = 'https://rest.bd.evmos.org:1317'
const chainId = 'evmos_9001-2';
const hdPath = "m/44'/60/0'/0/0";
const chain_name = 'evmos'

const params = JSON.stringify({
    proposal_id: '1',
    validator_address: "evmosvaloper1tdss4m3x7jy9mlepm2dwy8820l7uv6m2vx6z88",
    chain_name,
    contract: 'add',
    fees: {amount: '6000000000000000', denom: ''}
});

const types = [
    'send',
    'delegate',
    'vote',
    'redelegate',
    'unbond',
    'transfer',
    'deposit',
    'withdraw',
    'withdraw_commission',
    'wasm_instantiate_contract',
    'wasm_execute_contract',
    'wasm_store_code'
];
const toOpen = ref('send');

const theme = ref('light');
const switchTheme = () => {
    if (theme.value === 'light') {
        theme.value = 'dark';
        document.documentElement.classList.add('dark');
    } else {
        theme.value = 'light';
        document.documentElement.classList.remove('dark');
    }
    document.documentElement.setAttribute('data-theme', theme.value);
};

onMounted(() => {
    document.documentElement.classList.add('light');
    document.documentElement.setAttribute('data-theme', 'light');
});
const walletStateChange = (res: any) => {
   console.log(res, 'resres');
};

console.log("0x88BFec573Dd3E4b7d2E6BfD4D0D6B11F843F8aa1")
console.log(ethToEthermint("0x88BFec573Dd3E4b7d2E6BfD4D0D6B11F843F8aa1", "evmos"))
console.log(ethermintToEth("evmos13zl7c4ea60jt05hxhl2dp443r7zrlz4plc5m8z"))

</script>

<template>
    <div class="bg-gray-50 dark:bg-base-100 dark:text-white min-h-[100vh]">
        Ping Widget Version: {{ pingWidget?.version }}

        <div class="btn btn-sm normal-case" @click="switchTheme()">
            Theme: {{ theme }}
        </div>

        <div>&nbsp;</div>
        <ping-connect-wallet
            :chain-id="chainId"
            :hd-path="hdPath"
            @change="walletStateChange"
        />

        <select v-model="toOpen">
            <option v-for="i in types">{{ i }}</option>
        </select>

        <br />

        <label :for="toOpen" class="btn">{{ toOpen }}</label>
        <ping-tx-dialog
            :type="toOpen"
            :sender="sender"
            :endpoint="endpoint"
            :hd-path="hdPath"
            :params="params"
        ></ping-tx-dialog>

        <br />
        // example:<br />
        <label for="withdraw" class="btn">Withdraw</label>
        <ping-tx-dialog
            type="withdraw"
            :sender="sender"
            :endpoint="endpoint"
            :hd-path="hdPath"
            :params="params"
        ></ping-tx-dialog>

        <label for="store_code" class="btn">Store Code</label>
        <ping-tx-dialog
            type="store_code"
            :sender="sender"
            :endpoint="endpoint"
            :hd-path="hdPath"
            :params="params"
        ></ping-tx-dialog>

        <label for="PingTokenConvert" class="btn">Token Convert</label>
        <ping-token-convert
            :chain-name="chain_name"
            :endpoint="endpoint"
            hd-path="m/44'/118/0'/0/0"
        ></ping-token-convert>
    </div>
</template>


<style scoped></style>
