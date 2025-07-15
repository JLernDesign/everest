<script setup>
const props = defineProps(["data", "target", "theme", "color"]);

const hoverOn = () => {};
const hoverOff = () => {};
</script>

<template>
  <NuxtLink
    :to="data && getUrl(data)"
    :target="data?.external && '_blank'"
    class="ul single fast relative font-helvh text-body-sm-mob s:text-body-sm"
    :class="
      color == 'black'
        ? 'text-black after:bg-black'
        : 'text-white after:bg-white'
    "
    ><slot
  /></NuxtLink>
</template>

<style scoped></style>
