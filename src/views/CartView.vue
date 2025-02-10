<template>
  <main>
    <div class="md:flex" v-if="totalQuantity !== 0">
      <CartItemsWrapper :products="cartItems"></CartItemsWrapper>
      <TotalPrice />
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
import { useCartStore } from '@/stores/cart'
import CartItemsWrapper from '@/components/cart/CartItemsWrapper.vue'
import TotalPrice from '@/components/cart/TotalPrice.vue'
import BigButton from '@/components/BigButton.vue'

const cartStore = useCartStore()

const cartItems = computed(() => cartStore.cartItems)
const totalQuantity = computed(() => cartStore.totalQuantity)

// stačí toto a dle quantity si pak najít id produktu a dotahat další věci
const addNewOrder = (): void => {
  const order = {
    id: cartStore.orders.length + 1,
    products: cartItems.value,
  }

  cartStore.$patch((state) => {
    state.orders.push(order)
  })

  cartStore.products = []
  cartStore.quantities = {}
}
</script>
