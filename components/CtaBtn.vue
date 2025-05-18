<script setup>
const props = defineProps(['href', 'target', 'theme']);
const pixels = ref();

const hoverOn = () => {};
const hoverOff = () => {};
</script>

<template>
  <NuxtLink
    :to="props.href"
    :target="props.target"
    class="cta-btn rounded-btn bg-red px-6 py-6 inline-flex items-center text-body-sm text-skyblue font-helvh"
  >
    <div><slot /></div>
    <div class="arrow ml-5 mt-1">
      <IconArrow color="stroke-skyblue" />
    </div>
  </NuxtLink>
</template>

<style scoped></style>
