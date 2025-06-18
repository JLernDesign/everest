<script setup>
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["theme", "nav", "data", "num", "template"]);
</script>

<template>
  <div
    class="overview-card dark relative w-full border-b border-grayline bg-jaffa px-side-mob py-[18rem] s:px-[20rem]"
  >
    <!-- number -->
    <div class="num absolute left-0 top-[11rem] mb-[11rem] pl-side">
      <IconTri color="fill-red" />
      <div class="font-barlow-cond text-num font-bold opacity-30">
        {{ num < 10 ? "0" + num : num }}
      </div>
    </div>

    <div class="content relative z-1 flex justify-between">
      <div
        class="left flex w-1/2 items-center"
        :class="num % 2 == 0 ? 'order-2 justify-end' : 'order-1'"
      >
        <!-- text contents -->
        <div class="w-full max-w-[52.5rem]">
          <h3
            class="mb-5 font-helvb text-md leading-sm-md"
            v-html="formatText(data.headline)"
          ></h3>
          <span
            class="bullets block max-w-[48rem] space-y-16 [&_ul]:space-y-4"
            v-html="removeWidows(data.body)"
          ></span>

          <!-- bullets -->
          <div
            v-if="data.bullets"
            class="bullets mt-8 [&_.bullet:not(:first-child)]:border-t-transparent"
          >
            <div
              v-for="(bullet, i) in data.bullets"
              class="bullet border-1 border-grayline px-[2.5rem] py-5"
              :class="[
                i == 0 &&
                  'first bg-jaffaltfade rounded-tl-base rounded-tr-base pt-12 [&_h4]:text-red',
                i == data.bullets.length - 1 &&
                  'last rounded-bl-base rounded-br-base',
              ]"
            >
              <h4
                class="cursor-pointer font-helvb text-body-sm leading-base transition-colors duration-300 hover:text-red"
              >
                {{ bullet.title }}
              </h4>
              <div
                class="bullet-wrap relative h-0 overflow-hidden"
                :class="i == 0 && 'h-auto'"
              >
                <p class="pb-6 pt-4 text-body-sm leading-body">
                  {{ bullet.text }}
                </p>
              </div>
            </div>
          </div>

          <!-- stats -->
          <div v-if="data.stats" class="stats mt-8 flex">
            <div v-for="item in data.stats.stats" class="stat w-1/2 space-y-5">
              <h3 class="font-barlow-cond text-xl font-bold leading-xl">
                {{ item.figure }}
              </h3>
              <p class="text-body-xsm">{{ item.label }}</p>
            </div>
          </div>

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
      <div class="right w-1/2" :class="num % 2 == 0 ? 'order-1' : 'order-2'">
        <div
          class="image relative flex aspect-[1.0675] w-full items-center justify-center overflow-hidden rounded-base bg-skyblue p-side"
        >
          <div
            v-if="data.bgImage"
            class="bg-image absolute inset-0 z-0 h-full w-full"
          >
            <DatocmsImage
              v-if="data.bgImage"
              :data="data.bgImage.responsiveImage"
            />
          </div>

          <!-- clouds -->
          <template v-else>
            <UICloud type="2" class="-left-[16rem] top-[44rem]" />
            <UICloud type="2" class="-top-[25rem] left-[18rem]" />
          </template>

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
