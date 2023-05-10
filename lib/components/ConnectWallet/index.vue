<script setup lang="ts">
import { computed, ref } from 'vue';
import { WalletName, createWallet, Account, ConnectedWallet } from '../../../lib/wallet/Wallet'

const props = defineProps({
  chainId: String,
  hdPath: String,
});
const DEFAULT_PATH = "m/44'/118/0'/0/0"
const sending = ref(false);
const open = ref(false);
const error = ref('')
async function initData() {

}
const name = ref(WalletName.Keplr)
const list = [WalletName.Keplr, WalletName.Ledger]
const connected = ref(JSON.parse(localStorage.getItem(props.hdPath || DEFAULT_PATH)||"{}") as ConnectedWallet)

function selectWallet(wallet: WalletName) {
  name.value = wallet
}
async function connect() {
  sending.value = true
  error.value = ''
  const wa = createWallet(name.value, {chainId: props.chainId, hdPath: props.hdPath});
  let accounts = [] as Account[]
  await wa.getAccounts().then( x => {
    accounts = x
    if(accounts.length > 0) {
      const [first] = accounts
      connected.value = {wallet: name.value, cosmosAddress: first.address, hdPath: props.hdPath}
      localStorage.setItem(props.hdPath || DEFAULT_PATH , JSON.stringify(connected.value))
    }
    open.value = false
  }).catch((e) => {
    error.value = e
    setTimeout(()=> {error.value = ""}, 5000)
  })
  sending.value = false
}
function disconnect() {
  localStorage.removeItem(props.hdPath || DEFAULT_PATH)
  connected.value = {} as ConnectedWallet
}

</script>
<template>
  <div>
    <div v-if="connected.cosmosAddress" class="dropdown dropdown-hover">  
      <label tabindex="0" class="btn m-1">{{ connected.wallet }}-{{ connected.cosmosAddress?.substring(connected.cosmosAddress?.length - 4) }}</label>
      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>{{ connected.cosmosAddress}}</a></li>
        <li><a>{{ connected.hdPath }}</a></li>
        <div class="divider"></div> 
        <li><a @click="disconnect()">Disconnected</a></li>
      </ul>
    </div>
    <label v-if="!connected.cosmosAddress" for="PingConnectWallet" class="btn">Connect Wallet</label>
    <!-- Put this part before </body> tag -->
    <input v-model="open" type="checkbox" id="PingConnectWallet" class="modal-toggle" @change="initData()" />
    <label for="PingConnectWallet" class="modal cursor-pointer">
      <label class="modal-box relative" for="">
        <h3 class="text-lg font-bold">Connect Wallet</h3>
        <ul role="list" class="divide-y divide-gray-100">
          <li class="flex justify-between gap-x-6 py-5" v-for="(i, k) of list" @click="selectWallet(i)">
            <div class="flex gap-x-4">
              <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              <div class="min-w-0">
                <p class="text-sm font-semibold leading-6 text-gray-900">{{ i }}</p>
              </div>
            </div>
            <div class="hidden sm:flex sm:flex-col sm:items-end">
              <label v-if="i === name" class="btn btn-sm btn-circle bg-success">✔️</label>
            </div>
          </li>
        </ul>
        <div v-if="error" class="alert alert-error shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{{ error }}.</span>
          </div>
        </div>
        <div class="modal-action">
          <label class="btn" :class="sending?'loading':''" @click="connect()">Connect</label>
        </div>
      </label>
    </label>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ConnectWallet',
};
</script>