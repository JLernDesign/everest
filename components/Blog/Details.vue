<script setup>
import { useDateFormat } from "@vueuse/core";

const props = defineProps(["data", "loc"]);
const formattedDate = useDateFormat(props.data.publishDate, "MM.DD.YY");

// default tag for blog posts
if (!props.data.tag) {
  props.data.tag = {
    name: "Insight",
    slug: "insight",
  };
}
</script>

<template>
  <div class="row details relative z-1 mb-10 flex items-center space-x-[2rem] font-barlow text-tag">
    <time v-if="data.tag.slug != 'product-demos' && loc != 'live-demo'">{{ formattedDate }}</time>
    <div :data-id="data.tag.slug"
      class="tag rounded-sm border-1 border-black px-[1.4rem] pb-[.6rem] pt-[.4rem] font-medium uppercase">
      {{ data.category ? data.category.name : data.tag.name }}
    </div>
  </div>
</template>

<style scoped></style>
