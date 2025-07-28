<script setup>
const props = defineProps([
  "type",
  "anim",
  "speed",
  "flip",
  "rot",
  "width",
  "num",
  "delay",
  "container",
]);
</script>

<template>
  <div
    class="cloud absolute z-0"
    :class="[
      type == 1 && 'w-[129.3rem]',
      type == 2 && 'w-[111.7rem]',
      type == 3 && 'w-[169.3rem]',
    ]"
  >
    <div class="cloud-wrap absolute left-0 top-0 inline-flex">
      <div
        v-for="n in 2"
        class="cloud-mover relative"
        :class="[
          anim ? 'animate-cloud' : '',
          container ? container : 'w-screen min-w-[180rem]',
        ]"
        :style="{ animationDuration: speed + 's', animationDelay: delay + 's' }"
      >
        <img
          :src="`/ui/cloud-type${type}.png`"
          alt=""
          :class="[
            type == 1 && 'w-[129.3rem]',
            type == 2 && 'w-[111.7rem]',
            type == 3 && 'w-[169.3rem]',
            flip ? '-scale-x-100' : '',
          ]"
          :style="[
            rot && { transform: `rotate(${rot}deg)` },
            width && { width: width + 'rem' },
          ]"
        />

        <!-- for debugging by cloud number -->
        <div class="absolute left-1/2 top-1/2 z-10 text-xl">{{ num }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
