<script lang="ts" setup>
import { Coin } from '@cosmjs/amino';
import { PropType, computed, onMounted, ref } from 'vue';
import { fromBase64 } from '@cosmjs/encoding'
import { CoinMetadata } from '../../../utils/type';

const props = defineProps({
    endpoint: { type: String, required: true },
    sender: { type: String, required: true },
    balances: Object as PropType<Coin[]>,
    metadata: Object as PropType<Record<string, CoinMetadata>>,
    params: String,
});
const params = JSON.parse(props.params || "{}")

const admin = ref("")
const label = ref("")
const funds = ref([] as Coin[])
const msg = ref("")

const msgs = computed(() => {
    return [{
        typeUrl: '/cosmwasm.wasm.v1.MsgInstantiateContract',
        value: {
            /** Sender is the that actor that signed the messages */
            sender: props.sender,
            /** Admin is an optional address that can execute migrations */
            admin: admin.value,
            /** CodeID is the reference to the stored WASM code */
            codeId: params.codeId,
            /** Label is optional metadata to be stored with a contract instance. */
            label: label.value,
            /** Msg json encoded message to be passed to the contract on instantiation */
            msg: fromBase64(msg.value),
            /** Funds coins that are transferred to the contract on instantiation */
            funds: funds.value,
        },
    }]
})

function addFunds() {
    const denom = props.balances?.at(0)?.denom || ""
    funds.value.push({ amount: "", denom })
}
function removeFunds() {
    if(funds.value.length > 1)
        funds.value.pop()
}

onMounted(() => {
    addFunds() // add a default fund row
})

const isValid = computed(() => {
    let ok = true
    let error = ""
    if( params.codeId > 0) {
        ok = false
        error = "Code Id is selected"
    }
    return { ok, error }
})
defineExpose({ msgs, isValid })
</script>
<template>
    <div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Sender</span>
            </label>
            <input :value="sender" type="text" class="input input-bordered" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Admin</span>
            </label>
            <input v-model="admin" type="text" class="input input-bordered" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Label</span>
            </label>
            <input v-model="label" type="text" class="input input-bordered" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Messages</span>
            </label>
            <textarea v-model="msg" placeholder="{config: {}}" class="textarea textarea-bordered"></textarea>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Funds</span>
                <span class="label-text">
                    <a class="btn btn-xs" @click="addFunds">+</a>
                    <a class="btn btn-xs" @click="removeFunds">-</a>
                </span>
            </label>
            <label v-for="(coin, i) in funds" class="input-group" :key="i">
                <input v-model="coin.amount" type="number" placeholder="0" class="input input-bordered w-full" />
                <select v-model="coin.denom" class="select input-bordered">
                    <option v-for="b in balances" :value="b.denom">{{ b.denom.substring(0, 10) }}</option>
                </select>
            </label>
        </div>
    </div>
</template>