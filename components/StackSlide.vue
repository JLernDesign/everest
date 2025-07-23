<script setup>
import { Image as DatocmsImage } from "vue-datocms";
const props = defineProps(["data", "num", "changeSlide"]);
const main = ref(null);
const carouselRef = ref(null);

// Navigation handlers
const handlePrev = () => {
  //carouselRef.value?.back();
  props.changeSlide(props.num, "prev");
};

const handleNext = () => {
  //carouselRef.value?.next();
  props.changeSlide(props.num, "next");
};
</script>

<template>
  <div
    class="slide left-0 top-0 w-full rounded-base-mob bg-white shadow-[4px_4px_20px_0px_rgba(0,0,0,0.03)] s:absolute s:h-[36rem] s:rounded-base max-s:h-full"
    ref="main"
  >
    <!-- title -->
    <div
      class="title flex w-full flex-col border-b-1 border-b-grayline px-side-mob pb-[2rem] pt-[2.6rem] transition-colors duration-500 s:flex-row s:items-center s:justify-between s:px-side max-s:space-y-2"
    >
      <h3 class="s:w-[35%] max-s:mb-3">{{ data.name }}</h3>
      <p class="text-body-xsm-mob leading-sm s:w-[45%] s:text-body-xsm">
        {{ data.title }}
      </p>
      <p class="text-body-xsm-mob leading-sm s:w-[20%] s:text-body-xsm">
        {{ data.industry }}
      </p>
    </div>

    <!-- photo/quote -->
    <div
      class="flex w-full flex-col items-start justify-between p-side-mob s:flex-row s:p-side"
    >
      <div class="shrink-0 s:w-[35%]">
        <div
          class="h-[14.8rem] w-[23.4rem] overflow-hidden rounded-base-mob s:rounded-base [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
        >
          <DatocmsImage v-if="data.image" :data="data.image.responsiveImage" />
        </div>
      </div>
      <div
        v-if="data.quote"
        class="w-auto text-body-sm-mob leading-sm s:text-body-sm max-s:mt-12"
      >
        <blockquote>“{{ data.quote }}”</blockquote>
      </div>
    </div>

    <!-- controls -->
    <div
      class="relative hidden w-full justify-between px-side pb-14 pt-9 s:flex"
    >
      <div class="relative w-[23.4rem]">
        <UISlideArrow dir="left" class="cursor-pointer" @click="handlePrev" />
      </div>
      <div class="relative w-[23.4rem]">
        <UISlideArrow dir="right" class="cursor-pointer" @click="handleNext" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
