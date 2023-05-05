<script setup lang="ts">
import { ref } from 'vue';
import {getAccount, getBalance} from '../../utils/http'

const props = defineProps({
  type: String,
  endpoint: String,
  sender: String,
  params: Object,
});
const advance = ref(false)
const titles = {
  delegate: "Delegate",
  withdraw: "Withdraw",
  send: "Send Token",
}
const sending = ref(false);
async function sendTx() {
  sending.value = true
  if(props.endpoint && props.sender) {
    const balance = await getBalance(props.endpoint, props.sender)
    const account = await getAccount(props.endpoint, props.sender)

    console.log("result:", balance, account)
    sending.value = false
  }
  
}
</script>
<template>
  <div>
    <!-- Put this part before </body> tag -->
    <input type="checkbox" :id="type" class="modal-toggle" />
    <label :for="type" class="modal cursor-pointer">
      <label class="modal-box relative" for="">
        <label :for="type" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-lg font-bold">{{ titles[type||""]}}</h3>
        <form class="space-y-6" action="#" method="POST">
          <div :class="advance?'':'hidden'">
            <div>
              <label for="fees" class="block text-sm font-medium leading-6 text-gray-900">Fees</label>
              <div class="mt-2">
                <input id="fees" name="fees" type="number" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between">
                <label for="gas" class="block text-sm font-medium leading-6 text-gray-900">Gas</label>
              </div>
              <div class="mt-2">
                <input id="gas" name="gas" type="number" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div>
              <label for="memo" class="block text-sm font-medium leading-6 text-gray-900">Memo</label>
              <div class="mt-2">
                <input id="memo" name="memo" type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div>
              <label for="wallet" class="block text-sm font-medium leading-6 text-gray-900">Wallet</label>
              <div class="mt-2">
                <input id="email" name="email" type="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
          </div>
        </form>
        <div class="modal-action flex justify-between justify-items-center">
          <span><input v-model="advance" type="checkbox" :id="`${type}-advance`" class="checkbox"><label :for="`${type}-advance`" >Advance</label></span>
          <label class="btn" :class="sending?'loading':''" @click="sendTx()">Send</label>
        </div>
      </label>
    </label>
  </div>
</template>
<script lang="ts">
export default {
  name: 'TxDialog',
};
</script>