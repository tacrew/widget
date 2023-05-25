<script setup lang="ts">
import { onMounted, ref } from 'vue';
import pingWidget from '../lib/main';

const sender = 'juno1m8mma95ta2zajqtmfp5c5y3wgeyqzcrcgcnv4a';
// const endpoint = 'https://api-cosmoshub-ia.cosmosia.notional.ventures'// 'https://rest.stargaze-apis.com';
const endpoint = 'https://api.uni.junonetwork.io'
const chainId = 'uni-6';
const hdPath = "m/44'/118/0'/0/0";
const chain_name = 'juno'

const params = JSON.stringify({
    proposal_id: '1',
    validator_address: 'starsvaloper1jxv0u20scum4trha72c7ltfgfqef6nscdghxyx',
    chain_name,
    contract: 'add'
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
