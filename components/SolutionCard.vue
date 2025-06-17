<script setup>
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["theme", "nav", "data", "num", "template"]);
</script>

<template>
  <div
    class="overview-card dark relative w-full border-b border-grayline bg-jaffa px-side-mob py-[11rem] s:px-side"
  >
    <div class="content relative z-1 flex justify-between">
      <!-- text -->
      <div class="left flex w-1/2 items-center pl-[11.5rem]">
        <div class="num absolute left-0 top-0 mb-[11rem]">
          <IconTri color="fill-red" />
          <div class="font-barlow-cond text-num font-bold opacity-30">
            {{ num < 10 ? "0" + num : num }}
          </div>
        </div>

        <!-- text contents -->
        <div class="max-w-[60rem]">
          <h3
            class="mb-5 font-helvb text-md leading-sm-md"
            v-html="formatText(data.headline)"
          ></h3>
          <span
            class="bullets block max-w-[48rem] space-y-16 [&_ul]:space-y-4"
            v-html="removeWidows(data.body)"
          ></span>

          <!-- cta buttons -->
          <CtaGroup
            v-if="data.cta"
            :data="data.cta.buttons"
            :align="align"
            :theme="theme"
            class="mt-8"
          />
        </div>
      </div>

      <!-- image -->
      <div class="right w-1/2">
        <div
          class="image relative flex aspect-[1.0675] w-full items-center justify-center overflow-hidden rounded-base bg-skyblue p-side"
        >
          <UICloud type="2" class="-left-[16rem] top-[44rem]" />
          <UICloud type="2" class="-top-[25rem] left-[18rem]" />

          <div
            class="image-ph relative flex h-full w-full items-center justify-center [&_img]:h-full [&_img]:w-full [&_img]:object-contain"
          >
            <DatocmsImage
              v-if="data.image"
              :data="data.image.responsiveImage"
            />
          </div>
        </div>
      </div>
    </div>

    <UIGradientBot :theme="theme" />
  </div>
</template>

<style scoped></style>
