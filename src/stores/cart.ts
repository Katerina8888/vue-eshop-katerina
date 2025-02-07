import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Product, Order } from '@/types'

export const useCartStore = defineStore(
  'cart',
  () => {
    const products = ref<Product[]>([])
    const quantities = ref<Record<number, number>>({})
    const orders = ref<Order[]>([])
    const cartItems = ref<Product[]>([])

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

    const updateCartItems = () => {
      cartItems.value = products.value.filter((product) => getQuantity(product.id) > 0)
    }

    const setQuantity = (productId: number, quantity: number) => {
      if (quantity > 0) {
        quantities.value[productId] = quantity
      } else {
        delete quantities.value[productId]
      }
      updateCartItems()
    }

    const increaseQuantity = (productId: number) => {
      if (!quantities.value[productId]) {
        quantities.value[productId] = 0
      }
      quantities.value[productId]++
      updateCartItems()
    }

    const decreaseQuantity = (productId: number) => {
      if (quantities.value[productId] > 0) {
        quantities.value[productId]--
      }
      if (quantities.value[productId] === 0) {
        delete quantities.value[productId]
      }
      updateCartItems()
    }

    const removeProduct = (productId: number) => {
      delete quantities.value[productId]
      products.value = products.value.filter((product) => product.id !== productId)
      updateCartItems()
    }

    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json')
        products.value = (await response.json()) as Product[]
        updateCartItems()
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    return {
      products,
      quantities,
      orders,
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
  },
  // {
  //   persist: {
  //     paths: ['orders'],
  //   },
  // },
)
