<template>
  <div
    class="absolute h-8 flex bottom-1 not-only:md:bottom-3 left-1/2 transform -translate-x-1/2 z-10 px-4 py-1 font-bold uppercase"
  >
    <ButtonSymbolsValue>+</ButtonSymbolsValue>
    <StoreInteger></StoreInteger>
    <ButtonSymbolsValue>-</ButtonSymbolsValue>
  </div>
</template>

<script setup lang="ts">
import ButtonSymbolsValue from './ButtonSymbolsValue.vue'
import StoreInteger from './StoreInteger.vue'
</script>
