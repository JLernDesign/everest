<script setup>
import { Image as DatocmsImage } from "vue-datocms";
const props = defineProps(["data"]);
</script>

<template>
  <Section class="pb-section-bot-mob s:pb-section-bot">
    <SectionHeader :data="data.header" template="landing" />
    <div
      class="mt-[2.5rem] w-full rounded-base-mob p-[11.5rem] s:rounded-base"
      :class="data.bgColor ? bgColor(data) : 'bg-jaffa'"
    >
      <DatocmsImage :data="data.image.responsiveImage" />
    </div>
  </Section>
</template>
