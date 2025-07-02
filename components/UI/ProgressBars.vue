<script setup>
import { gsap } from "gsap";

const props = defineProps(["speed", "total", "gotoSlide"]);
const main = ref(null);
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

const next = (n) => {
  // reset all bars
  gsap.killTweensOf(bars);
  gsap.to(bars, { xPercent: -100, duration: 1, ease: "power3.inOut" });

  // collapse all items
  gsap.killTweensOf(items);
  gsap.to(items, {
    width: "1rem",
    duration: 1,
    ease: "power3.inOut",
  });

  // go to slide
  if (n) {
    current = n - 1;
    gsap.killTweensOf(bars[current]);
    gsap.to(bars[current], {
      xPercent: 0,
      duration: 0.5,
      ease: "power3.out",
    });

    // slideshow
  } else {
    current++;
    if (current >= props.total) {
      current = 0;
    }

    // start bar progress
    barProgress();
  }

  // expand current item
  gsap.to(items[current], {
    width: "2.5rem",
    duration: 1,
    ease: "power3.inOut",
  });
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
      v-for="n in props.total"
      class="item relative size-[1rem] cursor-pointer overflow-hidden rounded-[.5rem] border-1 border-red"
      @click="props.gotoSlide && props.gotoSlide(n)"
    >
      <div
        class="bar absolute left-0 top-0 h-full w-full rounded-[.5rem] bg-red"
      ></div>
    </div>
  </div>
</template>
