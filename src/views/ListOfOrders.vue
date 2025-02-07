<template>
  <div v-if="order" class="text-black">
    <h2>Order Details for Order #{{ $route.params.id }}</h2>
    <ul class="md:w-2/3 lg:w-1/2">
      <li
        v-for="(product, index) in order.products"
        :key="index"
        class="list-none py-3 my-1 grid grid-cols-4 md:gap-1 text-black bg-purple-100"
      >
        <div>{{ product.name }}</div>
        <div>{{ getQuantity(product.id) }}</div>
        <div>{{ getQuantity(product.id) }} * {{ product.price }} €</div>
        <div class="font-bold">{{ product.price * getQuantity(product.id) }} €</div>
      </li>
    </ul>
    <div class="font-bold">Total Quantity: {{ order.totalQuantity }}</div>
    <div class="font-bold">Total Price: {{ order.totalPrice }} €</div>
  </div>
  <div v-else class="text-black">Order not found</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cart'

const route = useRoute()
const cartStore = useCartStore()

const orderId = computed(() => parseInt(route.params.id as string))
const order = computed(() => cartStore.orders.find((order) => order.id === orderId.value))

const getQuantity = (productId: number) => {
  const product = order.value?.products.find((product) => product.id === productId)
  return product ? cartStore.getQuantity(product.id) : 0
}
</script>
