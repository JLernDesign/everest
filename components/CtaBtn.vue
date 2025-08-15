<script setup>
import { gsap } from "gsap";
const props = defineProps(["data", "href", "target", "theme", "stretch"]);
const open = ref(false);
const arrow = ref(null);
const hoverOn = () => {
  if (isTouchDevice()) return;
  open.value = true;
  const diamond = arrow.value.querySelector(".diamond-inner");
  gsap.killTweensOf(diamond);
  gsap.fromTo(
    diamond,
    {
      opacity: 0,
      x: -10,
      y: 0,
      scale: 1,
    },
    {
      duration: 0.35,
      opacity: 1,
      x: 0,
      y: 0,
      ease: "power3.out",
    },
  );
};
const hoverOff = () => {
  if (isTouchDevice()) return;
  open.value = false;
  const diamond = arrow.value.querySelector(".diamond-inner");
  gsap.killTweensOf(diamond);
  gsap.to(diamond, {
    duration: 0.35,
    scale: 0.8,
    opacity: 0,
    x: 10,
    ease: "power3.in",
  });
};
</script>

<template>
  <NuxtLink
    :to="data && $localePath(getUrl(data))"
    :target="data?.external && '_blank'"
    class="cta-btn inline-flex items-center rounded-btn bg-red px-[1.5rem] py-[1.1rem] font-helvh text-body-sm-mob text-skyblue s:px-[1.75rem] s:py-[1.4rem] s:text-body-sm"
    :class="stretch && 'justify-between'"
    @mouseenter="hoverOn"
    @mouseleave="hoverOff"
  >
    <div><slot /></div>
    <div class="arrow relative ml-1 translate-x-[.2rem] s:ml-3" ref="arrow">
      <div
        class="diamond relative grid size-[2.4rem] place-content-center p-[.4rem] s:size-[2.6rem]"
      >
        <div
          class="diamond-inner absolute left-0 top-0 size-full rotate-45 rounded-[.8rem] bg-skyblue opacity-0"
        ></div>
        <IconArrow
          :color="open ? 'stroke-red' : 'stroke-skyblue'"
          class="relative ml-[.2rem] size-full"
        />
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped></style>
