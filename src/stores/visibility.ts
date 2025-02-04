import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useVisibilityStore = defineStore('visibility', () => {
  const visibilityMap = ref<Record<number, boolean>>({})

  const toggleVisibility = (productId: number) => {
    visibilityMap.value[productId] = !visibilityMap.value[productId]
  }

  const isVisible = (productId: number) => {
    return visibilityMap.value[productId] || false
  }

  return {
    visibilityMap,
    toggleVisibility,
    isVisible,
  }
})
