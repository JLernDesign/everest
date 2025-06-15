<script setup>
import gsap from "gsap";
const props = defineProps(["theme", "data"]);

const main = ref(null);
const slides = ref([]);

onMounted(() => {
  if (!main.value) return;

  const items = main.value.querySelectorAll(".slide");
  const itemsArray = Array.from(items).reverse();

  itemsArray.forEach((item, i) => {
    let amt = 7.6 * i + "rem";
    gsap.set(item, { y: amt, zIndex: i });
  });

  // dim inactive slides
  slides.value.forEach((slide, i) => {
    if (slide && typeof slide.setInactive === "function") {
      slide.setInactive(i);
    }
  });
});

onUnmounted(() => {
  // Cleanup if needed
});
</script>

<template>
  <Section
    :theme="theme"
    class="bg-skyblue pb-section-bot pt-section-top-lg"
    side="none"
  >
    <SectionHeader :theme="theme" :data="data.header" />

    <!-- slides -->
    <div
      class="slides relative mx-auto mt-[5rem] h-[51.5rem] max-w-[1160px]"
      ref="main"
    >
      <StackSlide
        v-for="(slide, i) in data.slides"
        :key="i"
        :data="slide"
        :ref="
          (el) => {
            if (el) slides.value[i] = el;
          }
        "
      />
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
