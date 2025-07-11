<script setup>
const props = defineProps(["data", "mediaSlides"]);
console.log(props.mediaSlides);
</script>

<template>
  <Section :hero="true" class="!pt-[10.5rem] s:!pt-[24.5rem] s:pb-[10rem]">
    <SectionHeader
      class="max-w-[60rem]"
      align="left"
      :data="data"
      loc="home-hero"
    />

    <!-- image -->
    <div
      class="image-wrap relative left-1/2 top-auto -ml-[91rem] w-[180rem] origin-top scale-[.4] s:absolute s:left-0 s:top-0 s:ml-0 s:scale-100 max-s:mt-[3.2rem] max-s:h-[36rem]"
    >
      <UIGlow
        class="left-[36.2rem] top-[8.3rem] h-[106.2rem] !w-[118.1rem] s:top-[19.7rem]"
        src="/home/hero-glow.svg"
      />
      <div
        class="bg-image absolute left-[31.4rem] top-0 z-1 w-[104.6rem] s:top-[11.4rem]"
      >
        <div class="computer absolute left-0 top-0 z-0">
          <img src="/public/home/ph-home-hero@2x.png" alt="" />
        </div>
      </div>

      <!-- clouds -->
      <UICloud type="2" class="-right-[32.4rem] -top-[30.5rem]" />
      <div class="cloud-group absolute left-0 top-[35rem] z-1 s:top-[45.8rem]">
        <UICloud type="3" class="left-[64.7rem] top-[23rem]" />
        <UICloud type="1" class="-left-[9rem] top-[27rem] -scale-x-100" />
        <UICloud
          type="1"
          class="left-[24.6rem] top-[44rem] !w-[91rem] -rotate-[10deg]"
        />
        <UICloud type="2" class="-left-[22.9rem] top-0" />
      </div>
    </div>

    <!-- video -->
    <div
      v-if="mediaSlides && mediaSlides.length > 0"
      class="relative z-5 s:mt-[24rem] s:grid s:justify-end"
    >
      <MediaSlider :data="mediaSlides" />
    </div>

    <UIArrowDown class="max-s:hidden" />
  </Section>
</template>

<style scoped></style>
