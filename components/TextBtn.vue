<script setup>
const props = defineProps(['href', 'target', 'theme']);

const hoverOn = () => {};
const hoverOff = () => {};
</script>

<template>
  <NuxtLink
    :to="props.href"
    :target="props.target"
    class="text-body-sm font-helvh relative after:h-[1px] after:w-full after:bottom-[2px] after:absolute after:left-0 after:bg-black border-black font-extrabold text-black"
    ><slot
  /></NuxtLink>
</template>

<style scoped></style>
