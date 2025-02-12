<template>
  <main>
    <div>
      <h2 class="cart-heading">Cart items</h2>
      <div class="md:flex" v-if="totalQuantity !== 0">
        <CartItemsWrapper :products="cartItems"></CartItemsWrapper>
        <TotalPrice />
      </div>
    </div>
    <RouterLink class="text-black ml-6 text-3xl" v-if="totalQuantity === 0" to="/store">
      Back to product page
    </RouterLink>
    <div class="flex justify-center mt-48" v-if="totalQuantity !== 0">
      <RouterLink to="/orders" class="text-black text-3xl">
        <BigButton @click="addNewOrder">Order</BigButton>
      </RouterLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CartItemsWrapper from '@/components/cart/CartItemsWrapper.vue'
import TotalPrice from '@/components/cart/TotalPrice.vue'
import BigButton from '@/components/BigButton.vue'
import { useProductStore } from '@/stores/products'
import { useOrderStore } from '@/stores/orders'

const productStore = useProductStore()
const orderStore = useOrderStore()

const cartItems = computed(() => productStore.cartItems)
const totalQuantity = computed(() => productStore.totalQuantity)
const addNewOrder = () => {
  orderStore.addNewOrder()
}
</script>
