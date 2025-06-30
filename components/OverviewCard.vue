<script setup>
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["theme", "nav", "data", "num", "template"]);
</script>

<template>
  <div
    class="overview-card dark relative w-full border-b px-side-mob py-[6rem] s:px-[20rem] s:py-[11rem]"
    :class="
      theme == 'dark'
        ? 'border-[#3D4856] bg-shadowblue'
        : 'border-grayline bg-jaffa'
    "
  >
    <div class="content relative z-1 flex flex-col justify-between s:flex-row">
      <!-- text -->
      <div
        class="left flex w-full s:w-1/2 s:items-center max-s:order-2 max-s:mt-12 max-s:flex-col"
      >
        <div class="num left-0 top-0 mb-[2rem] s:absolute s:mb-[11rem]">
          <IconTri color="fill-red" />
          <div class="font-barlow-cond text-num font-bold opacity-30">
            {{ num < 10 ? "0" + num : num }}
          </div>
        </div>

        <!-- text contents -->
        <div class="max-w-[60rem]">
          <h3
            class="text-md-mob mb-5 font-helvb leading-sm-md s:text-md"
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
          class="slide-nav absolute bottom-0 left-0 hidden w-[21rem] bg-[url(/public/ui/peak.png)] bg-contain bg-bottom bg-no-repeat s:block"
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
      <div class="right w-full s:w-1/2 max-s:order-1">
        <div
          class="image rounded-base-mob relative flex aspect-[1.0675] w-full items-center justify-center overflow-hidden bg-skyblue s:rounded-base s:p-[11.5rem]"
        >
          <UICloud type="2" class="-left-[16rem] top-[44rem]" />
          <UICloud type="2" class="-top-[25rem] left-[18rem]" />

          <div
            class="image-ph relative h-full w-full max-s:p-side-mob [&>div]:h-full [&_img]:h-full [&_img]:w-full [&_img]:object-contain"
          >
            <DatocmsImage
              v-if="data.image"
              :data="data.image.responsiveImage"
            />
          </div>
        </div>
      </div>
    </div>

    <UIGradientBot
      v-if="num > 1"
      :theme="theme"
      class="absolute -top-[6.2rem] left-0"
    />

    <div
      class="cover pointer-events-none absolute left-0 top-0 z-5 h-full w-full bg-shadowblue opacity-0"
    ></div>
  </div>
</template>

<style scoped></style>
