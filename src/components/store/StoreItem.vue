<template>
  <!-- <li v-for="(product, index) in products" :key="index" :task="product"> -->
  <li class="p-4 grid place-items-center">
    <div class="relative">
      <img class="rounded-tr-3xl max-w-full h-auto" :src="product.picture" alt="" />
      <div
        class="bg-black/70 flex flex-col items-center backdrop-blur-none p-1 md:p-4 absolute bottom-0 left-0 w-full"
      >
        <h3 class="mb-9 md:text-xl font-bold">{{ product.name }}</h3>
      </div>
      <!-- <ButtonText></ButtonText> -->
      <ButtonIntegerWrapper :product="product"></ButtonIntegerWrapper>
    </div>
  </li>
</template>

<script setup lang="ts">
import ButtonIntegerWrapper from './ButtonIntegerWrapper.vue'
import type { Product } from '@/types'

defineProps<{
  product: Product
}>()
// const emit = defineEmits(['increaseItem', 'decreaseItem'])

// const handleIncreaseItem = () => {
//   emit('increaseItem')
// }

// const handleDecreaseItem = () => {
//   emit('decreaseItem')
// }
</script>
