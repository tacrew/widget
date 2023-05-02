<script setup lang="ts">
// @ts-ignore
// import pingWidget from '../dist/ping-widget.js';
import pingWidget from '../lib/main';
</script>

<template>
  <div>
    Ping Widget Version: {{ pingWidget?.version }}

    <hello-ping :msg="pingWidget?.version" />
  </div>
</template>

<style scoped></style>
