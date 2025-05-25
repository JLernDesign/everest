<script setup>
const props = defineProps(["color"]);
</script>

<template>
  <svg
    width="18"
    height="14"
    viewBox="0 0 18 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="inline-block size-8"
    :class="props.color"
  >
    <path d="M11 13L16 7.73913L11 3" stroke-width="2" />
    <path d="M16 8L1 8L1 0" stroke-width="2" />
  </svg>
</template>

<style scoped></style>
