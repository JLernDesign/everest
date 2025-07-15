<script setup>
import { useDateFormat } from "@vueuse/core";

const props = defineProps(["data"]);
const formattedDate = useDateFormat(props.data.publishDate, "MM.DD.YY");
</script>

<template>
  <div
    class="row details relative z-1 mb-10 flex items-center space-x-[2rem] font-barlow text-tag"
  >
    <time>{{ formattedDate }}</time>
    <button
      :data-id="data.tag.slug"
      class="tag rounded-sm border-1 border-black px-[1.4rem] py-[.4rem] font-medium uppercase"
    >
      {{ data.tag.name }}
    </button>
  </div>
</template>

<style scoped></style>
