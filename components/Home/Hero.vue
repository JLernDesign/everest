<script setup>
import gsap from "gsap";
const props = defineProps(["data", "mediaSlides"]);

const loaded = ref(false);
const video = ref(null);
const main = ref(null);
let ctx;

onMounted(() => {
  // play video on load
  setTimeout(() => {
    loaded.value = true;
    setTimeout(() => {
      video.value.playVideo();
    }, 200);
  }, 200);

  // setup scrolltrigger for cloud parallax
  ctx = gsap.context((self) => {
    const intro = document.getElementById("intro");
    const clouds = self.selector(".cloud");
    const cloudY = [70, 152, 20, 86, 120, 165];
    cloudParallax(main.value, intro, clouds, cloudY);
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <div ref="main">
    <Section
      class="!pt-[10.5rem] s:!pt-[24.5rem] s:pb-[10rem]"
      :hero="true"
      :anim="true"
    >
      <SectionHeader
        class="max-w-[60rem] transition-opacity duration-500"
        :class="loaded ? 'opacity-100' : 'opacity-0'"
        align="left"
        :data="data"
        loc="home-hero"
      />

      <!-- image -->
      <div
        class="image-wrap xxl:left-1/2 xxl:-translate-x-1/2 relative left-1/2 top-auto -ml-[91rem] h-[112rem] w-[180rem] origin-top scale-[.4] s:absolute s:left-0 s:top-0 s:ml-0 s:scale-100 max-s:mt-[3.2rem] max-s:h-[36rem]"
      >
        <UIGlow
          class="glower left-[36.2rem] top-[8.3rem] h-[106.2rem] !w-[118.1rem] s:top-[19.7rem]"
          src="/home/hero-glow.svg"
        />
        <UICloud
          type="2"
          class="cloud5 left-[0rem] top-[18rem] opacity-75"
          :flip="true"
          :anim="true"
          :speed="75"
          :delay="-30"
          num="0"
        />

        <!-- laptop animation -->
        <div
          class="computer-wrap absolute left-[31.4rem] top-0 z-1 h-[100rem] w-[110rem] overflow-hidden s:top-[11.4rem]"
        >
          <div
            class="absolute w-[104.6rem] translate-x-[6.2rem] translate-y-[-1rem] scale-[1.5]"
          >
            <VideoAnim file="Laptop" ref="video" />
          </div>
        </div>

        <!-- cover laptop bottom with clouds to remove hard edge -->
        <div
          class="absolute -bottom-[10rem] left-1/2 z-1 ml-[6rem] hidden h-[20rem] w-[115rem] -translate-x-1/2 rounded-full bg-skyblue blur-[20px] s:block"
        ></div>

        <!-- clouds -->
        <UICloud
          type="2"
          class="cloud1 -right-[32.4rem] -top-[30.5rem]"
          :anim="true"
          :speed="90"
          num="1"
        />
        <div
          class="cloud-group absolute left-0 top-[35rem] z-1 s:top-[45.8rem]"
        >
          <UICloud
            type="3"
            class="cloud2 left-[64.7rem] top-[23rem]"
            :anim="true"
            :speed="80"
            num="2"
          />
          <UICloud
            type="1"
            class="cloud3 -left-[9rem] top-[27rem]"
            :flip="true"
            :anim="true"
            :speed="85"
            num="3"
          />
          <UICloud
            type="1"
            class="cloud4 left-[24.6rem] top-[44rem]"
            :anim="true"
            :speed="75"
            :rot="-10"
            :width="91"
            num="4"
          />
          <UICloud
            type="2"
            class="cloud5 -left-[22.9rem] top-0"
            :anim="true"
            :speed="70"
            num="5"
          />
        </div>
      </div>

      <!-- cover image for fade in -->
      <LoadCover :loaded="loaded" />

      <!-- video slider -->
      <div
        v-if="mediaSlides && mediaSlides.length > 0"
        class="relative z-5 transition-opacity duration-500 s:mt-[24rem] s:grid s:justify-end"
        :class="loaded ? 'opacity-100' : 'opacity-0'"
      >
        <LazyMediaSlider :data="mediaSlides" />
      </div>

      <UIArrowDown v-if="loaded" class="max-s:hidden" />
    </Section>
  </div>
</template>

<style scoped></style>
