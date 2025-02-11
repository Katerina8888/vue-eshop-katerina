<template>
  <header class="flex bg-purple-500 justify-between p-4 text-2xl mb-12">
    <h1>
      <RouterLink to="/store" class="font-bold uppercase">E-Shop</RouterLink>
    </h1>
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
      <RouterLink to="/orders" class="px-2 md:px-4 py-2">Orders</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/products'
import { RouterLink } from 'vue-router'

const cartStore = useProductStore()
</script>

<style scoped>
.router-link-active {
  text-decoration: underline;
}
</style>
