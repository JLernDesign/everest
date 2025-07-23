<script setup>
const props = defineProps(["color"]);
</script>

<template>
  <div class="on group relative">
    <div class="absolute -top-[.2rem] left-0 size-[7rem]">
      <img src="/public/about/pin-tri.svg" alt="" />
    </div>
    <div v-for="i in 3" :key="i" class="tri absolute left-0 top-0 size-[7rem]">
      <img src="/public/about/pin-tri-red.svg" alt="" />
    </div>
  </div>
</template>

<style scoped>
.group.on .tri {
  animation: burst 2.25s linear infinite;
  &:nth-child(2) {
    animation-delay: -0.75s;
  }
  &:nth-child(3) {
    animation-delay: -1.5s;
  }
}
@keyframes burst {
  0% {
    opacity: 0.2;
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: scale(0.425);
  }
  100% {
    opacity: 0;
    transform: scale(0.85);
  }
}
</style>
