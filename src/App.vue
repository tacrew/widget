<script setup lang="ts">
// @ts-ignore
import pingWidget from '../dist/ping-widget.js';
</script>

<template>
  <div>
    Ping Widget Version: {{ pingWidget?.version }}

    <hello-ping />
  </div>
</template>

<style scoped></style>
