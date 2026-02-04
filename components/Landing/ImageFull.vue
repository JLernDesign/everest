<script setup>
import { Image as DatocmsImage } from "vue-datocms";
const props = defineProps(["data"]);
</script>

<template>
  <Section class="pb-[5rem] s:pb-section-bot">
    <SectionHeader :data="data.header" template="landing" />
    <div
      class="mt-[2.5rem] w-full rounded-base-mob p-[1.4rem] s:mt-[5rem] s:rounded-base s:p-[11.5rem]"
      :class="data.bgColor ? bgColor(data) : 'bg-jaffa'"
    >
      <DatocmsImage v-if="data.image" :data="data.image.responsiveImage" />
    </div>
  </Section>
</template>
