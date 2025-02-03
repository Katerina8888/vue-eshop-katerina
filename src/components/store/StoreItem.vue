<template>
  <li class="p-4 grid place-items-center">
    <div class="relative">
      <img class="rounded-tr-3xl max-w-full h-auto" src="https://placekittens.com/300/400" alt="" />
      <div
        class="bg-black/70 flex flex-col items-center backdrop-blur-none p-1 md:p-4 absolute bottom-0 left-0 w-full"
      >
        <h3 class="mb-9 md:text-xl font-bold">Product Name</h3>
      </div>
      <!-- <ButtonText></ButtonText> -->
      <ButtonIntegerWrapper></ButtonIntegerWrapper>
    </div>
  </li>
</template>

<script setup lang="ts">
// import ButtonText from '../ButtonText.vue'
import ButtonIntegerWrapper from './ButtonIntegerWrapper.vue'
</script>
