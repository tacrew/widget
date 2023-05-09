import './main.css';
import { createApp, h } from 'vue';
// @ts-ignore
import wrapper from 'vue3-webcomponent-wrapper';

import TxDialog from './components/TxDialog/index.vue';
import ConnectWallet from './components/ConnectWallet/index.vue';

if (!window.customElements.get('ping-tx-dialog')) {
    const WcTxDialog = wrapper(TxDialog, createApp, h);
    window.customElements.define('ping-tx-dialog', WcTxDialog);
}

if (!window.customElements.get('ping-connect-wallet')) {
    const WcTxDialog = wrapper(ConnectWallet, createApp, h);
    window.customElements.define('ping-connect-wallet', WcTxDialog);
}

export default {
    version: '0.0.2',
};
