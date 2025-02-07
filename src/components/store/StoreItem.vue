<template>
  <li class="p-4 grid place-items-center">
    <div class="relative">
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
import { useCartStore } from '@/stores/cart'
import { ref } from 'vue'

const props = defineProps<{
  product: Product
}>()

const cartStore = useCartStore()

const showIntegerWrapper = ref(false)

const addToCart = () => {
  cartStore.setQuantity(props.product.id, 1)
  showIntegerWrapper.value = true
}
</script>
