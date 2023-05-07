<script setup lang="ts">
import { ref } from 'vue';
import {getAccount, getBalance, simulate} from '../../utils/http'
import { Coin } from '../../utils/type';
import { WalletName, createWallet } from '../../../lib/wallet/Wallet'
import { UniClient } from '../../../lib/wallet/UniClient'

const props = defineProps({
  type: String,
  endpoint: String,
  sender: String,
  feeDenom: String,
  params: String,
});
const advance = ref(false)
const titles = {
  delegate: "Delegate",
  withdraw: "Withdraw",
  send: "Send Token",
}
const sending = ref(false);
const balance = ref([] as Coin[])
const account = ref({} as {account_number: string, sequence: string})

const p = JSON.parse(props.params||"{}")
const fees = ref(Number(p.fees?.amount||2000))
const open = ref(false);
async function initData() {
  if(open.value && props.endpoint && props.sender) {
    balance.value = await getBalance(props.endpoint, props.sender)
    account.value = await getAccount(props.endpoint, props.sender).then(x => x.account);
    console.log(balance.value)
    console.log(account.value)
    sending.value = false
  }
}
async function sendTx() {
  if(!props.sender) throw new Error("sender should not be empty!")
  if(!props.endpoint) throw new Error("Endpoint is empty")

  const acc = await getAccount(props.endpoint, props.sender);

  console.log('acc', acc.account)

  const tx = {
    chainId: "cosmoshub-4",
    signerAddress: props.sender,
    messages: [
        {
          typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
          value: {
            delegatorAddress: props.sender,
            validatorAddress: "cosmosvaloper1jxv0u20scum4trha72c7ltfgfqef6nsch7q6cu",
          },
        },
      ],
    fee: { gas: "200000", amount: [{amount: "20000", denom: "uatom"}]},
    memo: "",
    signerData: {
      accountNumber: Number(acc.account.account_number),
      sequence: Number(acc.account.sequence),
      chainId: "cosmoshub-1"
    }
  }
  console.log("tx:", tx)
  const client = new UniClient(WalletName.Keplr, {chainId: "cosmoshub-4"})

  try{
    
  const gasInfo = await client.simulate( props.endpoint, [
      {
        typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
        value: {
          delegatorAddress: props.sender,
          validatorAddress: "cosmosvaloper1jxv0u20scum4trha72c7ltfgfqef6nsch7q6cu",
        },
      },
      {
        typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission',
        value: {
          validatorAddress: "cosmosvaloper1jxv0u20scum4trha72c7ltfgfqef6nsch7q6cu",
        },
      },
    ],
    "",
    Number(account.value.sequence),
  ) 

  console.log("gasInfo:", gasInfo)

}catch(e) {
  console.log(e)
}
  // const txRaw = await client.sign(tx)

  // console.log("sign:", txRaw, acc)

  // const reponse = await client.broadcastTx(props.endpoint, txRaw)
  // console.log("broadcast:", reponse)
}
</script>
<template>
  <div>
    <!-- Put this part before </body> tag -->
    <input v-model="open" type="checkbox" :id="type" class="modal-toggle" @change="initData()" />
    <label :for="type" class="modal cursor-pointer">
      <label class="modal-box relative" for="">
        <label :for="type" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-lg font-bold">{{ titles[type||""]}}</h3>
        <form class="space-y-6" action="#" method="POST">
          <div :class="advance?'':'hidden'">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Fees</span>
              </label>
              <label class="input-group">
                <input v-model="fees" type="text" placeholder="0.01" class="input input-bordered" />
                <span>{{  }}</span>
              </label>
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