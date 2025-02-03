<template>
  <HeaderNav></HeaderNav>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNav from '@/components/HeaderNav.vue'
</script>
