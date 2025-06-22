<script setup>
const props = defineProps(["src"]);
</script>

<template>
  <div class="glow absolute blur-big s:left-0 s:w-[180rem] s:blur-glow">
    <img :src="src" alt="" />
  </div>
</template>

<style scoped></style>
