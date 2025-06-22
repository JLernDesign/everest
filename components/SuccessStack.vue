<script setup>
import gsap from "gsap";
const props = defineProps(["theme", "data"]);

const main = ref(null);
const slide = ref(null);
let items;

onMounted(() => {
  items = qsa(".slide", main.value);
  //items.reverse();

  items.forEach((item, i) => {
    let amt = 7.6 * (items.length - 1 - i) + "rem";
    gsap.set(item, { y: amt, zIndex: items.length - 1 - i });

    let title = qs(".title", item);

    // fully grayed
    if (i > 1) {
      gsap.set(item, { backgroundColor: "#262D36" });
      gsap.set(title, { opacity: 0.1, color: "#ffffff" });
    }
    // partial grayed
    if (i == 1) {
      gsap.set(item, { backgroundColor: "#313944" });
      gsap.set(title, { opacity: 0.3, color: "#ffffff" });
    }
  });
});
</script>

<template>
  <Section :theme="theme" class="bg-skyblue pb-section-bot pt-section-top-lg">
    <SectionHeader :theme="theme" :data="data.header" />

    <!-- slides -->
    <div
      class="slides relative mx-auto mt-[5rem] h-[51.5rem] w-[116rem] max-s:w-full"
      ref="main"
    >
      <StackSlide v-for="(slide, i) in data.slides" :data="slide" :key="i" />
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
