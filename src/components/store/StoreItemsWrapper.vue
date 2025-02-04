<template>
  <div class="max-w-5/6 mx-auto">
    <ul class="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 mx-auto">
      <StoreItem v-for="(product, index) in products" :key="index" :product="product" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types'
import StoreItem from './StoreItem.vue'

defineProps<{
  products: Product[]
}>()
</script>
