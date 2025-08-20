<script setup>
import gsap from "gsap";
const props = defineProps(["theme", "sticky"]);
const linesR = [-45, 0, 45];
const linesY = [0.7, 0, -0.7];
const linesSc = [1, 0, 1];
const easer = "elastic.out(1.8,2)";
const open = ref(false);

const openMenu = () => {
  open.value = true;
  const lines = gsap.utils.toArray(".menu-line");
  lines.forEach((line, i) => {
    gsap.to(line, {
      duration: 0.75,
      rotation: linesR[i],
      y: linesY[i] + "rem",
      scaleX: linesSc[i],
      ease: easer,
    });
  });
};
const closeMenu = () => {
  open.value = false;
  const lines = gsap.utils.toArray(".menu-line");
  gsap.to(lines, {
    duration: 0.75,
    rotation: 0,
    scaleX: 1,
    y: 0,
    ease: easer,
  });
};
defineExpose({
  openMenu,
  closeMenu,
});
</script>

<template>
  <div
    class="menu-btn absolute right-[2rem] top-[2.4rem] z-10 flex h-[4rem] w-[4.5rem] translate-y-[3rem] cursor-pointer flex-col items-center justify-center gap-[.5rem] rounded-[.7rem] bg-red transition-colors duration-300"
    :class="open && 'bg-shadowblue'"
  >
    <div
      v-for="n in 3"
      class="menu-line relative h-[.2rem] w-[2rem] shrink-0 bg-skyblue"
    ></div>
  </div>
</template>

<style scoped></style>
