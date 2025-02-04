<template>
  <ul class="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 mx-auto">
    <StoreItem v-for="(product, index) in products" :key="index" :product="product"></StoreItem>
  </ul>
</template>

<script setup lang="ts">
import type { Product } from '@/types'
import StoreItem from './StoreItem.vue'

defineProps<{
  products: Product[]
}>()
</script>
