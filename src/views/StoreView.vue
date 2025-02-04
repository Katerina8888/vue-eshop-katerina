<template>
  <main>
    <StoreItemsWrapper :products="products"></StoreItemsWrapper>
    <CartIconComponent />
  </main>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import StoreItemsWrapper from '@/components/store/StoreItemsWrapper.vue'
import CartIconComponent from '@/components/CartIconComponent.vue'
import type { Product } from '@/types'

const products = ref<Product[]>([])

onMounted(async () => {
  try {
    const response = await fetch('/products.json')
    products.value = (await response.json()) as Product[]
  } catch (error) {
    console.error('Error:', error)
  }
})
</script>
