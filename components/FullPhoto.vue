<script setup>
import { Image as DatocmsImage } from "vue-datocms";
const props = defineProps(["data"]);
</script>

<template>
  <Section class="py-side-mob s:py-side">
    <div
      class="dato-image overflow-hidden rounded-base-mob s:h-[92.6rem] s:rounded-base [&>div]:!h-full [&>div]:!max-w-none [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
    >
      <DatocmsImage v-if="data.image" :data="data.image.responsiveImage" />
    </div>
  </Section>
</template>

<style scoped></style>
