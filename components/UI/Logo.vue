<script setup>
const props = defineProps(['src']);
</script>

<template>
  <figure class="relative h-20 w-40 text-left s:h-[8rem] s:w-[16rem]">
    <img :src="src" alt="" class="h-full w-full object-contain" />
  </figure>
</template>

<style scoped></style>
