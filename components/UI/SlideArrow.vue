<script setup>
import { gsap } from "gsap";

const props = defineProps(["dir", "color", "speed"]);
const main = ref(null);
const speed = props.speed;
let bar;

const barProgress = () => {
  gsap.killTweensOf(bar);
  gsap.set(bar, { xPercent: -100 });
  gsap.to(bar, {
    xPercent: 0,
    duration: speed - 0.5,
    ease: "none",
  });
};

const next = () => {
  // reset bar
  gsap.killTweensOf(bar);
  gsap.to(bar, {
    xPercent: 100,
    duration: 0.5,
    ease: "power3.in",
    onComplete: () => {
      barProgress();
    },
  });
};

const stopProgress = () => {
  gsap.killTweensOf(bar);
  gsap.set(bar, { xPercent: -100 });
};

onMounted(() => {
  bar = main.value.querySelector(".bar");
  gsap.set(bar, { xPercent: -100 });
});

defineExpose({
  next,
  barProgress,
  stopProgress,
});
</script>

<template>
  <div
    class="absolute bottom-0 w-full"
    :class="dir == 'left' ? 'left-0 -scale-x-100' : 'right-0'"
    ref="main"
  >
    <button
      class="back group relative grid h-[3.2rem] w-full place-content-center overflow-hidden rounded-btn border-1"
      :class="color == 'blue' ? 'border-lightblue' : 'border-red'"
    >
      <div
        class="bar absolute left-0 top-0 h-full w-full rounded-btn bg-jaffaltfade"
      ></div>
      <IconArrow
        :color="color == 'blue' ? 'stroke-lightblue' : 'stroke-red'"
        class="relative z-10 ease-out group-hover:translate-x-4"
      />
    </button>
  </div>
</template>

<style scoped></style>
