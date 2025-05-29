<script setup>
const props = defineProps(["theme"]);
</script>

<template>
  <div
    class="absolute bottom-0 left-0 h-[6.2rem] w-full bg-gradient-to-t opacity-[.6]"
    :class="
      theme == 'dark'
        ? 'from-[#21272F] to-shadowblue'
        : 'from-[#E3D4C4] to-jaffa'
    "
  ></div>
</template>

<style scoped></style>
