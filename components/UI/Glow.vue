<script setup>
const props = defineProps(["src"]);
</script>

<template>
  <div class="glow blur-glow absolute left-0 w-[180rem]">
    <img :src="src" alt="" />
  </div>
</template>

<style scoped></style>
