<script setup>
const props = defineProps({
  loaded: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "bg-skyblue",
  },
});
</script>

<template>
  <div
    class="image-cover pointer-events-none fixed left-0 top-0 z-10 grid h-full w-full place-items-center transition-opacity duration-500"
    :class="[loaded ? 'opacity-0' : 'opacity-100', color]"
  ></div>
</template>

<style scoped></style>
