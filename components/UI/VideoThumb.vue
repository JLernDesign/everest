<script setup>
import { Image as DatocmsImage } from "vue-datocms";
const props = defineProps(["data"]);

const handleClick = () => {
  // open video modal
  if (props.data.video) {
    openVideoModal(props.data.video);
  }

  // open link
  if (props.data.link) {
    // external link
    if (props.data.link.external) {
      window.open(props.data.link.external, "_blank");
    } else {
      // internal link
      navigateTo(getUrl(props.data.link));
    }
  }
};
</script>

<template>
  <div class="item h-full w-[33.5rem] shrink-0">
    <div
      class="relative h-full [&>div]:h-full [&_img]:size-full [&_img]:object-cover"
    >
      <DatocmsImage :data="data.thumbnail.responsiveImage" />
    </div>

    <!-- cover -->
    <div class="absolute left-0 top-0 size-full bg-[#2A3440] opacity-80"></div>

    <!-- button -->
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <UIArrowDiamond />
    </div>

    <button
      class="absolute left-0 top-0 size-full"
      @click="handleClick"
    ></button>
  </div>
</template>

<style scoped></style>
