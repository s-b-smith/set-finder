<template>
  <header>
    <h1>THE HEADER</h1>
  </header>

  <main>
    <p>A BODY I GUESS</p>
    <Button @click="showMoney">Show me the MONEY</Button>
    <p v-if="shouldShowMoney">$$$$</p>
  </main>
</template>

<script setup lang="ts">
import { Button } from 'primevue';
import { ref } from 'vue';

const shouldShowMoney = ref(false);
const showMoney = () => (shouldShowMoney.value = true);
</script>
