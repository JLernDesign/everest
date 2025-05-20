<script setup>
const props = defineProps(['data', 'theme']);
</script>

<template>
  <div>
    <h4
      class="text-center text-tag mb-6"
      :class="theme == 'dark' ? 'text-white' : 'text-black'"
    >
      Investors
    </h4>
    <div class="flex space-x-[10rem] justify-center">
      <UILogo v-for="item in data" :src="item" />
    </div>
  </div>
</template>

<style scoped></style>
