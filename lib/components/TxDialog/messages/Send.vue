<script lang="ts" setup>
import { ComputedRef, PropType, computed, ref } from 'vue';
import { getActiveValidators, getInactiveValidators, getStakingParam } from '../../../utils/http'
import { decimal2percent } from '../../../utils/format'
import { Coin } from '../../../utils/type';
const props = defineProps({
    endpoint: {type: String, required: true },
    sender: {type: String, required: true},
    balances: Object as PropType<Coin[]>,
    params: String,
});
const params = JSON.parse(props.params|| "{}")

const amount = ref("")
const recipient = ref("")
const denom = ref()

getStakingParam(props.endpoint).then(x => {
    denom.value = x.params.bond_denom
})

const msgs = computed(() => {
    return [
        {
          typeUrl: '/cosmos.bank.v1beta1.MsgSend',
          value: {
            fromAddress: props.sender,
            toAddress: recipient.value,
            amount: [
              {
                amount: String(amount.value),
                denom: available.value.denom,
              },
            ],
          },
        },
      ]
})


const available = computed(() => {
    return props.balances?.find(x => x.denom === denom.value) || {amount: "0", denom: "-"}
})


defineExpose({msgs})
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
                <span class="label-text">Balances</span>
            </label>
            <select v-model="denom" class="select select-bordered">
                <option value="">Select a token</option>
                <option v-for="v in balances" :value="v.denom">
                    {{ v.amount }} {{ v.denom }}
                </option>
            </select>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Recipient</span>
            </label>
            <input v-model="recipient" type="text" class="input input-bordered" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Amount</span>
                <span>{{ available?.amount }}{{ available?.denom }}</span>
            </label>
            <input v-model="amount" type="number" :placeholder="`Available: ${available?.amount}${available?.denom}`" class="input input-bordered" />
        </div>
    </div>
</template>