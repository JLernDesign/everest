<script setup>
const props = defineProps({
  loaded: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="image-cover pointer-events-none fixed left-0 top-0 z-10 grid h-full w-full place-items-center bg-skyblue transition-opacity duration-500"
    :class="loaded ? 'opacity-0' : 'opacity-100'"
  ></div>
</template>

<style scoped></style>
