<template>
  <li class="p-4 grid place-items-center">
    <div class="relative">
      <img class="rounded-tr-3xl max-w-full h-auto" :src="product.picture" alt="" />
      <div
        class="bg-black/70 flex flex-col items-center backdrop-blur-none p-1 md:p-4 absolute bottom-0 left-0 w-full"
      >
        <h3 class="mb-9 md:text-xl font-bold">{{ product.name }}</h3>
      </div>
      <ButtonText v-if="!isVisible(product.id)" @click="toggleVisibility(product.id)" />
      >
      <ButtonIntegerWrapper v-if="isVisible(product.id)" :product="product" />
    </div>
  </li>
</template>

<script setup lang="ts">
import ButtonIntegerWrapper from './ButtonIntegerWrapper.vue'
import type { Product } from '@/types'
import ButtonText from '../ButtonText.vue'
import { useVisibilityStore } from '@/stores/visibility'

defineProps<{
  product: Product
}>()

const visibilityStore = useVisibilityStore()

const toggleVisibility = (productId: number) => {
  visibilityStore.toggleVisibility(productId)
}

const isVisible = (productId: number) => {
  return visibilityStore.isVisible(productId)
}
</script>
