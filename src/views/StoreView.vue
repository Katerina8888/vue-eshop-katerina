<template>
  <main>
    <StoreItemsWrapper :products="products"></StoreItemsWrapper>
    <CartIconComponent />
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useCartStore } from '@/stores/cart'
import StoreItemsWrapper from '@/components/store/StoreItemsWrapper.vue'
import CartIconComponent from '@/components/CartIconComponent.vue'

const cartStore = useCartStore()

onMounted(() => {
  cartStore.fetchProducts()
})

const products = computed(() => cartStore.products)
</script>
