<script setup>
import { Image as DatocmsImage } from "vue-datocms";
const props = defineProps(["data", "items"]);

let slider = false;
let duplicated = [];
if (props.items.length <= 3) {
  duplicated = props.items;
} else {
  duplicated = [...props.items, ...props.items];
  slider = true;
}
</script>

<template>
  <Section :hero="true" class="pb-section-bot-lg" theme="dark">
    <UITexture />

    <SectionHeader class="pt-[4rem]" align="center" :hero="true" :data="data" />

    <!-- slider -->
    <Carousel
      class="slider-wrap mt-[15.5rem] !h-[40rem] -rotate-[15deg] space-x-[7rem]"
      :class="slider ? 'ml-[5.65rem]' : 'ml-[3.5rem] justify-end'"
      :drag="slider && true"
      :padding="slider ? '70' : '0'"
      :center="slider && true"
      :start="slider && 1"
    >
      <div
        v-for="item in duplicated"
        class="item z-1 -ml-[1.2rem] h-[19.2rem] w-[30.2rem] shrink-0 rotate-[15deg] overflow-hidden rounded-base bg-white p-[3.2rem] pt-[3.75rem] text-left"
      >
        <!-- photo -->
        <div
          class="photo-wrap absolute inset-0 [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
        >
          <DatocmsImage
            v-if="item.image"
            :data="item.image.responsiveImage"
            class="h-full w-full"
          />
        </div>

        <!-- gradient -->
        <div
          class="gradient absolute left-0 top-0 h-full w-full bg-gradient-to-t from-[#2A3440] to-[rgba(42_52_62/0)] opacity-80"
        ></div>

        <!-- logo -->
        <div
          class="absolute left-0 top-0 flex h-full w-full items-end justify-start p-[2.5rem]"
        >
          <UILogo
            v-if="item.logo"
            :src="item.logo.url"
            align="object-left-bottom"
            :small="true"
          />
        </div>
      </div>
    </Carousel>
  </Section>
</template>

<style scoped></style>
