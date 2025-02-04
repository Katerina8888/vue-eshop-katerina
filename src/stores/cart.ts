import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Product } from '@/types'

export const useCartStore = defineStore('cart', () => {
  const products = ref<Product[]>([])
  const quantities = ref<Record<number, number>>({})

  const getQuantity = (productId: number) => {
    return quantities.value[productId] || 0
  }

  const totalQuantity = computed(() => {
    return Object.values(quantities.value).reduce((total, quantity) => total + quantity, 0)
  })

  const setQuantity = (productId: number, quantity: number) => {
    if (quantity > 0) {
      quantities.value[productId] = quantity
    } else {
      delete quantities.value[productId]
    }
  }

  const increaseQuantity = (productId: number) => {
    if (!quantities.value[productId]) {
      quantities.value[productId] = 0
    }
    quantities.value[productId]++
  }

  const decreaseQuantity = (productId: number) => {
    if (quantities.value[productId] > 0) {
      quantities.value[productId]--
    }
  }

  const fetchProducts = async () => {
    try {
      const response = await fetch('/products.json')
      products.value = (await response.json()) as Product[]
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  return {
    products,
    quantities,
    getQuantity,
    totalQuantity,
    setQuantity,
    increaseQuantity,
    decreaseQuantity,
    fetchProducts,
  }
})
