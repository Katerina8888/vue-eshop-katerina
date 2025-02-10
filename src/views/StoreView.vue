<template>
  <main>
    <StoreItemsWrapper :products="products"></StoreItemsWrapper>
    <CartIconComponent />
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProductStore } from '@/stores/products'
import StoreItemsWrapper from '@/components/store/StoreItemsWrapper.vue'
import CartIconComponent from '@/components/CartIconComponent.vue'

const productStore = useProductStore()

const products = computed(() => productStore.products)
</script>
