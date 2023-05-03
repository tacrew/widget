<template>
  <div class="font-bold text-red-400 text-4xl">Hello Ping {{ msg }}</div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { defineProps } from 'vue';

defineProps({
  msg: String,
});
</script>
