<template>
  <div
    class="absolute h-8 flex bottom-1 not-only:md:bottom-3 left-1/2 transform -translate-x-1/2 z-10 px-4 py-1 font-bold uppercase"
  >
    <ButtonPlus @click="increaseQuantity">+</ButtonPlus>
    <StoreInteger :product="product"></StoreInteger>
    <ButtonMinus @click="decreaseQuantity">-</ButtonMinus>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useCartStore } from '@/stores/cart'
import StoreInteger from './StoreInteger.vue'
import ButtonPlus from './ButtonPlus.vue'
import ButtonMinus from './ButtonMinus.vue'
import type { Product } from '@/types'

const props = defineProps<{
  product: Product
}>()

const cartStore = useCartStore()

const increaseQuantity = () => {
  cartStore.increaseQuantity(props.product.id)
}

const decreaseQuantity = () => {
  cartStore.decreaseQuantity(props.product.id)
}
</script>
