<script setup>
const props = defineProps(["color"]);
</script>

<template>
  <svg
    width="14"
    height="8"
    viewBox="0 0 14 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="h-[.8rem] w-[1.4rem]"
  >
    <path
      class="icon transition-colors duration-300"
      d="M1 1L7.26087 6L13 1"
      stroke-width="2"
      :class="color && color"
    />
  </svg>
</template>

<style scoped></style>
