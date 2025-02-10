<template>
  <HeaderNav></HeaderNav>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNav from '@/components/HeaderNav.vue'
import { useProductStore } from '@/stores/products'

const productStore = useProductStore()

productStore.fetchProducts()
</script>
