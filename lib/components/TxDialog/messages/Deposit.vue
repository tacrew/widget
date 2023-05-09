<script lang="ts" setup>
import { PropType, computed, ref } from 'vue';
import { Coin } from '../../../utils/type';
import { getStakingParam } from '../../../utils/http';

const props = defineProps({
    endpoint: {type: String, required: true },
    sender: {type: String, required: true},
    balances: Object as PropType<Coin[]>,
    params: String,
});

const params = JSON.parse(props.params || "{}")
const denom = ref("")
const amount = ref("")

getStakingParam(props.endpoint).then(x => {
    denom.value = x.params.bond_denom
})

const available = computed(() => {
    return props.balances?.find(x => x.denom === denom.value) || {amount: "0", denom: "-"}
})

const msgs = computed(() => {
    return [{
        typeUrl: '/cosmos.gov.v1beta1.MsgDeposit',
        value: {
          depositor: props.sender,
          proposalId: params.proposal_id,
          amount: [
            {
              amount: String(amount.value),
              denom: denom.value,
            },
          ],
        },
      }]
})

defineExpose({ msgs })
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
                <span>{{ available?.amount }}{{ available?.denom }}</span>
            </label>
            <input v-model="amount" type="number" :placeholder="`Available: ${available?.amount}${available?.denom}`" class="input input-bordered" />
        </div>
    </div>
</template>