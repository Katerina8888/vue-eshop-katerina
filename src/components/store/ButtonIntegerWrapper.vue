<template>
  <div
    class="absolute h-8 flex bottom-1 not-only:md:bottom-3 left-1/2 transform -translate-x-1/2 z-10 px-4 py-1 font-bold uppercase"
  >
    <ButtonPlus @click="increaseQuantity">+</ButtonPlus>
    <StoreInteger :product="product"></StoreInteger>
    <ButtonMinus
      @click="decreaseQuantity"
      :disabled="isDisabled"
      :class="{ '!bg-gray-400 !hover:bg-gray-400': isDisabled }"
      >-</ButtonMinus
    >
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { useProductStore } from '@/stores/products'
import StoreInteger from './StoreInteger.vue'
import ButtonPlus from './ButtonPlus.vue'
import ButtonMinus from './ButtonMinus.vue'
import type { Product } from '@/types'

const props = defineProps<{
  product: Product
}>()

const productStore = useProductStore()

const quantity = computed(() => productStore.getQuantity(props.product.id))

const isDisabled = computed(() => quantity.value === 0)

const increaseQuantity = () => {
  productStore.increaseQuantity(props.product.id)
}

const decreaseQuantity = () => {
  productStore.decreaseQuantity(props.product.id)
}
</script>
