// @ts-nocheck
import './main.css';
import { createApp, h } from 'vue';
import wrapper from 'vue3-webcomponent-wrapper';

import HelloPing from './components/HelloPing/index.vue';
import TxDialog from './components/TxDialog/index.vue';
import ConnectWallet from './components/ConnectWallet/index.vue';

if (!window.customElements.get('ping-hello')) {
  const WcHelloPing = wrapper(HelloPing, createApp, h);
  window.customElements.define('ping-hello', WcHelloPing);
}

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
