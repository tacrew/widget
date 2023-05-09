<script lang="ts" setup>
import { computed, ref } from 'vue';

const props = defineProps({
    endpoint: {type: String, required: true },
    sender: {type: String, required: true},
    params: String,
});

const params = JSON.parse(props.params|| "{}")

const msgs = computed(() => {
    return [
        {
          typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
          value: {
            delegatorAddress: props.sender,
            validatorAddress: params.validator_address,
          },
        },
        {
          typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission',
          value: {
            validatorAddress: params.validator_address,
          },
        },
      ]
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