<script setup>
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["data", "color"]);
const active = 0;
</script>

<template>
  <div>
    <div
      class="relative flex flex-col border-t border-t-whiteline px-side-mob s:flex-row s:px-side-lg"
    >
      <!-- side images -->
      <div
        v-for="n in 2"
        class="absolute top-0 hidden h-full w-[16rem] s:block"
        :class="n == 1 ? 'left-0' : 'right-0 -scale-x-100'"
      >
        <img
          src="/public/why/ai-side-blue1@2x.png"
          alt=""
          class="h-full w-full object-cover"
        />
      </div>

      <!-- text -->
      <div
        class="flex flex-col justify-between border-x border-x-whiteline s:w-[43%] max-s:order-2"
      >
        <div class="p-side-mob s:p-side">
          <h3
            class="mb-[1.5rem] font-barlow-cond text-h5 font-bold uppercase"
            :class="accentColor(data.slides[active])"
          >
            {{ data.slides[active].title }}
          </h3>
          <span
            class="text-body-sm-mob leading-sm s:text-body-sm"
            v-html="formatText(data.slides[active].description)"
          ></span>
        </div>

        <!-- slide nav -->
        <ul class="divide-y-1 divide-whiteline border-t border-t-whiteline">
          <template v-for="(slide, i) in data.slides">
            <li v-if="i > 0" class="px-side-mob py-6 s:px-side">
              <button
                class="text-left font-barlow-cond text-h5 font-bold uppercase"
                :class="accentColor(slide)"
              >
                {{ slide.title }}
              </button>
            </li>
          </template>
        </ul>
      </div>

      <!-- image -->
      <div
        class="w-full border-r border-r-whiteline p-8 s:w-[57%] max-s:order-1 max-s:border max-s:border-t-0 max-s:border-whiteline"
      >
        <div
          class="ph-image grid aspect-[1.32] place-content-center rounded-sm bg-skyblue p-12"
        >
          <DatocmsImage
            v-if="data.slides[active].image"
            :data="data.slides[active].image.responsiveImage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
