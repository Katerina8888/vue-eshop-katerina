<template>
  <div>
    <RouterLink
      to="/cart"
      class="bg-purple-500 p-2 rounded-full fixed hover:rotate-12 right-4 bottom-4"
    >
      <img :src="shoppingCart" alt=""
    /></RouterLink>
  </div>
</template>

<script setup lang="ts">
import shoppingCart from '@/assets/shopping-cart.svg'
import { RouterLink } from 'vue-router'
</script>
