<script setup>
import { gsap } from "gsap";

const main = ref(null);
let ctx;

onMounted(() => {
  // add animation context
  ctx = gsap.context((self) => {
    scrollHeadline(main.value);
  }, main.value);
});
</script>

<template>
  <div ref="main">
    <slot />
  </div>
</template>

<style scoped></style>
