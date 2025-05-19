<script setup>
const props = defineProps(['color']);
</script>

<template>
  <svg
    width="34"
    height="21"
    viewBox="0 0 34 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="w-[3.4rem] h-[2.1rem]"
    :class="props.color"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.2468 0L0 21H3.74617L14 3.28626L12.2468 0Z"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21.7532 0L34 21H30.2538L20 3.28626L21.7532 0Z"
    />
  </svg>
</template>

<style scoped></style>
