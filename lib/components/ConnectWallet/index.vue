<script setup lang="ts">
import { ref,computed } from 'vue';
import {
    WalletName,
    createWallet,
    Account,
    ConnectedWallet,
removeWallet,
writeWallet,
} from '../../../lib/wallet/Wallet';
import { readWallet } from '../../../lib/wallet/Wallet';

const props = defineProps({
    chainId: String,
    hdPath: String,
});

const emit = defineEmits(['connect', "disconnect", "update"]);

const sending = ref(false);
const open = ref(false);
const error = ref('');
async function initData() {}
const name = ref(WalletName.Keplr);
const list = [WalletName.Keplr, WalletName.Ledger];
const connected = ref(readWallet(props.hdPath) as ConnectedWallet);

function selectWallet(wallet: WalletName) {
    name.value = wallet;
}
async function connect() {
    sending.value = true;
    error.value = '';
    let accounts = [] as Account[];
    try {
        const wa = createWallet(name.value, {
            chainId: props.chainId,
            hdPath: props.hdPath,
        });
        await wa
            .getAccounts()
            .then((x) => {
                accounts = x;
                if (accounts.length > 0) {
                    const [first] = accounts;
                    connected.value = {
                        wallet: name.value,
                        cosmosAddress: first.address,
                        hdPath: props.hdPath,
                    };
                    writeWallet(connected.value, props.hdPath)
                    emit('connect', {
                        value: connected.value,
                    });
                }
                open.value = false;
            })
            .catch((e) => {
                error.value = e;
                setTimeout(() => {
                    error.value = '';
                }, 5000);
            });
    } catch (e) {
        error.value = e.message;
    }
    sending.value = false;
}
function disconnect() {
    removeWallet(props.hdPath)
    emit('disconnect', { value: connected.value });
    connected.value = {} as ConnectedWallet;
}

let showCopyToast = ref(0)
async function copyAdress(address: string){
  try {
    await navigator.clipboard.writeText(address);
    showCopyToast.value = 1
    setTimeout(()=>{
      showCopyToast.value = 0
    },1000)
    /* Resolved - 文本被成功复制到剪贴板 */
  } catch (err) {
    showCopyToast.value = 2
    setTimeout(()=>{
      showCopyToast.value = 0
    },1000)
  }
}
const tipMsg = computed(()=> {
  return showCopyToast.value === 2 ? {class: 'error', msg: 'Copy Error!'}: {class: 'success', msg: 'Copy Success!'}
})
</script>
<template>
    <div class="mb-4">
        <!-- modal btn -->
        <div
            v-if="connected.cosmosAddress"
            class="dropdown dropdown-hover ping-connect-dropdown"
        >
            <label tabindex="0" class="btn btn-sm m-1 lowercase"
                >{{ connected.wallet }}-{{
                    connected.cosmosAddress?.substring(
                        connected.cosmosAddress?.length - 4
                    )
                }}</label
            >
            <div
                tabindex="0"
                class="dropdown-content menu shadow p-2 bg-base-100 rounded w-64 overflow-auto"
            >
                <div
                    class="px-2 mb-1 text-gray-500 dark:text-gray-400 font-semibold"
                >
                    {{ connected.wallet }}
                </div>
                <div class="">
                    <a
                        class="block py-2 px-2 hover:bg-gray-100 dark:hover:bg-[#353f5a] rounded cursor-pointer"
                        style="overflow-wrap: anywhere"
                        @click="copyAdress(connected.cosmosAddress)"
                    >
                        {{ connected.cosmosAddress }}
                    </a>
                    <a
                        class="block py-2 px-2 hover:bg-gray-100 dark:hover:bg-[#353f5a] rounded cursor-pointer"
                        style="overflow-wrap: anywhere"
                    >
                        {{ connected.hdPath }}
                    </a>
                    <!-- <div class="divider mt-1 mb-1"></div>
                    <RouterLink
                        class="block py-2 px-2 hover:bg-gray-100 dark:hover:bg-[#353f5a] rounded cursor-pointer"
                        to="/wallet/accounts"
                        >Accounts</RouterLink
                    >
                    <RouterLink
                        class="block py-2 px-2 hover:bg-gray-100 dark:hover:bg-[#353f5a] rounded cursor-pointer"
                        to="/wallet/portfolio"
                        >Portfolio</RouterLink
                    > -->
                    <div class="divider mt-1 mb-1"></div>
                    <a
                        class="block py-2 px-2 hover:bg-gray-100 dark:hover:bg-[#353f5a] rounded cursor-pointer"
                        @click="disconnect()"
                        >Disconnected</a
                    >
                </div>
            </div>
            <div class="toast" v-show="showCopyToast === 1">
                <div class="alert alert-success">
                    <div class="text-sm">
                        <span>{{ tipMsg.msg }}</span>
                    </div>
                </div>
            </div>
            <div class="toast" v-show="showCopyToast === 2">
                <div class="alert alert-error">
                    <div class="text-sm">
                        <span>{{ tipMsg.msg }}</span>
                    </div>
                </div>
            </div>
        </div>
        <label
            v-if="!connected.cosmosAddress"
            for="PingConnectWallet"
            class="btn btn-sm ping-connect-btn capitalize"
            >Connect Wallet</label
        >

        <!-- modal content -->
        <input
            v-model="open"
            type="checkbox"
            id="PingConnectWallet"
            class="modal-toggle"
            @change="initData()"
        />

        <label for="PingConnectWallet" class="modal cursor-pointer z-[999999]">
            <label class="modal-box relative rounded-lg" for="">
                <h3 class="text-xl font-semibold">Connect Wallet</h3>
                <ul
                    role="list"
                    class="bg-gray-100 dark:bg-gray-900 rounded-lg mt-4 px-3 py-3"
                >
                    <li
                        class="flex items-center px-2 py-3 hover:bg-gray-200 dark:hover:bg-base-content rounded-lg cursor-pointer"
                        v-for="(i, k) of list"
                        @click="selectWallet(i)"
                    >
                        <img
                            class="h-10 w-10 rounded-full bg-gray-50 mr-4"
                            src="https://wallet.keplr.app/keplr-brand-assets/keplr-logo.svg"
                            alt=""
                        />
                        <p
                            class="text-base font-semibold flex-1 dark:text-gray-300"
                        >
                            {{ i }}
                        </p>
                        <div>
                            <div
                                v-if="i === name"
                                class="w-2 h-2 mr-4 rounded-full bg-success"
                            ></div>
                        </div>
                    </li>
                </ul>
                <div v-if="error" class="text-error mt-3">
                    <span>{{ error }}.</span>
                </div>
                <div class="mt-4">
                    <label
                        class="btn btn-primary ping-connect-confirm"
                        :class="sending ? 'loading' : ''"
                        @click="connect()"
                        >Connect</label
                    >
                </div>
            </label>
        </label>
    </div>
</template>
<script lang="ts">
export default {
    name: 'ConnectWallet',
};
</script>

<style scoped></style>
