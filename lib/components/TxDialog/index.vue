<script setup lang="ts">
// @ts-nocheck
import { ref, computed } from 'vue';
import { getAccount, getBalance } from '../../utils/http';
import { Coin } from '../../utils/type';
import { WalletName } from '../../../lib/wallet/Wallet';
import { UniClient } from '../../../lib/wallet/UniClient';

import Delegate from './messages/Delegate.vue';
import Deposit from './messages/Deposit.vue';
import Redelegate from './messages/Redelegate.vue';
import Send from './messages/Send.vue';
import Transfer from './messages/Transfer.vue';
import Unbond from './messages/Unbond.vue';
import Vote from './messages/Vote.vue';
import Withdraw from './messages/Withdraw.vue';
import WithdrawCommission from './messages/WithdrawCommission.vue';

const props = defineProps({
    type: String,
    endpoint: String,
    sender: String,
    feeDenom: String,
    params: String,
});

const msgType = computed(() => {
    switch (props.type?.toLowerCase()) {
        case 'send':
            return Send;
        case 'delegate':
            return Delegate;
        case 'withdraw':
            return Withdraw;
        case 'withdraw_commission':
            return WithdrawCommission;
        case 'redelegate':
            return Redelegate;
        case 'transfer':
            return Transfer;
        case 'unbond':
            return Unbond;
        case 'vote':
            return Vote;
        case 'deposit':
            return Deposit;
        default:
            return Send;
    }
});

const titles = {};

const advance = ref(false);
const sending = ref(false);
const balance = ref([] as Coin[]);
const account = ref({} as { account_number: string; sequence: string });

// functional variable
const p = JSON.parse(props.params || '{}');
const view = ref('input'); // input, submiting
const open = ref(false);
const error = ref('');

// input field
const msgBox = ref(null);
const fees = ref(Number(p.fees?.amount || 2000));
const gasInfo = ref(200000);
const memo = ref('Ping.pub');

async function initData() {
    if (open.value && props.endpoint && props.sender) {
        await getBalance(props.endpoint, props.sender).then((x) => {
            balance.value = x.balances;
        });
        // account.value = await getAccount(props.endpoint, props.sender).then(x => x.account);
        console.log('bal:', balance.value);
        console.log('account', account.value);
        sending.value = false;
    }
}
async function sendTx() {
    // console.log(msgs.value.msgs)
    if (!props.sender) throw new Error('sender should not be empty!');
    if (!props.endpoint) throw new Error('Endpoint is empty');
    sending.value = true; // disable sending btn

    const acc = await getAccount(props.endpoint, props.sender);

    console.log('acc', acc.account);

    // TODO: get message from sub component
    // const messages = [
    //   {
    //     typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
    //     value: {
    //       delegatorAddress: props.sender,
    //       validatorAddress: "cosmosvaloper1jxv0u20scum4trha72c7ltfgfqef6nsch7q6cu",
    //     },
    //   },
    // ]
    const messages = msgBox.value.msgs;

    console.log('messages: ', messages);

    const tx = {
        chainId: 'cosmoshub-4',
        signerAddress: props.sender,
        messages,
        fee: {
            gas: String(gasInfo.value),
            amount: [{ amount: String(fees.value), denom: 'uatom' }],
        },
        memo: memo.value,
        signerData: {
            accountNumber: Number(acc.account.account_number),
            sequence: Number(acc.account.sequence),
            chainId: 'cosmoshub-1',
        },
    };
    console.log('tx:', tx);

    try {
        const client = new UniClient(WalletName.Keplr, {
            chainId: 'cosmoshub-4',
        });

        // TODO simulate gas info later
        //   const gasInfo = await client.simulate( props.endpoint, [
        //       {
        //         typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
        //         value: {
        //           delegatorAddress: props.sender,
        //           validatorAddress: "cosmosvaloper1jxv0u20scum4trha72c7ltfgfqef6nsch7q6cu",
        //         },
        //       },
        //       {
        //         typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission',
        //         value: {
        //           validatorAddress: "cosmosvaloper1jxv0u20scum4trha72c7ltfgfqef6nsch7q6cu",
        //         },
        //       },
        //     ],
        //     "",
        //     Number(account.value.sequence),
        //   )

        //   console.log("gasInfo:", gasInfo)
        const txRaw = await client.sign(tx);
        const response = await client.broadcastTx(props.endpoint, txRaw);
        // show submitting view
        view.value = 'submitting';

        console.log('broadcast:', response);
        setTimeout(() => (open.value = false), 6000);
    } catch (e) {
        console.error(e);
        sending.value = false;
        error.value = e;
        setTimeout(() => (error.value = ''), 5000);
    }
}
</script>
<template>
    <div>
        <!-- Put this part before </body> tag -->
        <input
            v-model="open"
            type="checkbox"
            :id="type"
            class="modal-toggle"
            @change="initData()"
        />
        <label :for="type" class="modal cursor-pointer">
            <label class="modal-box relative" for="">
                <label
                    :for="type"
                    class="btn btn-sm btn-circle absolute right-2 top-2"
                    >✕</label
                >
                <h3 class="text-lg font-bold">
                    {{ titles[type || 'Send Transaction'] }}
                </h3>
                <component
                    :is="msgType"
                    ref="msgBox"
                    :endpoint="endpoint"
                    :sender="sender"
                    :balances="balance"
                    :params="params"
                />
                <form
                    v-if="view === 'input'"
                    class="space-y-6"
                    action="#"
                    method="POST"
                >
                    <div :class="advance ? '' : 'hidden'">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Fees</span>
                            </label>
                            <label class="input-group">
                                <input
                                    v-model="fees"
                                    type="text"
                                    placeholder="0.001"
                                    class="input input-bordered"
                                />
                                <select class="select input input-bordered">
                                    <option disabled selected>
                                        Select Fee Token
                                    </option>
                                    <option v-for="t in balance">
                                        {{ t.denom }}
                                    </option>
                                </select>
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Gas</span>
                            </label>
                            <input
                                v-model="gasInfo"
                                type="number"
                                placeholder="2000000"
                                class="input input-bordered"
                            />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Memo</span>
                            </label>
                            <input
                                v-model="memo"
                                type="text"
                                placeholder="Memo"
                                class="input input-bordered"
                            />
                        </div>
                    </div>
                </form>

                <div v-if="view === 'submitting'">
                    <progress class="progress w-56"></progress>
                </div>

                <div v-if="error" class="alert alert-error shadow-lg">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="stroke-current flex-shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>{{ error }}.</span>
                    </div>
                </div>

                <div
                    v-if="view === 'input'"
                    class="modal-action flex justify-between justify-items-center"
                >
                    <span
                        ><input
                            v-model="advance"
                            type="checkbox"
                            :id="`${type}-advance`"
                            class="checkbox"
                        /><label :for="`${type}-advance`">Advance</label></span
                    >
                    <label
                        class="btn"
                        :class="sending ? 'loading' : ''"
                        @click="sendTx()"
                        >Send</label
                    >
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
