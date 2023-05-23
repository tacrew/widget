<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { getDelegateRewards } from '../../../utils/http'

const props = defineProps({
    endpoint: {type: String, required: true },
    sender: {type: String, required: true},
    params: String,
});

const rewards = ref([] as {reward: {amount: string, denom: string}, validator_address:string}[]) 

onMounted(() => {
    getDelegateRewards(props.endpoint, props.sender).then(x => {
        rewards.value = x.rewards
    })
})


const msgs = computed(() => {
    return rewards.value.map(x => {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
          value: {
            delegatorAddress: props.sender,
            validatorAddress: x.validator_address,
          },
        }
    })
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
    </div>
</template>