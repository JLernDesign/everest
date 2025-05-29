<script setup>
import gsap from "gsap";
const props = defineProps(["data"]);
const main = ref(null);

const setInactive = (num) => {
  let title = qs(".title", main.value);
  if (num == 0) {
    gsap.set(main.value, { backgroundColor: "#262D36" });
    gsap.set(title, { opacity: 0.1, color: "#ffffff" });
  }
  if (num == 1) {
    gsap.set(main.value, { backgroundColor: "#313944" });
    gsap.set(title, { opacity: 0.3, color: "#ffffff" });
  }
};

defineExpose({ setInactive });
</script>

<template>
  <div
    class="slide absolute left-0 top-0 w-full rounded-base bg-white shadow-[4px_4px_20px_0px_rgba(0,0,0,0.03)]"
    ref="main"
  >
    <!-- title -->
    <div
      class="title flex w-full items-center justify-between border-b-1 border-b-grayline px-side py-[2.8rem]"
    >
      <h3 class="w-[35%]">{{ data.name }}</h3>
      <p class="w-[45%] text-body-xsm leading-sm">{{ data.title }}</p>
      <p class="w-[20%] text-body-xsm leading-sm">{{ data.industry }}</p>
    </div>

    <!-- photo/quote -->
    <div class="flex w-full items-start justify-between p-side">
      <div class="w-[35%] shrink-0">
        <img
          src="/public/clients/ph-success-photo.jpg"
          alt=""
          class="w-[23.4rem] overflow-hidden rounded-base"
        />
      </div>
      <div class="w-auto text-body-sm leading-sm">
        <blockquote>
          {{ data.quote }}
        </blockquote>
      </div>
    </div>

    <!-- controls -->
    <div class="relative flex w-full justify-between p-side">
      <div class="relative w-[23.4rem]"><UISlideArrow dir="left" /></div>
      <div class="relative w-[23.4rem]"><UISlideArrow dir="right" /></div>
    </div>
  </div>
</template>

<style scoped></style>
