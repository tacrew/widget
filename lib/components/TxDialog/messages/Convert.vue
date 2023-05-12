<script lang="ts" setup>
import { ComputedRef, PropType, computed, ref } from 'vue';
import { getStakingParam, getDenomTraces } from '../../../utils/http'
import { Coin } from '../../../utils/type';
import ChainRegistryClient from '@ping-pub/chain-registry-client';
import { IBCPath } from '@ping-pub/chain-registry-client/dist/types'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

const props = defineProps({
    endpoint: {type: String, required: true },
    sender: {type: String, required: true},
    balances: Object as PropType<Coin[]>,
    params: String,
});
const params = JSON.parse(props.params|| "{}")
const chainName = params.chain_name

const amount = ref("")
const recipient = ref("")
const denom = ref()
const dest = ref("")
const chains = ref([] as IBCPath[])
const sourceChain = ref({} as { channel_id: string, port_id: string } | undefined)
const ibcDenomTraces = ref({} as Record<string, {path: string, base_denom: string}>)

const client = new ChainRegistryClient()

client.fetchIBCPaths().then(paths => {
    chains.value = paths.filter(x => x.path.indexOf(chainName) > -1)
})

getStakingParam(props.endpoint).then(x => {
    denom.value = x.params.bond_denom
})

const msgs = computed(() => {
    const timeout = dayjs().add(1, 'hour')
    return [{
        typeUrl: '/ibc.applications.transfer.v1.MsgTransfer',
        value: {
            sourcePort: sourceChain.value?.port_id || "",
            sourceChannel: sourceChain.value?.channel_id || "",
            token: {
                amount: String(amount.value),
                denom: denom.value
            },
            sender: props.sender,
            receiver: recipient.value,
            timeoutTimestamp: String(timeout.utc().valueOf() * 1000000),
        },
    }]
})
const destDisabled = computed(() => {
    const disable = denom.value.startsWith("ibc/")
    if (disable) dest.value = ""
    return disable
})

function selectDest() {
    client.fetchIBCPathInfo(dest.value).then(info => {
        if(info.chain_1.chain_name === chainName) {
            sourceChain.value = info.channels.find(x => x.chain_1.port_id === 'transfer')?.chain_1 
        }else {
            sourceChain.value = info.channels.find(x => x.chain_2.port_id === 'transfer')?.chain_2
        }
    })
}

function updateIBCToken() {
    const hash = String(denom.value).replace("ibc/", "")
    if(!denom.value.startsWith("ibc/")) return ;
    if(ibcDenomTraces.value[denom.value]) {
        const trace = ibcDenomTraces.value[denom.value]
        const split = trace.path.split('/')
        sourceChain.value = {
            channel_id: split[1],
            port_id: split[0]
        }
    } else {
        getDenomTraces(props.endpoint, hash).then(trace => {
            ibcDenomTraces.value[denom.value] = trace.denom_trace
            const split = trace.denom_trace.path.split('/')
            sourceChain.value = {
                channel_id: split[1],
                port_id: split[0]
            }
        })
    }
}

const available = computed(() => {
    return props.balances?.find(x => x.denom === denom.value) || {amount: "0", denom: "-"}
})

function formatDenom(v: string) {
    if(v.startsWith('ibc/')) {
        const trace = ibcDenomTraces.value[v]
        if(trace) {
            return trace.base_denom
        }
        return `${v.substring(0, 10)}...`
    } 
    return v
}


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
            <select v-model="denom" class="select select-bordered" @change="updateIBCToken">
                <option value="">Select a token</option>
                <option v-for="v in balances" :value="v.denom">
                    {{ v.amount }} {{ formatDenom(v.denom) }}
                </option>
            </select>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Destination</span>
                <span v-if="sourceChain" class="text-xs">{{ sourceChain.channel_id }}/{{ sourceChain.port_id }}</span>
            </label>
            <select v-model="dest" class="select select-bordered capitalize" @change="selectDest" :disabled="destDisabled">
                <option value="">Select Destination</option>
                <option v-for="v in chains" :value="v.path">
                    {{ v.from === params.chain_name? v.to : v.from}}
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
                <span class="text-xs">{{ available?.amount }}{{ formatDenom(available?.denom) }}</span>
            </label>
            <input v-model="amount" type="number" :placeholder="`Available: ${available?.amount}${available?.denom}`" class="input input-bordered" />
        </div>
    </div>
</template>