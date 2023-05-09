<script lang="ts" setup>
import { computed, ref } from 'vue';
import { getDelegations } from '../../../utils/http'
import { Coin } from '../../../utils/type';

const props = defineProps({
    endpoint: {type: String, required: true },
    sender: {type: String, required: true},
    params: String,
});

const params = JSON.parse(props.params|| "{}")
const delegation = ref({} as {balance: Coin, delegation: {delegator_address: string, shares: string, validator_address: string}})
const amount = ref("")

getDelegations(props.endpoint, params.validator_address, props.sender).then(x => {

    delegation.value = x.delegation_response
    console.log("delegation:", delegation.value)
})

const msgs = computed(() => {
    return [{
        typeUrl: '/cosmos.staking.v1beta1.MsgUndelegate',
        value: {
          delegatorAddress: props.sender,
          validatorAddress: params.validator_address,
          amount: {
            amount: String(amount.value),
            denom: delegation.value.balance.denom,
          },
        },
      }]
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
                <span class="label-text">Amount</span>
            </label>
            <input v-model="amount" type="number" :placeholder="`Avaiable: ${delegation?.balance?.amount}${delegation?.balance?.denom}}`" class="input input-bordered" />
        </div>
    </div>
</template>