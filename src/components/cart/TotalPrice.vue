<template>
  <div v-if="totalPrice !== 0" class="flex flex-col text-center border p-8 m-auto text-black">
    <div>Total</div>
    <div>{{ totalPrice }} €</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const totalPrice = computed(() => cartStore.totalPrice)
</script>
