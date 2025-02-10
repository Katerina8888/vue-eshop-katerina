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
import { useProductStore } from '@/stores/products'
import { defineProps } from 'vue'
import type { Product } from '@/types'

const props = defineProps<{
  product: Product
}>()

const productStore = useProductStore()

const quantity = computed({
  get: () => productStore.getQuantity(props.product.id),
  set: (value: number) => {
    productStore.setQuantity(props.product.id, value)
  },
})
</script>
