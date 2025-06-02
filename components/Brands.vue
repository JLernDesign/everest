<script setup>
const props = defineProps(["data", "theme"]);
</script>

<template>
  <div>
    <h4
      class="mb-6 text-center text-tag"
      :class="theme == 'dark' ? 'text-white' : 'text-black'"
    >
      {{ data.title }}
    </h4>
    <div class="flex justify-center space-x-[9rem]">
      <UILogo v-for="item in data.logos" :src="item.url ? item.url : item" />
    </div>
  </div>
</template>

<style scoped></style>
