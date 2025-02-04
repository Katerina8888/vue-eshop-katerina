import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    quantities: {} as Record<number, number>,
  }),
  getters: {
    getQuantity: (state) => {
      return (productId: number) => state.quantities[productId] || 0
    },
    totalQuantity: (state) => {
      return Object.values(state.quantities).reduce((total, quantity) => total + quantity, 0)
    },
  },
  actions: {
    setQuantity(productId: number, quantity: number) {
      if (quantity > 0) {
        this.quantities[productId] = quantity
      } else {
        delete this.quantities[productId]
      }
    },
    increaseQuantity(productId: number) {
      if (!this.quantities[productId]) {
        this.quantities[productId] = 0
      }
      this.quantities[productId]++
    },
    decreaseQuantity(productId: number) {
      if (this.quantities[productId] > 0) {
        this.quantities[productId]--
      }
    },
  },
})
