<script setup>
import gsap from "gsap";

const props = defineProps(["data", "slider"]);
const section = ref(null);
const main = ref(null);
let ctx;
const video = ref(null);
console.log(props.data);

onMounted(() => {
  ctx = gsap.context((self) => {
    // turn on rock animation when in view
    playInView(main.value, null, toggleVideo);

    // parallax clouds
    const clouds = self.selector(".cloud");
    const cloudY = [40, 70];
    cloudParallax(section.value.$el, null, clouds, cloudY, "top bottom");
  }, section.value.$el);
});
onUnmounted(() => {
  ctx && ctx.revert();
});

const toggleVideo = (ev) => {
  if (video.value) {
    ev == "enter" ? video.value.playVideo() : video.value.pauseVideo();
  }
};
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
    <CaseStudyResultsSlider v-if="slider" :data="slider" loc="lockup" />

    <!-- results lockup -->
    <div
      class="has-break relative z-1 mx-auto max-w-[85rem] space-y-[2rem] text-center s:space-y-[3.5rem]"
      ref="main"
    >
      <div class="mx-auto !-mb-8 w-[28rem]">
        <VideoAnim
          file="RevolvingRockLogo1"
          :loop="true"
          size="fill"
          ref="video"
        />
      </div>

      <h2
        class="text font-barlow-cond text-xl-mob leading-xl s:text-xl"
        :class="!data.intro && 's:pb-[.5rem]'"
        v-html="formatText(data.headline)"
      ></h2>

      <p
        v-if="data.intro"
        class="mx-auto max-w-[62rem]"
        v-html="formatText(data.intro)"
      ></p>

      <!-- cta buttons -->
      <CtaGroup
        v-if="data.cta"
        :data="data.cta.buttons"
        align="center"
        :theme="theme"
        wrap="true"
      />
    </div>
  </Section>
</template>

<style scoped></style>
