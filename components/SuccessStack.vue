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
  <Section
    :theme="theme"
    class="pb-section-bot-mob bg-skyblue pt-section-top-lg s:pb-section-bot"
  >
    <SectionHeader :theme="theme" :data="data.header" />

    <!-- slides -->
    <div
      class="slides relative mx-auto mt-[5rem] hidden h-[51.5rem] w-[116rem] s:block max-s:w-full"
      ref="main"
    >
      <StackSlide v-for="(slide, i) in data.slides" :data="slide" :key="i" />
    </div>

    <!-- mobile slides -->
    <div
      class="slides-mobile relative left-1/2 w-screen -translate-x-1/2 s:hidden"
    >
      <Carousel :drag="true" class="mt-[2rem]">
        <div
          class="item w-full shrink-0 px-side-mob"
          v-for="(slide, i) in data.slides"
          :key="i"
        >
          <StackSlide :data="slide" />
        </div>
      </Carousel>
    </div>

    <!-- mobile controls-->
    <div
      class="relative mt-[2.5rem] flex h-[3.2rem] w-full justify-between px-side-mob s:hidden"
    >
      <UISlideArrow v-if="data.slides.length > 1" dir="left" class="!w-[48%]" />
      <UISlideArrow
        v-if="data.slides.length > 1"
        dir="right"
        class="!w-[48%]"
      />
    </div>

    <!-- cta buttons -->
    <CtaGroup
      v-if="data.cta"
      :data="data.cta.buttons"
      align="center"
      :theme="theme"
      class="mt-[4rem] s:mt-[6rem]"
    />
  </Section>
</template>

<style scoped></style>
