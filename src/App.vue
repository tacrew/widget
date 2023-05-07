<script setup lang="ts">
// @ts-ignore
import { ref } from 'vue';
// import pingWidget from '../dist/ping-widget.js';
import { ref } from 'vue';
import pingWidget from '../lib/main';

const sender = 'cosmos1m8mma95ta2zajqtmfp5c5y3wgeyqzcrc72shjp';
const endpoint = 'https://api-cosmoshub-ia.cosmosia.notional.ventures';
const chainId = "cosmoshub-4"
const hdPath = "m/44'/118/0'/0/0"

const params = JSON.stringify({})
</script>

<template>
  <div>
    Ping Widget Version: {{ pingWidget?.version }}

    <hello-ping :msg="pingWidget?.version" />

    <ping-connect-wallet :chain-id="chainId" :hd-path="hdPath"/>
    <label for="delegate" class="btn">Delegate</label>
    <ping-tx-dialog
      type="delegate"
      :sender="sender"
      :endpoint="endpoint"
      :params="params"
    ></ping-tx-dialog>

    <label for="send" class="btn">Send</label>
    <ping-tx-dialog
      type="send"
      :sender="sender"
      :endpoint="endpoint"
      :params="params"
    ></ping-tx-dialog>
  </div>
</template>

<style scoped></style>
