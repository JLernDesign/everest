<script setup>
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["theme", "nav", "data", "num", "template"]);
console.log(props.nav);
</script>

<template>
  <div
    class="overview-card dark relative w-full border-b px-side-mob py-[11rem] s:px-[20rem]"
    :class="
      theme == 'dark'
        ? 'border-[#3D4856] bg-shadowblue'
        : 'border-grayline bg-jaffa'
    "
  >
    <div class="content relative z-1 flex justify-between">
      <!-- text -->
      <div class="left flex w-1/2 items-center">
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

        <!-- slide nav -->
        <div
          v-if="nav"
          class="slide-nav absolute bottom-0 left-0 w-[21rem] bg-[url(/public/ui/peak.png)] bg-contain bg-bottom bg-no-repeat"
        >
          <div class="flex w-full flex-col gap-y-6">
            <div
              v-for="n in 7"
              class="nav-line h-[1px] w-full bg-[#3D4856]"
            ></div>
          </div>
        </div>
      </div>

      <!-- image -->
      <div class="right w-1/2">
        <div
          class="image relative flex aspect-[1.0675] w-full items-center justify-center overflow-hidden rounded-base bg-skyblue p-[11.5rem]"
        >
          <UICloud type="2" class="-left-[16rem] top-[44rem]" />
          <UICloud type="2" class="-top-[25rem] left-[18rem]" />

          <div
            class="image-ph relative h-full w-full [&>div]:h-full [&_img]:h-full [&_img]:w-full [&_img]:object-contain"
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
