<template>
  <main class="md:flex">
    <CartItemsWrapper :products="products"></CartItemsWrapper>
    <TotalPrice></TotalPrice>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import CartItemsWrapper from '@/components/cart/CartItemsWrapper.vue'
import TotalPrice from '@/components/cart/TotalPrice.vue'

const cartStore = useCartStore()

const products = computed(() => cartStore.products)
</script>
