<script setup>
import { Image as DatocmsImage } from "vue-datocms";
const props = defineProps(["data", "edge", "layout"]);
</script>

<template>
  <Section
    class="pb-section-bot-mob bg-shadowblue text-white s:pb-section-bot-lg"
    :class="data.jaggedEdge && '!pt-0'"
    theme="dark"
  >
    <UIJagEdge v-if="data.jaggedEdge" color="fill-shadowblue" />

    <!-- header -->
    <SectionHeader theme="dark" :data="data.header" />

    <!-- columns -->
    <div class="flex flex-col items-start justify-between pt-[6rem] s:flex-row">
      <!-- image -->
      <div
        class="image rounded-base-mob aspect-square w-full overflow-hidden bg-shadowbluelt s:w-1/2 s:rounded-base"
        :class="data.layout == 'image left' ? 'order-1' : 'order-2'"
      >
        <DatocmsImage
          v-if="data.image"
          :data="data.image.responsiveImage"
          class="h-full w-full object-cover"
        />
      </div>

      <!-- text -->
      <div
        class="text w-full s:w-1/2"
        :class="
          layout == 'img-lt'
            ? 'order-2 pl-[11.5rem] pr-[9rem]'
            : 'order-1 pl-[9rem] pr-[11.5rem]'
        "
      >
        <div
          class="bullets [&_h2]:text-body-md-mob space-y-10 [&_*+h2]:mt-[9rem] [&_h2]:font-helvb [&_h2]:s:text-body-md [&_h3+p]:mt-[.5rem] [&_h3]:font-helvb"
          v-html="data.body"
        ></div>

        <CtaGroup
          v-if="data.cta"
          :data="data.cta.buttons"
          :align="left"
          :theme="dark"
          class="mt-10"
        />
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
