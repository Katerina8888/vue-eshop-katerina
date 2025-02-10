<template>
  <div v-if="totalPrice !== 0" class="flex flex-col text-center border p-8 m-auto text-black">
    <div>Total</div>
    <div>{{ totalPrice }} €</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProductStore } from '@/stores/products'

const productStore = useProductStore()

const totalPrice = computed(() => productStore.totalPrice)
</script>
