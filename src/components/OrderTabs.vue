<template>
  <ul class="flex justify-center space-x-4">
    <li v-for="(item, index) in orders" :key="index" class="btn-wrapper">
      <BigButton>order number {{ index + 1 }}</BigButton>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import BigButton from './BigButton.vue'

const cartStore = useCartStore()

const orders = computed(() => cartStore.orders)
</script>
