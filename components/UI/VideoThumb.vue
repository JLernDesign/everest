<script setup></script>

<template>
  <!-- thumb -->
  <div
    class="rounded-base-mob relative grid aspect-[1.31] place-content-center overflow-hidden s:w-[33.5rem] s:rounded-base"
  >
    <!-- slides -->
    <div class="slide absolute left-0 top-0 size-full">
      <img
        src="/public/home/ph-video-thumb.jpg"
        alt=""
        class="size-full object-cover"
      />
    </div>

    <!-- cover -->
    <div class="absolute left-0 top-0 size-full bg-[#2A3440] opacity-80"></div>

    <!-- button -->
    <UIArrowDiamond />

    <button
      class="absolute left-0 top-0 size-full"
      @click="openVideoModal('/video/sample-video.mp4')"
    ></button>
  </div>

  <!-- nav -->
  <UIProgressBars />
</template>

<style scoped></style>
