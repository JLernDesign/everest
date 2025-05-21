<script setup>
const props = defineProps(['href', 'target', 'theme', 'color']);

const hoverOn = () => {};
const hoverOff = () => {};
</script>

<template>
  <NuxtLink
    :to="props.href"
    :target="props.target"
    class="text-body-sm font-helvh relative after:h-[1px] after:w-full after:bottom-[2px] after:absolute after:left-0"
    :class="
      color == 'black'
        ? 'after:bg-black border-black text-black'
        : 'after:bg-white border-white text-white'
    "
    ><slot
  /></NuxtLink>
</template>

<style scoped></style>
