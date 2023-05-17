<script lang="ts" setup>
import { PropType, computed, ref } from 'vue';
import { getDelegations } from '../../../utils/http'
import { Coin, CoinMetadata } from '../../../utils/type';
import { TokenUnitConverter } from '../../../utils/TokenUnitConverter';

const props = defineProps({
    endpoint: {type: String, required: true },
    sender: {type: String, required: true},
    metadata: Object as PropType<Record<string, CoinMetadata>>,
    params: String,
});

const params = JSON.parse(props.params|| "{}")
const delegation = ref({} as {balance: Coin, delegation: {delegator_address: string, shares: string, validator_address: string}})
const amount = ref("")
const amountDenom = ref("")
const error = ref("")

getDelegations(props.endpoint, params.validator_address, props.sender).then(x => {
    delegation.value = x.delegation_response
}).catch(err => {
    error.value = err
})

const msgs = computed(() => {
    const convert = new TokenUnitConverter(props.metadata)
    return [{
        typeUrl: '/cosmos.staking.v1beta1.MsgUndelegate',
        value: {
          delegatorAddress: props.sender,
          validatorAddress: params.validator_address,
          amount: convert.displayToBase(delegation.value.balance?.denom, {
            amount: String(amount.value),
            denom: amountDenom.value,
          }),
        },
      }]
})

const units = computed(() => {
    const denom = delegation.value.balance?.denom
    if(!props.metadata || !props.metadata[denom]) {
        amountDenom.value = denom
        return [{denom: denom, exponent: 0, aliases: []}]
    }
    const list = props.metadata[denom].denom_units.sort((a, b) => b.exponent - a.exponent)
    if(list.length > 0) amountDenom.value = list[0].denom
    return list
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
            <label class="input-group">
                <input v-model="amount" type="number" :placeholder="`Avaiable: ${delegation?.balance?.amount}${delegation?.balance?.denom}}`" class="input input-bordered w-full" />
                <select v-model="amountDenom" class="select select-bordered">
                    <option v-for="u in units">{{ u.denom }}</option>
                </select>
            </label>
        </div>
        <div class="text-error">{{ error }}</div>
    </div>
</template>