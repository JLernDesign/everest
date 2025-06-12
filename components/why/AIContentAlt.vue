<script setup>
const props = defineProps(["data", "color"]);
const active = 0;
</script>

<template>
  <div>
    <div class="relative flex border-t border-t-whiteline px-side-lg">
      <!-- side images -->
      <div
        v-for="n in 2"
        class="absolute top-0 h-full w-[16rem]"
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
        class="flex w-[43%] flex-col justify-between border-x border-x-whiteline"
      >
        <div class="p-side">
          <span v-html="addLineBreaks(data.slides[active].description)"></span>
        </div>

        <!-- slide nav -->
        <ul class="divide-y-1 divide-whiteline border-t border-t-whiteline">
          <li v-for="(slide, i) in data.slides" class="px-side py-6">
            <button
              class="font-barlow-cond text-h5 font-bold uppercase"
              :class="accentColor(slide)"
            >
              {{ slide.title }}
            </button>
          </li>
        </ul>
      </div>

      <!-- image -->
      <div class="w-[57%] border-r border-r-whiteline p-8">
        <div
          class="ph-image grid aspect-[1.32] place-content-center rounded-sm bg-skyblue p-12"
        >
          <img
            v-if="data.slides[active].image"
            :src="data.slides[active].image.url"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
