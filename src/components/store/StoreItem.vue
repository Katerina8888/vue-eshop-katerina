<template>
  <li class="p-4 grid place-items-center">
    <div class="shop-item relative">
      <img class="rounded-tr-3xl max-w-full h-auto" :src="product.picture" alt="" />
      <div
        class="bg-black/70 flex flex-col items-center backdrop-blur-none p-1 md:p-4 absolute bottom-0 left-0 w-full"
      >
        <h3 class="mb-9 md:text-xl font-bold">{{ product.name }}</h3>
      </div>
      <ButtonText v-if="!showIntegerWrapper" @click="addToCart" />
      >
      <ButtonIntegerWrapper v-if="showIntegerWrapper" :product="product" />
    </div>
  </li>
</template>

<script setup lang="ts">
import ButtonIntegerWrapper from './ButtonIntegerWrapper.vue'
import type { Product } from '@/types'
import ButtonText from '../ButtonText.vue'
import { computed } from 'vue'
import { useProductStore } from '@/stores/products'

const props = defineProps<{
  product: Product
}>()

const productStore = useProductStore()

// Show the integer wrapper if item is in cart
const showIntegerWrapper = computed(() => productStore.getQuantity(props.product.id) > 0)

const addToCart = () => {
  productStore.setQuantity(props.product.id, 1)
}
</script>
