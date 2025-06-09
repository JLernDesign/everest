<script setup>
import gsap from "gsap";
const props = defineProps(["theme", "data"]);

const main = ref(null);
const slide = ref(null);
let items;

onMounted(() => {
  items = qsa(".slide", main.value);
  items.reverse();

  items.forEach((item, i) => {
    let amt = 7.6 * i + "rem";
    gsap.set(item, { y: amt, zIndex: i });
  });

  // dim inactive slides
  slide.value.forEach((slide, i) => {
    slide.setInactive(i);
  });
});
onUnmounted(() => {});
</script>

<template>
  <Section :theme="theme" class="pb-section-bot pt-section-top-lg" side="none">
    <SectionHeader :theme="theme" :data="data.header" />

    <!-- slides -->
    <div
      class="slides relative mx-auto mt-[5rem] h-[51.5rem] max-w-[1160px]"
      ref="main"
    >
      <StackSlide v-for="(slide, i) in data.slides" :data="slide" ref="slide" />
    </div>

    <!-- cta buttons -->
    <CtaGroup
      v-if="data.cta"
      :data="data.cta.buttons"
      align="center"
      :theme="theme"
      class="mt-[6rem]"
    />
  </Section>
</template>

<style scoped></style>
