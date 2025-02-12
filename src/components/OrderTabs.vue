<template>
  <ul class="order-tabs-wrapper flex justify-center space-x-4">
    <li v-for="order in orders" :key="order.id" class="btn-wrapper">
      <RouterLink :to="`/orders/${order.id}`">
        <BigButton>order {{ order.id }}</BigButton>
      </RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useOrderStore } from '@/stores/orders'
import BigButton from './BigButton.vue'

const cartStore = useOrderStore()

const orders = computed(() => cartStore.orders)
</script>
