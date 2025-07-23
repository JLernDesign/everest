<script setup>
import { gsap } from "gsap";

const props = defineProps(["data"]);

const main = ref(null);
const video = ref(null);
let ctx;

onMounted(() => {
  ctx = gsap.context((self) => {
    playInView(main.value, null, playVideo, 0, "top bottom+=500");
  });
});

onUnmounted(() => {
  ctx.revert();
});

const playVideo = (ev) => {
  if (video.value) {
    if (ev == "enter") {
      video.value.playVideo();
    } else {
      video.value.pauseVideo();
      video.value.currentTime = 0;
    }
  }
};
</script>

<template>
  <div class="relative p-side-mob s:p-side" ref="main">
    <!-- content -->
    <div
      class="relative overflow-hidden rounded-base-mob bg-[#FFD0B9] px-side-mob py-side-mob s:min-h-[61.5rem] s:rounded-base s:px-[11.5rem] s:py-[7rem]"
    >
      <!-- gradient -->
      <div
        class="circle-gradient absolute h-[60.8rem] w-[38.5rem] -rotate-90 rounded-[121.6rem] opacity-[.6] blur-[50px] s:-right-[6rem] s:-top-[44rem] s:h-[121.6rem] s:w-[77rem] max-s:-bottom-[20rem] max-s:left-1/2 max-s:translate-x-[-50%]"
        style="
          background: radial-gradient(
            80.43% 67.96% at 27.01% 46.13%,
            #ff9dda 0%,
            #f7ff9d 55.77%
          );
        "
      ></div>

      <!-- video bg -->
      <div class="left-0 top-0 z-0 hidden h-full w-full s:absolute s:block">
        <VideoAnim
          file="Growing Rocks Clean_Correction_With_BG (1)"
          ref="video"
          size="fill"
          class="[&_video]:object-cover"
        />
      </div>

      <!-- text -->
      <div class="text has-break relative z-10 w-full s:w-[65%]">
        <h2
          v-if="data.headline"
          class="font-barlow-cond text-xl-mob leading-xl s:text-xl max-s:pr-[2rem] [&_.nobr]:whitespace-normal"
          v-html="formatText(data.headline)"
        ></h2>
        <p
          v-if="data.intro"
          class="mt-[3rem] s:mt-[4.75rem]"
          v-html="formatText(data.intro)"
        ></p>

        <CtaGroup
          v-if="data.cta"
          :data="data.cta.buttons"
          :align="left"
          theme="light"
          class="mt-side-mob s:mt-side"
        />
      </div>

      <!-- image -->

      <!-- <div
        class="right-0 top-0 flex h-full items-center s:absolute s:w-[84rem] s:pr-[12rem] max-s:-mt-[3rem] max-s:h-[32.5rem]"
      >
        <div
          class="video-wrap absolute left-1/2 top-1/2 w-[75rem] -translate-x-1/2 -translate-y-1/2 s:w-[150rem] max-s:h-0"
        >
          <VideoAnim file="StoneLogo1" ref="video" />
        </div>
      </div> -->

      <!-- seal -->
      <div class="absolute right-0 top-0 hidden p-side-mob s:block s:p-side">
        <img src="/public/ui/tri-erp.svg" alt="" class="w-[12.2rem]" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
