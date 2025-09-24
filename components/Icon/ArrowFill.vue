<script setup>
const props = defineProps(["color"]);
</script>

<template>
  <svg
    width="9"
    height="13"
    viewBox="0 0 9 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="h-[1.3rem] w-[.9rem]"
    :class="color"
  >
    <path
      class="transition-colors duration-300"
      d="M0.293945 2.18192V11.1494C0.293945 12.1986 1.51766 12.7717 2.32367 12.1001L8.30199 7.11814C8.93746 6.58858 8.88447 5.59665 8.1962 5.1378L2.21789 1.15226C1.3955 0.603999 0.293945 1.19353 0.293945 2.18192Z"
    />
  </svg>
</template>

<style scoped></style>
