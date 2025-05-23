<script setup>
const props = defineProps(["hero"]);
</script>

<template>
  <section class="relative w-full px-side-mob pt-section-top s:px-side">
    <slot />
  </section>
</template>

<style scoped></style>
