<script setup lang="ts">
// @ts-ignore
import { ref } from 'vue'
// import pingWidget from '../dist/ping-widget.js';
import pingWidget from '../lib/main';

const sender = 'rizon1jxv0u20scum4trha72c7ltfgfqef6nsc3hg7ch';
const endpoint = 'https://api.rizon.chaintools.tech';

console.log(pingWidget?.wallet.walletStrategy)

const walletAddress = ref();

const getAddress = async () => {
  try {
    const res = await pingWidget?.wallet.getAddresses();
    console.log(res);
    walletAddress.value = res;
  } catch (e: any) {
    console.log(e.errorMessage)
    walletAddress.value = e.errorMessage;
  }
}
</script>

<template>
  <div class="p-4">
    <div class="text-4xl font-bold mb-4">Ping Widget Version: {{ pingWidget?.version }}</div>

    <div class="btn btn-primary" @click="getAddress">{{ pingWidget?.wallet?.walletStrategy?.wallet }}</div>

    <div>
      {{ JSON.stringify(walletAddress) }}
    </div>

    <ping-hello :msg="pingWidget?.version" />

    <label for="delegate" class="btn">Delegate</label>
    <ping-tx-dialog
      type="delegate"
      :sender="sender"
      :endpoint="endpoint"
    ></ping-tx-dialog>

    <label for="send" class="btn">Send</label>
    <ping-tx-dialog
      type="send"
      :sender="sender"
      :endpoint="endpoint"
    ></ping-tx-dialog>
  </div>
</template>

<style scoped></style>
