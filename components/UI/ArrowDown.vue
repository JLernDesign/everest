<script setup>
const props = defineProps(["theme"]);
</script>

<template>
  <!-- arrow down -->
  <div
    class="arrow-down absolute left-0 top-[100vh] z-5 -mt-[8.2rem] w-[1.5rem] pl-side"
  >
    <IconArrow
      :color="theme == 'dark' ? 'stroke-white' : 'stroke-black'"
      class="rotate-90 -scale-y-100"
    />
  </div>
</template>

<style scoped></style>
