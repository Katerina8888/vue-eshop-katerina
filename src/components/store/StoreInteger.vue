<template>
  <div>
    <label for="inputInteger" class="sr-only">Number of items</label>
    <input
      class="w-16 pl-8"
      type="number"
      id="inputInteger"
      placeholder="1"
      min="1"
      v-model="quantity"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import { defineProps } from 'vue'
import type { Product } from '@/types'

const props = defineProps<{
  product: Product
}>()

const cartStore = useCartStore()

const quantity = computed({
  get: () => cartStore.getQuantity(props.product.id),
  set: (value: number) => {
    cartStore.setQuantity(props.product.id, value)
  },
})
</script>
