import { createRouter, createWebHistory } from 'vue-router'
import StoreView from '@/views/StoreView.vue'
import CartView from '@/views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/store',
      name: 'store',
      component: StoreView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
      // component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/',
      redirect: '/store',
    },
  ],
})

export default router
