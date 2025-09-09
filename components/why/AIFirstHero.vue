<script setup>
import { gsap } from "gsap";

const props = defineProps(["data", "theme"]);

const main = ref(null);
const video = ref(null);
let ctx;

onMounted(() => {
  ctx = gsap.context((self) => {
    playInView(main.value, null, playVideo);

    const image = self.selector(".video-anim");
    gsap.set(image, { opacity: 0 });

    setTimeout(() => {
      gsap.fromTo(
        image,
        {
          y: "-2rem",
          clipPath: "inset(0% 0 100% 0)",
        },
        {
          duration: 1.25,
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0 0% 0)",
          ease: "power3.out",
        },
      );
    }, 800);
  }, main.value);
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
  <Section :hero="true" side="none" class="s:!pt-[12rem]">
    <!-- side image -->
    <div
      class="absolute left-0 top-0 hidden h-full w-[16rem] pt-[12rem] s:block"
    >
      <img
        src="/public/why/ai-first-side@2x.png"
        alt=""
        class="h-full w-full object-cover"
      />
    </div>

    <div
      class="relative flex flex-col border-t border-t-whiteline px-side-mob s:flex-row s:px-side-lg"
      ref="main"
    >
      <!-- text -->
      <SectionHeader
        class="border-l border-l-whiteline p-side-mob s:w-[57%] s:pl-side s:pr-[7.5rem] max-s:border-r max-s:border-r-whiteline max-s:pb-[4rem]"
        align="left"
        valign="center"
        theme="dark"
        :hero="true"
        :data="data"
        :anim="true"
      />

      <!-- image -->
      <hr
        class="relative left-1/2 w-screen -translate-x-1/2 text-whiteline s:hidden"
      />
      <div class="border-x border-x-whiteline s:aspect-[.76] s:w-[43%]">
        <!-- <img src="/public/why/ai-first-hero@2x.png" alt="" /> -->
        <VideoAnim
          file="Griflan - Everest - Clouds - V01"
          ref="video"
          :alpha="false"
          size="fill"
          :loop="true"
        />
      </div>
    </div>

    <UIArrowDown class="max-s:hidden" theme="dark" />
  </Section>
</template>

<style scoped></style>
