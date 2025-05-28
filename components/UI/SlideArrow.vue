<script setup>
const props = defineProps(["dir", "color"]);
</script>

<template>
  <div
    class="absolute bottom-0 w-full"
    :class="dir == 'left' ? 'left-0 -scale-x-100' : 'right-0'"
  >
    <button
      class="back grid h-[3.2rem] w-full place-content-center rounded-btn border-1"
      :class="color == 'blue' ? 'border-lightblue' : 'border-red'"
    >
      <IconArrow :color="color == 'blue' ? 'stroke-lightblue' : 'stroke-red'" />
    </button>
  </div>
</template>

<style scoped></style>
