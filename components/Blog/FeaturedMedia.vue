<script setup>
const props = defineProps(["data", "title"]);
</script>

<template>
  <!-- thumbs -->
  <h2 v-if="title" class="mb-10 text-center font-barlow-cond text-h5 uppercase">
    {{ title }}
  </h2>
  <div
    class="mx-auto flex w-full max-w-[180rem] flex-col justify-center divide-grayline border-y border-grayline s:mb-[5rem] s:flex-row s:divide-x-1 max-s:mt-[2rem] max-s:divide-y-1"
  >
    <BlogThumb v-for="(item, i) in data" :data="item" />
  </div>
</template>

<style scoped></style>
