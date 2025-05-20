<script setup>
const props = defineProps(['color']);
</script>

<template>
  <div class="absolute left-0 w-full h-[26.8rem] -top-[26.8rem]">
    <svg
      id="uuid-a7e36ef3-9a73-4651-a660-54067f565c41"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1800 268"
      class="w-full h-[26.8rem]"
      :class="color"
      preserveAspectRatio="none"
    >
      <path
        d="M1800,9.13834l-115.16402-9.13834-148.43252,9.13834-95.43308,25.38426h-112.99289l-88.84946,37.2628-112.2123,17.1392-121.90782,8.4317-104.9874,26.2277h-127.35183l-133.31315,16.649-142.99749,56.702-152.91905,30.436-218.12629,12.658L0,261.04001v8.93335h1800V9.13834Z"
      />
    </svg>
  </div>
</template>

<style scoped></style>
