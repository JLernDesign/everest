<script setup>
import { Image as DatocmsImage } from "vue-datocms";
const props = defineProps(["data", "edge", "layout"]);
</script>

<template>
  <Section
    class="bg-shadowblue pb-section-bot-lg text-white"
    :class="data.jaggedEdge && '!pt-0'"
    theme="dark"
  >
    <UIJagEdge v-if="data.jaggedEdge" color="fill-shadowblue" />

    <!-- header -->
    <SectionHeader theme="dark" :data="data.header" />

    <!-- columns -->
    <div class="flex items-start justify-between pt-[6rem]">
      <!-- image -->
      <div
        class="image aspect-square w-1/2 overflow-hidden rounded-base bg-shadowbluelt"
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
        class="text w-1/2"
        :class="
          layout == 'img-lt'
            ? 'order-2 pl-[11.5rem] pr-[9rem]'
            : 'order-1 pl-[9rem] pr-[11.5rem]'
        "
      >
        <div
          class="bullets space-y-10 [&_*+h2]:mt-[9rem] [&_h2]:font-helvb [&_h2]:text-body-md [&_h3+p]:mt-[.5rem] [&_h3]:font-helvb"
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
