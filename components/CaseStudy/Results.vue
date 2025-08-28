<script setup>
import gsap from "gsap";

const props = defineProps(["data", "slider"]);
const section = ref(null);
let ctx;

onMounted(() => {
  // parallax clouds
  ctx = gsap.context((self) => {
    const clouds = self.selector(".cloud");
    const cloudY = [40, 70];
    cloudParallax(section.value.$el, null, clouds, cloudY, "top bottom");
  }, section.value.$el);
});
onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <Section
    class="bg-skyblue pb-section-bot-mob s:pb-section-bot"
    side="none"
    :anim="true"
    ref="section"
  >
    <!-- bg elements -->
    <UIGlow
      class="-top-[5rem] z-0 h-[13.6rem] w-full s:-top-[13.6rem] s:blur-big"
      src="/ui/edge-gradient.svg"
    />
    <UICloud
      type="3"
      class="-top-[5rem] left-0 opacity-50"
      :flip="true"
      :anim="true"
      :speed="80"
      :delay="-70"
    />
    <UICloud
      type="3"
      class="left-0 top-[20rem] opacity-[.6]"
      :flip="true"
      :anim="true"
      :speed="65"
      :delay="-30"
    />

    <!-- header -->
    <header
      class="relative z-1 space-y-[3rem] text-center s:space-y-header-lg max-s:pt-[5rem]"
    >
      <AnimHeadline>
        <h2
          class="text font-barlow-cond-semibold text-xxl-mob uppercase leading-xxl -tracking-md-mob s:text-xxl s:-tracking-md"
        >
          The Results
        </h2>
      </AnimHeadline>
    </header>

    <!-- results slider -->
    <CaseStudyResultsSlider :data="slider" loc="lockup" />
  </Section>
</template>

<style scoped></style>
