import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Product } from '@/types'

export const useProductStore = defineStore('products', () => {
  const products = ref<Product[]>([])
  const quantities = ref<Record<number, number>>({})
  const cartOrder = ref<number[]>([])

  const fetchProducts = async () => {
    try {
      const response = await fetch('/products.json')
      products.value = (await response.json()) as Product[]
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  const cartItems = computed((): (Product & { quantity: number })[] => {
    return cartOrder.value
      .map((productId) => {
        const product = products.value.find((product) => product.id === productId)!
        const quantity = quantities.value[productId] || 0
        return { ...product, quantity }
      })
      .filter((product) => product.quantity > 0)
  })

  const getQuantity = (productId: number) => {
    return quantities.value[productId] || 0
  }

  const totalQuantity = computed(() => {
    return Object.values(quantities.value).reduce((total, quantity) => total + quantity, 0)
  })

  const totalPrice = computed(() => {
    return products.value.reduce((total, product) => {
      const quantity = getQuantity(product.id)
      return total + product.price * quantity
    }, 0)
  })

  const setQuantity = (productId: number, quantity: number) => {
    if (quantity > 0) {
      quantities.value[productId] = quantity
      if (!cartOrder.value.includes(productId)) {
        cartOrder.value.push(productId)
      }
    } else {
      delete quantities.value[productId]
      cartOrder.value = cartOrder.value.filter((id) => id !== productId)
    }
  }

  const increaseQuantity = (productId: number) => {
    if (!quantities.value[productId]) {
      quantities.value[productId] = 0
      cartOrder.value.push(productId)
    }
    quantities.value[productId]++
  }

  const decreaseQuantity = (productId: number) => {
    if (quantities.value[productId] > 0) {
      quantities.value[productId]--
    }
    if (quantities.value[productId] === 0) {
      delete quantities.value[productId]
      cartOrder.value = cartOrder.value.filter((id) => id !== productId)
    }
  }

  const removeProduct = (productId: number) => {
    delete quantities.value[productId]
    cartOrder.value = cartOrder.value.filter((id) => id !== productId)
  }

  return {
    products,
    quantities,
    cartOrder,
    cartItems,
    getQuantity,
    totalQuantity,
    totalPrice,
    setQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
    fetchProducts,
  }
})
