<script setup>
const props = defineProps(["src"]);
</script>

<template>
  <div class="glow absolute blur-glow s:w-[180rem]">
    <img :src="src" alt="" />
  </div>
</template>

<style scoped></style>
