// @ts-nocheck
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'ping-widget',
      // the proper extensions will be added
      fileName: 'ping-widget',
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
