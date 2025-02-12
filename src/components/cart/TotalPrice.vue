<template>
  <div
    v-if="totalPrice !== 0"
    class="total-price flex flex-col text-center border p-8 m-auto text-black"
  >
    <div>total&nbsp;</div>
    <div class="price">{{ totalPrice }}&nbsp;</div>
    <div>€</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProductStore } from '@/stores/products'

const productStore = useProductStore()

const totalPrice = computed(() => productStore.totalPrice)
</script>
