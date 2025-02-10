import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Order, IProductViewWithQuantity } from '@/types'
import { useProductStore } from './products'

export const useOrderStore = defineStore(
  'orders',
  () => {
    const orders = ref<Order[]>([])
    const productStore = useProductStore()

    const addNewOrder = (): void => {
      const order = {
        id: orders.value.length + 1,
        products: productStore.cartItems as IProductViewWithQuantity[],
      }

      orders.value.push(order)

      productStore.products = []
      productStore.quantities = {}
    }

    return {
      orders,
      addNewOrder,
    }
  },
  {
    persist: true,
  },
)
