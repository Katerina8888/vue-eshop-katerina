import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0)
  // actions
  const increaseCount = () => count.value++
  const decreaseCount = () => count.value--

  // getters
  // const oddOrEven = computed(() => {
  //   if (count.value % 2 === 0) {
  //     return 'even'
  //   } else {
  //     return 'odd'
  //   }
  // })

  return {
    // state
    count,
    // actions
    increaseCount,
    decreaseCount,
    // getters
    // oddOrEven,
  }
})
