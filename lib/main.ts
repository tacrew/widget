// @ts-nocheck
import { createApp, h } from 'vue';
import wrapper from 'vue3-webcomponent-wrapper';
import HelloPing from './components/HelloPing/index.vue';

const webComponent = wrapper(HelloPing, createApp, h);
window.customElements.define('hello-ping', webComponent);

export default {
  version: '0.0.1',
  components: {
    HelloPing,
  },
};
