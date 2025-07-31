<script setup>
import { gsap } from "gsap";

const props = defineProps(["data"]);

const mobile = breakpoints.smallerOrEqual("tablet1");
const main = ref(null);
const video = ref(null);
const videoMobile = ref(null);
let ctx;

onMounted(() => {
  ctx = gsap.context((self) => {
    const start = mobile.value ? "top 40%" : "top 70%";
    playInView(main.value, null, playVideo, 0, start);
  });
});

onUnmounted(() => {
  ctx.revert();
});

const playVideo = (ev) => {
  if (ev == "enter") {
    mobile.value ? videoMobile.value.playVideo() : video.value.playVideo();
  } else {
    mobile.value ? videoMobile.value.pauseVideo() : video.value.pauseVideo();
    mobile.value
      ? (videoMobile.value.currentTime = 0)
      : (video.value.currentTime = 0);
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
      <div
        class="-bottom-[1px] left-0 z-0 hidden h-full w-full s:absolute s:block"
      >
        <VideoAnim
          file="Growing_Rocks"
          ref="video"
          size="fill"
          class="[&_video]:object-cover"
        />
      </div>

      <!-- text -->
      <div class="text has-break relative z-10 w-full s:w-[65%]">
        <h2
          v-if="data.headline"
          class="-tracking-sm font-barlow-cond text-xl-mob leading-xl s:text-xl max-s:pr-[2rem] [&_.nobr]:whitespace-normal"
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

      <!-- mobile image -->

      <div class="relative block s:hidden max-s:h-[27rem]">
        <div
          class="video-wrap absolute -bottom-[2rem] -right-[4.5rem] w-[80rem]"
        >
          <VideoAnim
            file="Growing_Rocks"
            ref="videoMobile"
            size="fill"
            class="[&_video]:object-cover"
          />
        </div>
      </div>

      <!-- seal -->
      <div class="absolute right-0 top-0 hidden p-side-mob s:block s:p-side">
        <img src="/public/ui/tri-erp.svg" alt="" class="w-[12.2rem]" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
