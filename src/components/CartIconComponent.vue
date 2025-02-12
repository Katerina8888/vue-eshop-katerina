<template>
  <div>
    <RouterLink
      :to="linkIfIsNotEmpty"
      class="bg-purple-500 p-2 rounded-full fixed hover:rotate-12 right-4 bottom-4"
    >
      <div class="relative">
        <img :src="shoppingCart" alt="Shopping Cart" />
        <span
          class="cart-icon absolute -top-1 font-bold text-center right-3 text-md text-purple-500 bg-white rounded-full w-6 h-6"
        >
          {{ totalQuantity }}
        </span>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import shoppingCart from '@/assets/shopping-cart.svg'
import { useProductStore } from '@/stores/products'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const cartStore = useProductStore()

const totalQuantity = computed(() => cartStore.totalQuantity)

const linkIfIsNotEmpty = computed(() => {
  return totalQuantity.value !== 0 ? '/cart' : ''
})
</script>
