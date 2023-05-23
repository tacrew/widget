<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { getDelegateRewards } from '../../../utils/http';

const props = defineProps({
    endpoint: {type: String, required: true },
    sender: {type: String, required: true},
    params: String,
});

const params = JSON.parse(props.params|| "{}")
const rewards = ref([] as {reward: {amount: string, denom: string}, validator_address:string}[]) 

onMounted(() => {
    getDelegateRewards(props.endpoint, props.sender).then(x => {
        rewards.value = x.rewards
    })
})

const msgs = computed(() => {
    const delegations = rewards.value?.map(x => {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
          value: {
            delegatorAddress: props.sender,
            validatorAddress: x.validator_address,
          },
        }
    })
    return [
        ...delegations,
        {
          typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission',
          value: {
            validatorAddress: params.validator_address,
          },
        },
      ]
})

const isValid = computed(() => {
    let ok = true
    let error = ""
    if(!props.sender) {
        ok = false
        error = "Sender is empty"
    }
    if(!params.validator_address) {
        ok = false
        error = "Validator is empty"
    }
    return { ok, error }
})

defineExpose({msgs, isValid})
</script>
<template>
    <div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Sender</span>
            </label>
            <input :value="sender" type="text" class="input input-bordered" />
        </div>
    </div>
</template>