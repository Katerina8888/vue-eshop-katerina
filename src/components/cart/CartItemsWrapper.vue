<template>
  <ul class="cart-items md:w-2/3">
    <CartItem v-for="(product, index) in products" :key="index" :product="product"></CartItem>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import CartItem from './CartItem.vue'
import type { Product } from '@/types'

defineProps<{
  products: (Product & { quantity: number })[]
}>()
</script>
