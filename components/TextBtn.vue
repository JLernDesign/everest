<script setup>
const props = defineProps(["data", "target", "theme", "color"]);

const hoverOn = () => {};
const hoverOff = () => {};
</script>

<template>
  <NuxtLink
    :to="data && getUrl(data)"
    :target="data?.external && '_blank'"
    class="text-body-sm-mob relative font-helvh after:absolute after:bottom-[2px] after:left-0 after:h-[1px] after:w-full s:text-body-sm"
    :class="
      color == 'black'
        ? 'text-black after:bg-black'
        : 'text-white after:bg-white'
    "
    ><slot
  /></NuxtLink>
</template>

<style scoped></style>
