<script setup>
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["data"]);
</script>

<template>
  <div
    class="content-image relative overflow-hidden rounded-base-mob bg-cover s:rounded-base [&_div]:!max-w-none [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
  >
    <DatocmsImage :data="data.image.responsiveImage" />
    <div
      class="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-shadowblue from-50% to-transparent opacity-80"
    ></div>
    <div
      class="caption absolute bottom-[2rem] left-[2rem] pr-[2rem] font-barlow-cond text-sm-mob leading-[.94] text-white s:bottom-[5rem] s:left-[5rem] s:w-[50%] s:text-sm"
    >
      <IconTri color="fill-red" class="mb-8" />
      {{ data.caption }}
    </div>
  </div>
</template>
