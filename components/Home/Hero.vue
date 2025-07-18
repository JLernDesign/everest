<script setup>
import { Image as DatocmsImage } from "vue-datocms";
const props = defineProps(["data", "mediaSlides"]);

const loaded = ref(false);
const video = ref(null);

onMounted(() => {
  setTimeout(() => {
    loaded.value = true;
    setTimeout(() => {
      video.value.playVideo();
    }, 200);
  }, 200);
});
</script>

<template>
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
      class="image-wrap relative left-1/2 top-auto -ml-[91rem] h-[112rem] w-[180rem] origin-top scale-[.4] s:absolute s:left-0 s:top-0 s:ml-0 s:scale-100 max-s:mt-[3.2rem] max-s:h-[36rem]"
    >
      <UIGlow
        class="glower left-[36.2rem] top-[8.3rem] h-[106.2rem] !w-[118.1rem] s:top-[19.7rem]"
        src="/home/hero-glow.svg"
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
      <img
        src="/public/ui/cloud-type2.png"
        alt=""
        class="pointer-events-none absolute bottom-0 left-0 z-2 hidden h-[46rem] w-[120rem] translate-x-[50rem] translate-y-[25rem] scale-x-[-1] s:block"
      />

      <!-- clouds -->
      <UICloud
        type="2"
        class="cloud1 -right-[32.4rem] -top-[30.5rem]"
        :anim="true"
        :speed="50"
      />
      <div class="cloud-group absolute left-0 top-[35rem] z-1 s:top-[45.8rem]">
        <UICloud
          type="3"
          class="cloud2 left-[64.7rem] top-[23rem]"
          :anim="true"
          :speed="55"
        />
        <UICloud
          type="1"
          class="cloud3 -left-[9rem] top-[27rem]"
          :flip="true"
          :anim="true"
          :speed="65"
        />
        <UICloud
          type="1"
          class="cloud4 left-[24.6rem] top-[44rem]"
          :anim="true"
          :speed="40"
          :rot="-10"
          :width="91"
        />
        <UICloud
          type="2"
          class="cloud5 -left-[22.9rem] top-0"
          :anim="true"
          :speed="35"
        />
      </div>
    </div>

    <!-- cover image for fade in -->
    <div
      class="image-cover fixed left-0 top-0 z-1 grid h-full w-full place-items-center bg-skyblue transition-opacity duration-500"
      :class="loaded ? 'opacity-0' : 'opacity-100'"
    ></div>

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
</template>

<style scoped></style>
