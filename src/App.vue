<script setup lang="ts">
// @ts-ignore
// import pingWidget from '../dist/ping-widget.js';
import pingWidget from '../lib/main';

const sender = 'rizon1jxv0u20scum4trha72c7ltfgfqef6nsc3hg7ch';
const endpoint = 'https://api.rizon.chaintools.tech';
const params = JSON.stringify({
  fees: { amount: "1000000", denom: "uatolo" }
})
</script>

<template>
  <div>
    Ping Widget Version: {{ pingWidget?.version }}

    <hello-ping :msg="pingWidget?.version" />

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
