<template>
  <li v-if="quantity !== 0" class="list-none py-3 grid grid-cols-5 md:gap-1 text-black">
    <ButtonSymbolsValue @click="removeItem">x</ButtonSymbolsValue>
    <div>{{ product.name }}</div>
    <div>{{ quantity }}</div>
    <div>{{ quantity }}*{{ product.price }} €</div>
    <div class="font-bold">{{ price }} €</div>
  </li>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import ButtonSymbolsValue from '../store/ButtonSymbolsValue.vue'
import type { Product } from '@/types'

// TODO ZAPAMATOVAT SI, KDY MÁ BÝT CONST PROPS A KDY NE
const props = defineProps<{
  product: Product
}>()

const cartStore = useCartStore()

const quantity = computed(() => cartStore.getQuantity(props.product.id))
const price = computed(() => props.product.price * quantity.value)

const removeItem = () => {
  cartStore.removeProduct(props.product.id)
}
</script>
