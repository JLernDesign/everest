<script setup>
import { gsap } from "gsap";

const props = defineProps(["speed"]);
const main = ref(null);
const total = 3;
let current = -1;
const speed = props.speed;
let items, bars;

const barProgress = () => {
  gsap.to(bars[current], {
    xPercent: 0,
    duration: speed,
    ease: "none",
  });
};

const next = () => {
  // reset all bars
  gsap.to(bars, { xPercent: -100, duration: 1, ease: "power3.inOut" });

  // collapse all items
  gsap.to(items, {
    width: "1rem",
    duration: 1,
    ease: "power3.inOut",
  });

  // increment current
  current++;
  if (current >= total) {
    current = 0;
  }

  // expand current item
  gsap.to(items[current], {
    width: "2.5rem",
    duration: 1,
    ease: "power3.inOut",
  });

  // start bar progress
  barProgress();
};

onMounted(() => {
  items = main.value.querySelectorAll(".item");
  bars = main.value.querySelectorAll(".bar");
  gsap.set(bars, { xPercent: -100 });
});

defineExpose({
  next,
});
</script>

<template>
  <div class="thumb-nav mt-[1.5rem] inline-flex space-x-2" ref="main">
    <div
      v-for="n in total"
      class="item relative size-[1rem] overflow-hidden rounded-[.5rem] border-1 border-red"
    >
      <div
        class="bar absolute left-0 top-0 h-full w-full rounded-[.5rem] bg-red"
      ></div>
    </div>
  </div>
</template>
