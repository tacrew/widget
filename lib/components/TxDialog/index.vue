<script setup lang="ts">
import { ref, computed, defineAsyncComponent } from 'vue';

import Delegate from './messages/Delegate.vue';
import Deposit from './messages/Deposit.vue';
import Redelegate from './messages/Redelegate.vue';
import Send from './messages/Send.vue';
import Transfer from './messages/Transfer.vue';
import Unbond from './messages/Unbond.vue';
import Vote from './messages/Vote.vue';
import Withdraw from './messages/Withdraw.vue';
import WithdrawCommission from './messages/WithdrawCommission.vue';
import { useTxDialog } from './useTxDialog';

const props = defineProps({
    type: String,
    endpoint: String,
    sender: String,
    feeDenom: String,
    params: String,
});

const txStore = useTxDialog()
txStore.initial(props.type, props.endpoint, props.sender, props.params)

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

// functional variable
const view = ref('input'); // input, submiting
const open = ref(false);
const error = ref('');

// input field
const msgBox = ref({ msgs: [] });

async function initData() {
    if (open.value) {
        sending.value = false;
    }
}


function showTitle() {
    return (props.type || 'Sending Transaction').replace('_', ' ');
}
</script>
<template>
    <div class="text-gray-600">
        <!-- Put this part before </body> tag -->
        <input
            v-model="open"
            type="checkbox"
            :id="type"
            class="modal-toggle"
            @change="initData()"
        />
        <label :for="type" class="modal cursor-pointer">
            <label class="modal-box relative p-5" for="">
                <label
                    :for="type"
                    class="btn btn-sm btn-circle absolute right-4 top-4"
                    >✕</label
                >
                <h3 class="text-lg font-bold capitalize dark:text-gray-300">
                    {{ showTitle() }}
                </h3>
                <component
                    :is="msgType"
                    ref="msgBox"
                    :endpoint="endpoint"
                    :sender="sender"
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
                            <label class="input-group flex items-center">
                                <input
                                    v-model="txStore.feeAmount"
                                    type="text"
                                    placeholder="0.001"
                                    class="input input-bordered flex-1 w-0 dark:text-gray-300"
                                />
                                <select
                                    v-model="txStore.feeDenom"
                                    class="select input input-bordered w-[200px]"
                                >
                                    <option disabled selected>
                                        Select Fee Token
                                    </option>
                                    <option v-for="t in txStore.balances">
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
                                v-model="txStore.gas"
                                type="number"
                                placeholder="2000000"
                                class="input input-bordered dark:text-gray-300"
                            />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Memo</span>
                            </label>
                            <input
                                v-model="txStore.memo"
                                type="text"
                                placeholder="Memo"
                                class="input input-bordered dark:text-gray-300"
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
                    class="modal-action flex justify-between items-center"
                >
                    <div class="flex items-center cursor-pointer">
                        <input
                            v-model="advance"
                            type="checkbox"
                            :id="`${type}-advance`"
                            class="checkbox checkbox-sm checkbox-primary mr-2"
                        /><label
                            :for="`${type}-advance`"
                            class="cursor-pointer dark:text-gray-400"
                            >Advance</label
                        >
                    </div>
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
