<script setup></script>

<template>
  <!-- thumb -->
  <div
    class="relative grid aspect-[1.31] w-[33.5rem] place-content-center overflow-hidden rounded-base"
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
  <div class="thumb-nav mt-[1.5rem] flex space-x-2">
    <div
      v-for="n in 3"
      class="item size-[1rem] rounded-[.5rem] border-1 border-red"
      :class="n == 1 && 'w-[2.5rem] bg-red'"
    ></div>
  </div>
</template>

<style scoped></style>
