<script setup>
const props = defineProps(["color"]);
</script>

<template>
  <svg
    width="11"
    height="10"
    viewBox="0 0 11 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="w-[1.1rem]"
    :class="props.color"
  >
    <path
      d="M7.74646 0.271116L0.332107 7.68547C-0.197894 8.21547 0.129306 9.12317 0.87557 9.19311L9.36272 9.98855C9.9284 10.0416 10.3969 9.55564 10.3233 8.99227L9.2505 0.782475C9.15533 0.054156 8.26584 -0.248261 7.74646 0.271116Z"
    />
  </svg>
</template>

<style scoped></style>
