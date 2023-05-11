<script setup lang="ts">
import { ref } from 'vue';
import {
    WalletName,
    createWallet,
    Account,
    ConnectedWallet,
} from '../../../lib/wallet/Wallet';

const props = defineProps({
    chainId: String,
    hdPath: String,
});
const DEFAULT_HDPATH = "m/44'/118/0'/0/0"
const sending = ref(false);
const open = ref(false);
const error = ref('');
async function initData() {}
const name = ref(WalletName.Keplr);
const list = [WalletName.Keplr, WalletName.Ledger];
const connected = ref(
    JSON.parse(
        localStorage.getItem(props.hdPath || DEFAULT_HDPATH ) || '{}'
    ) as ConnectedWallet
);

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
                    localStorage.setItem(
                        props.hdPath || DEFAULT_HDPATH ,
                        JSON.stringify(connected.value)
                    );
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
    localStorage.removeItem( props.hdPath || DEFAULT_HDPATH );
    connected.value = {} as ConnectedWallet;
}
</script>
<template>
    <div>
        <!-- modal btn -->
        <div
            v-if="connected.cosmosAddress"
            class="dropdown dropdown-hover ping-connect-dropdown"
        >
            <label tabindex="0" class="btn m-1"
                >{{ connected.wallet }}-{{
                    connected.cosmosAddress?.substring(
                        connected.cosmosAddress?.length - 4
                    )
                }}</label
            >
            <ul
                tabindex="0"
                class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li>
                    <a>{{ connected.cosmosAddress }}</a>
                </li>
                <li>
                    <a>{{ connected.hdPath }}</a>
                </li>
                <div class="divider"></div>
                <li><a @click="disconnect()">Disconnected</a></li>
            </ul>
        </div>
        <label
            v-if="!connected.cosmosAddress"
            for="PingConnectWallet"
            class="btn ping-connect-btn"
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
