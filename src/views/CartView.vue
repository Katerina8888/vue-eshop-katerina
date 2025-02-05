<template>
  <main>
    <div class="md:flex" v-if="totalQuantity !== 0">
      <CartItemsWrapper :products="products"></CartItemsWrapper>
      <TotalPrice />
    </div>
    <RouterLink class="text-black ml-6 text-3xl" v-if="totalQuantity === 0" to="/store"
      >Back to product page</RouterLink
    >
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import CartItemsWrapper from '@/components/cart/CartItemsWrapper.vue'
import TotalPrice from '@/components/cart/TotalPrice.vue'

const cartStore = useCartStore()

const products = computed(() => cartStore.products)
const totalQuantity = computed(() => cartStore.totalQuantity)
</script>
