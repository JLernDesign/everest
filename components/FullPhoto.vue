<script setup>
import { Image as DatocmsImage } from "vue-datocms";
const props = defineProps(["data"]);
</script>

<template>
  <Section class="py-side">
    <div class="rounded-base-mob overflow-hidden s:rounded-base">
      <DatocmsImage v-if="data.image" :data="data.image.responsiveImage" />
    </div>
  </Section>
</template>

<style scoped></style>
