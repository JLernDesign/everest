<script setup>
import gsap from "gsap";
const props = defineProps(["theme"]);

const slides = [
  {
    name: "Ryann Hart",
    title: "CPA and Revenue Accounting Sr. Manager",
    industry: "Saas",
    quote:
      "Everest has leveraged the deep industry expertise of its team to get the details right! From handling complex contract modifications and delivering actionable deferred revenue analytics to managing multi-entity and multi-currency journal entries, Everest simplifies the most intricate accounting processes.",
  },
  {
    name: "Ryann Hart",
    title: "CPA and Revenue Accounting Sr. Manager",
    industry: "Saas",
    quote:
      "Everest has leveraged the deep industry expertise of its team to get the details right! From handling complex contract modifications and delivering actionable deferred revenue analytics to managing multi-entity and multi-currency journal entries, Everest simplifies the most intricate accounting processes.",
  },
  {
    name: "Ryann Hart",
    title: "CPA and Revenue Accounting Sr. Manager",
    industry: "Saas",
    quote:
      "Everest has leveraged the deep industry expertise of its team to get the details right! From handling complex contract modifications and delivering actionable deferred revenue analytics to managing multi-entity and multi-currency journal entries, Everest simplifies the most intricate accounting processes.",
  },
];

const main = ref(null);
const slide = ref(null);
let items;

onMounted(() => {
  items = qsa(".slide", main.value);

  items.forEach((item, i) => {
    let amt = 7.6 * i + "rem";
    gsap.set(item, { y: amt });
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
    <SectionHeader
      :theme="theme"
      :data="{
        eyebrow: 'Client Success',
        headline: 'See what SaaS leaders are saying',
        intro:
          'Hear how Everest is helping SaaS finance and operations teams streamline their quote-to-cash cycles and drive real financial impact.',
      }"
    />

    <!-- slides -->
    <div
      class="slides relative mx-auto mt-[5rem] h-[51.5rem] max-w-[1160px]"
      ref="main"
    >
      <StackSlide v-for="(slide, i) in slides" :data="slide" ref="slide" />
    </div>

    <!-- cta -->
    <div class="btn-group mt-[6rem] space-x-nav text-center">
      <CtaBtn>Client Success</CtaBtn>
    </div>
  </Section>
</template>

<style scoped></style>
