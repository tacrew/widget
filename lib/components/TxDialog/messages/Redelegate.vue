<script lang="ts" setup>
import { ComputedRef, PropType, computed, ref } from 'vue';
import { getActiveValidators, getDelegations, getInactiveValidators, getStakingParam } from '../../../utils/http'
import { decimal2percent } from '../../../utils/format'
import { Coin } from '../../../utils/type';
const props = defineProps({
    endpoint: {type: String, required: true },
    sender: {type: String, required: true},
    balances: Object as PropType<Coin[]>,
    params: String,
});
const params = JSON.parse(props.params|| "{}")

const validator = ref('')

const activeValidators = ref([])
const inactiveValidators = ref([])
const stakingDenom = ref("")
const unbondingTime = ref("")
const amount = ref("")
const delegation = ref({})

getDelegations(props.endpoint, params.validator_address, props.sender).then(x => {
    console.log("delegations:", x)
    delegation.value = x.delegation_response.balance
})

getActiveValidators(props.endpoint).then(x => {
    activeValidators.value = x.validators
    validator.value = x.validators.find(v => v.description.identity === '6783E9F948541962')?.operator_address
})

const sourceValidator = computed(() => {
    const v = activeValidators.value.find(v => v.operator_address === params.validator_address)
    if(v) {
        return `${v.description.moniker} (${decimal2percent(v.commission.commission_rates.rate)}%)`
    }
    return params.validator_address
})

const msgs = computed(() => {
    return [{
        typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
        value: {
          delegatorAddress: props.sender,
          validatorSrcAddress: params.validator_address,
          validatorDstAddress: validator.value,
          amount: {
            amount: String(amount.value),
            denom: delegation.value.denom,
          },
        },
      }]
})

const list: ComputedRef<{
    operator_address: string, 
    description: {moniker: string}
    commission: { commission_rates: {rate: string}}
    status: string
}[]> = computed(() => {
    return [...activeValidators.value, ...inactiveValidators.value]
})

const available = computed(() => {
    return  delegation.value || { amount: 0, denom: stakingDenom.value }
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
                <span class="label-text">Source Validator</span>
            </label>
            <input :value="sourceValidator" type="text" class="input input-bordered" readonly/>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Destination Validator</span>
            </label>
            <select v-model="validator" class="select select-bordered">
                <option value="">Select a validator</option>
                <option v-for="v in list" :value="v.operator_address">
                    {{ v.description.moniker }} ({{ decimal2percent(v.commission.commission_rates.rate) }}%)
                    <span v-if="v.status !== 'BOND_STATUS_BONDED'">x</span>
                </option>
            </select>
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