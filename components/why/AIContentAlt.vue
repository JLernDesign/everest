<script setup>
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["data", "color"]);
const main = ref(null);
const active = 0;

let items, wraps, topSpacers, botSpacers;

onMounted(() => {
  items = main.value.querySelectorAll(".slide");
  wraps = main.value.querySelectorAll(".wrap");
  topSpacers = main.value.querySelectorAll(".spacer.top");
  botSpacers = main.value.querySelectorAll(".spacer.bot");
  // open first wrap by default
  handleClick(0);
});

const handleClick = (i) => {
  // toggle expand on items
  toggleExpand(i, wraps);
  toggleExpand(i, topSpacers);
  toggleExpand(i, botSpacers);
};
</script>

<template>
  <div>
    <div
      class="relative flex flex-col border-t border-t-whiteline px-side-mob s:flex-row s:px-side-lg"
      ref="main"
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
        <!-- slides -->
        <div class="items divide-y-1 divide-whiteline">
          <div
            v-for="(slide, i) in data.slides"
            class="slide px-side-mob py-6 s:px-side"
          >
            <!-- add space above -->
            <div class="spacer top h-0 overflow-hidden">
              <div class="h-10"></div>
            </div>
            <button
              class="text-left font-barlow-cond text-h5 uppercase"
              :class="accentColor(slide)"
              @click="handleClick(i)"
            >
              {{ slide.title }}
            </button>
            <!-- expand content -->
            <div class="wrap relative h-0 overflow-hidden">
              <div
                class="pb-10 pt-4 text-body-sm-mob leading-sm s:text-body-sm"
                v-html="formatText(slide.description)"
              ></div>
            </div>
            <!-- add space below -->
            <div class="spacer bot h-0 overflow-hidden">
              <div class="h-[20rem]"></div>
            </div>
          </div>
        </div>
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
