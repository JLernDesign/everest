<script setup>
import { Image as DatocmsImage } from "vue-datocms";
const props = defineProps(["data"]);
const main = ref(null);

/* const setInactive = (num) => {
  let title = qs(".title", main.value);
  // fully grayed
  if (num > 1) {
    gsap.set(main.value, { backgroundColor: "#262D36" });
    gsap.set(title, { opacity: 0.1, color: "#ffffff" });
  }
  // partial grayed
  if (num == 1) {
    gsap.set(main.value, { backgroundColor: "#313944" });
    gsap.set(title, { opacity: 0.3, color: "#ffffff" });
  }
};

defineExpose({ setInactive }); */
</script>

<template>
  <div
    class="slide rounded-base-mob absolute left-0 top-0 w-full bg-white shadow-[4px_4px_20px_0px_rgba(0,0,0,0.03)] s:rounded-base"
    ref="main"
  >
    <!-- title -->
    <div
      class="title flex w-full items-center justify-between border-b-1 border-b-grayline px-side pb-[2rem] pt-[2.6rem]"
    >
      <h3 class="w-[35%]">{{ data.name }}</h3>
      <p class="text-body-xsm-mob w-[45%] leading-sm s:text-body-xsm">
        {{ data.title }}
      </p>
      <p class="text-body-xsm-mob w-[20%] leading-sm s:text-body-xsm">
        {{ data.industry }}
      </p>
    </div>

    <!-- photo/quote -->
    <div class="flex w-full items-start justify-between p-side">
      <div class="w-[35%] shrink-0">
        <div
          class="rounded-base-mob w-[23.4rem] overflow-hidden s:rounded-base"
        >
          <DatocmsImage v-if="data.image" :data="data.image.responsiveImage" />
        </div>
      </div>
      <div class="w-auto text-body-sm-mob leading-sm s:text-body-sm">
        <blockquote>
          {{ data.quote }}
        </blockquote>
      </div>
    </div>

    <!-- controls -->
    <div class="relative flex w-full justify-between px-side pb-14 pt-9">
      <div class="relative w-[23.4rem]"><UISlideArrow dir="left" /></div>
      <div class="relative w-[23.4rem]"><UISlideArrow dir="right" /></div>
    </div>
  </div>
</template>

<style scoped></style>
