<script setup>
import gsap from "gsap";
const props = defineProps(["speed", "easer", "theme"]);

const logo = ref(null);
const logo_wrap = ref(null);
const video_hover = ref(null);
const video = ref(null);

const setSticky = () => {
  logo.value.setSticky();

  // logo
  gsap.to(logo_wrap.value.$el, {
    duration: props.speed,
    scale: 0.73,
    y: "-.8rem",
    ease: props.easer,
  });
};

const unsetSticky = () => {
  logo.value.unsetSticky();

  // logo
  gsap.to(logo_wrap.value.$el, {
    duration: props.speed,
    scale: 1,
    y: "0rem",
    ease: props.easer,
  });
};

const hover_speed = 0.5;
const hover_easer = "power3.out";

const hoverOn = () => {
  if (isTouchDevice()) return;

  // hide logo
  if (window.scrollY === 0) {
    logo.value.setSticky();
  }
  gsap.to(logo.value.$el, {
    scale: 0.5,
    opacity: 0,
    duration: hover_speed,
    ease: hover_easer,
  });

  // show video
  gsap.fromTo(
    video_hover.value,
    {
      opacity: 0,
      scale: 1.5,
    },
    {
      opacity: 1,
      scale: 1,
      duration: hover_speed,
      ease: hover_easer,
    },
  );
  video.value.resetVideo();
  video.value.playVideo();
};

const hoverOff = () => {
  if (isTouchDevice()) return;

  // hide video
  video.value.pauseVideo();
  gsap.to(video_hover.value, {
    opacity: 0,
    scale: 0.5,
    duration: hover_speed,
    ease: hover_easer,
  });

  // show logo
  if (window.scrollY === 0) {
    logo.value.unsetSticky();
  }
  gsap.to(logo.value.$el, {
    scale: 1,
    opacity: 1,
    duration: hover_speed,
    ease: hover_easer,
  });
};

defineExpose({
  setSticky,
  unsetSticky,
});
</script>

<template>
  <div
    class="logo-main absolute z-5 pl-side-mob pt-[5.1rem] s:pl-side s:pt-[4.25rem]"
  >
    <NuxtLink
      to="/"
      class="relative block h-[5.3rem] w-[6.2rem] origin-top-left s:h-[8.1rem] s:w-[9.4rem]"
      ref="logo_wrap"
      @mouseenter="hoverOn"
      @mouseleave="hoverOff"
      @click="hoverOff"
    >
      <IconLogo ref="logo" :theme="theme" />
      <div
        ref="video_hover"
        class="video-hover pointer-events-none absolute left-1/2 top-1/2 w-[13rem] -translate-x-1/2 -translate-y-1/2 opacity-0"
      >
        <VideoAnim
          file="RevolvingRockLogo1"
          :loop="true"
          size="fill"
          ref="video"
        />
      </div>
    </NuxtLink>
  </div>
</template>
