<script setup>
import { gsap } from "gsap";

const props = defineProps(["data", "color"]);

const main = ref(null);
const video = ref(null);
let ctx;

onMounted(() => {
  ctx = gsap.context((self) => {
    playInView(main.value, null, playVideo);
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
  <div ref="main">
    <!-- header -->
    <div
      class="relative flex border-t border-t-whiteline px-side-mob s:px-side-lg"
    >
      <!-- side images -->
      <div
        v-for="n in 2"
        class="absolute top-0 hidden h-full w-[16rem] s:block"
        :class="n == 1 ? 'left-0' : 'right-0'"
      >
        <img
          :src="
            color == 'blue' && n == 1
              ? '/why/ai-corner-red@2x.png'
              : '/why/ai-corner-blue@2x.png'
          "
          alt=""
          class="h-full w-full object-cover"
        />
      </div>

      <!-- headline -->
      <div
        class="relative w-full border-x border-x-whiteline px-side-mob py-[3.5rem] s:px-side s:py-[4.5rem]"
      >
        <h2
          class="relative font-barlow-cond text-lg-mob leading-lg s:text-lg max-s:pr-8"
        >
          {{ data.headline }}
          <IconArrowFill
            color="fill-red"
            class="absolute right-0 top-0 rotate-[135deg] s:bottom-0"
          />
        </h2>
      </div>
    </div>

    <!-- content -->
    <div
      class="relative flex flex-col border-t border-t-whiteline px-side-mob s:flex-row s:px-side-lg"
    >
      <!-- image -->
      <div class="w-full border-l border-l-whiteline s:w-[57%]">
        <div class="ph-image relative aspect-[1.44]">
          <VideoAnim
            v-if="color == 'red'"
            file="Everest - Web Animation - ERP System - V01"
            ref="video"
            :alpha="false"
            :loop="true"
          />
          <VideoAnim
            v-if="color == 'blue'"
            file="Everest - Web Animation - V01"
            ref="video"
            :alpha="false"
            :loop="true"
          />
          <!-- <img
            :src="
              color == 'red'
                ? '/why/ai-first-ph1@2x.png'
                : '/why/ai-first-ph2@2x.png'
            "
            alt=""
            class="h-full w-full"
          /> -->
          <!-- <div
            class="absolute left-0 top-0 h-full w-full bg-cover"
            :class="
              color == 'red'
                ? 'bg-[url(/why/aifirst-redbg.svg)]'
                : 'bg-[url(/why/aifirst-bluebg.svg)]'
            "
          ></div> -->
        </div>
      </div>

      <!-- text -->
      <div
        class="flex flex-col justify-end border-x border-x-whiteline p-side-mob s:w-[43%] s:p-[5rem]"
      >
        <span v-html="data.body"></span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
