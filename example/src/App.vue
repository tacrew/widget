<script setup>
import pingWidget from 'ping-widget'
</script>

<template>
  <div>
    <div>Ping Widget Version: {{ pingWidget?.version }}</div>
    <hello-ping />
  </div>
</template>
