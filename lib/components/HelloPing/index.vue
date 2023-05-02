<template>
  <div class="hello-ping">Hello Ping {{ msg }}</div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { defineProps } from 'vue';

defineProps({
  msg: String,
});
</script>

<style scoped>
.hello-ping {
  font-size: 24px;
  font-weight: bold;
  color: #e66;
}
</style>