// @ts-nocheck
import './main.css';
import { createApp, h } from 'vue';
import * as wallet from './utils/wallet';
import wrapper from 'vue3-webcomponent-wrapper';

import HelloPing from './components/HelloPing/index.vue';
import TxDialog from './components/TxDialog/index.vue';

if (!window.customElements.get('ping-hello')) {
  const WcHelloPing = wrapper(HelloPing, createApp, h);
  window.customElements.define('ping-hello', WcHelloPing);
}

if (!window.customElements.get('ping-tx-dialog')) {
  const WcTxDialog = wrapper(TxDialog, createApp, h);
  window.customElements.define('ping-tx-dialog', WcTxDialog);
}

export default {
  version: '0.0.2',
  wallet,
};
