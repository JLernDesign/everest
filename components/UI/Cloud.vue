<script setup>
const props = defineProps(["type", "anim", "speed", "flip", "rot", "width"]);
</script>

<template>
  <div
    class="absolute z-0"
    :class="[
      type == 1 && 'w-[129.3rem]',
      type == 2 && 'w-[111.7rem]',
      type == 3 && 'w-[169.3rem]',
    ]"
  >
    <div class="cloud-wrap absolute left-0 top-0 inline-flex">
      <div
        v-for="n in 2"
        class="cloud-mover w-screen"
        :class="anim ? 'animate-cloud' : ''"
        :style="{ animationDuration: speed + 's' }"
      >
        <img
          :src="`/ui/cloud-type${type}.png`"
          alt=""
          :class="flip ? '-scale-x-100' : ''"
          :style="[
            rot && { transform: `rotate(${rot}deg)` },
            width && { width: width + 'rem' },
          ]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .animate-cloud {
  animation: ticker 30s linear infinite;
} */
</style>
