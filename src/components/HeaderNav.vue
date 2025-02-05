<template>
  <header class="flex bg-purple-500 justify-between p-4 text-2xl mb-12">
    <RouterLink to="/store" class="font-bold">E-SHOP</RouterLink>
    <nav>
      <RouterLink
        to="/store"
        :class="{ underline: $route.path === '/store' }"
        class="px-2 md:px-4 py-2"
      >
        Store
      </RouterLink>
      <RouterLink
        v-if="cartStore.totalQuantity !== 0"
        to="/cart"
        :class="{ underline: $route.path === '/cart' }"
        class="px-2 md:px-4 py-2"
      >
        Cart
      </RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { RouterLink } from 'vue-router'

const cartStore = useCartStore()
</script>
