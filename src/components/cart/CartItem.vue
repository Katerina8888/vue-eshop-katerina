<template>
  <li class="cart-item list-none py-3 grid grid-cols-5 md:gap-1 text-black">
    <ButtonSymbolsValue @click="removeItem">x</ButtonSymbolsValue>
    <div>{{ product.name }}</div>
    <div>{{ quantity }}</div>
    <div>{{ quantity }}*{{ product.price }} €</div>
    <div class="font-bold">{{ price }} €</div>
  </li>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { useProductStore } from '@/stores/products'
import ButtonSymbolsValue from '../store/ButtonSymbolsValue.vue'
import type { Product } from '@/types'

const props = defineProps<{
  product: Product
}>()

const productStore = useProductStore()

const quantity = computed(() => productStore.getQuantity(props.product.id))
const price = computed(() => props.product.price * quantity.value)

const removeItem = () => {
  productStore.removeProduct(props.product.id)
}
</script>
