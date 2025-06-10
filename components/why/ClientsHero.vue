<script setup>
const props = defineProps(["data"]);
const main = ref(null);
let slides;
const os = 9;

onMounted(() => {
  slides = qsa(".client-slide", main.value);
  slides.reverse();

  slides.forEach((slide, i) => {
    slide.style.marginTop = i * os + "rem";
  });
});
onUnmounted(() => {});
</script>

<template>
  <Section :hero="true" class="pb-section-bot-lg" theme="dark">
    <UITexture />

    <SectionHeader class="pt-[4rem]" align="center" :hero="true" :data="data" />

    <!-- slider -->
    <div
      class="clients-slider relative mt-4 flex h-[55rem] items-start justify-center gap-[5rem]"
      ref="main"
    >
      <div
        v-for="n in 5"
        class="client-slide relative w-[30.2rem] overflow-hidden rounded-base"
      >
        <!-- photo -->
        <img src="/public/clients/ph-client-success@2x.png" alt="" />

        <!-- gradient -->
        <div
          class="gradient absolute left-0 top-0 h-full w-full bg-gradient-to-t from-[#2A3440] to-[rgba(42_52_62/0)] opacity-80"
        ></div>

        <!-- logo -->
        <div
          class="absolute left-0 top-0 flex h-full w-full items-end justify-start p-[2.5rem]"
        >
          <UILogo
            src="/logos/ph-logo-white.svg"
            align="object-left-bottom"
            :small="true"
          />
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
