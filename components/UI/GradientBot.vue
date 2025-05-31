<script setup>
const props = defineProps(["theme"]);
</script>

<template>
  <div
    class="absolute bottom-0 left-0 h-[6.2rem] w-full bg-gradient-to-t"
    :class="
      theme == 'dark'
        ? 'from-[#21272F] to-shadowblue opacity-[.6]'
        : 'from-[#E3D4C4] to-jaffa opacity-[.4]'
    "
  ></div>
</template>

<style scoped></style>
