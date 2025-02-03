<template>
  <main class="flex">
    <CartItemsWrapper></CartItemsWrapper>

    <TotalPrice></TotalPrice>
  </main>
</template>

<script setup lang="ts">
import CartItemsWrapper from '@/components/cart/CartItemsWrapper.vue'
import TotalPrice from '@/components/cart/TotalPrice.vue'
</script>
