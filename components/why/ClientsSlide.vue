<script setup>
import { Image as DatocmsImage } from "vue-datocms";
const props = defineProps(["data"]);
const arrowDiamond = ref(null);

const handleClick = (item) => {
  if (item.video) {
    openVideoModal(item.video);
  }
};

const hoverOn = () => {
  if (arrowDiamond.value) {
    arrowDiamond.value.hoverOn();
  }
};

const hoverOff = () => {
  if (arrowDiamond.value) {
    arrowDiamond.value.hoverOff();
  }
};
</script>

<template>
  <div
    class="relative z-1 h-[19.2rem] w-[30.2rem] shrink-0 cursor-pointer overflow-hidden rounded-base-mob p-[3.2rem] pt-[3.75rem] text-left s:rounded-base"
    @click="handleClick(data)"
    @mouseenter="hoverOn"
    @mouseleave="hoverOff"
  >
    <!-- photo -->
    <div
      class="photo-wrap dato-image absolute inset-0 [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
    >
      <DatocmsImage
        v-if="data.image"
        :data="data.image.responsiveImage"
        class="h-full w-full"
      />
    </div>

    <!-- gradient -->
    <div
      class="gradient absolute left-0 top-0 h-full w-full bg-gradient-to-t from-[#2A3440] to-[rgba(42_52_62/0)] opacity-80"
    ></div>

    <!-- logo -->
    <div
      class="absolute left-0 top-0 flex h-full w-full items-end justify-start p-[2.5rem]"
    >
      <UILogo
        v-if="data.logo"
        :src="data.logo.url"
        align="object-left-bottom"
        :small="true"
      />
    </div>

    <!-- video cover -->
    <!-- <div class="absolute left-0 top-0 size-full bg-[#2A3440] opacity-80"></div> -->
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <UIArrowDiamond ref="arrowDiamond" />
    </div>
  </div>
</template>
