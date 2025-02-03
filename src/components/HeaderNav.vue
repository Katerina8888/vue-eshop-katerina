<template>
  <header>
    <div class="flex justify-between p-4 text-2xl">
      <span class="font-bold text-purple-500">E-SHOP</span>
      <nav>
        <RouterLink
          to="/store"
          :class="{ underline: $route.path === '/store' }"
          class="px-2 md:px-4 py-2"
        >
          Store
        </RouterLink>
        <RouterLink
          to="/cart"
          :class="{ underline: $route.path === '/cart' }"
          class="px-2 md:px-4 py-2"
        >
          Cart
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
