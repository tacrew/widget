// @ts-nocheck
import './main.css';
import { createApp, h } from 'vue';
import wrapper from 'vue3-webcomponent-wrapper';
import HelloPing from './components/HelloPing/index.vue';
import TxDialog from './components/TxDialog/index.vue';

const WcHelloPing = wrapper(HelloPing, createApp, h);
window.customElements.define('hello-ping', WcHelloPing);

const WcTxDialog = wrapper(TxDialog, createApp, h);
window.customElements.define('ping-tx-dialog', WcTxDialog);

export default {
  version: '0.0.2',
};
