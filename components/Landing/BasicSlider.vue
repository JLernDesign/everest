<script setup>
import gsap from "gsap";
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["data"]);
const active = ref(0);

// if more than 3 items, init slider
let slider = false;
const total = props.data.imageSlides.length;
total > 2 ? (slider = true) : null;

// carousel ref and navigation
const carouselRef = ref(null);

const handlePrev = () => {
  active.value--;
  if (active.value < 0) {
    active.value = total - 1;
  }
  carouselRef.value?.back();
};

const handleNext = () => {
  active.value++;
  if (active.value > total - 1) {
    active.value = 0;
  }
  carouselRef.value?.next();
};

const handleDragChange = (index) => {
  active.value = index;
};
</script>

<template>
  <Section class="pb-[5rem] s:pb-section-bot">
    <div
      class="relative mx-auto max-w-base overflow-hidden rounded-base bg-shadowblue py-[8.5rem]"
    >
      <SectionHeader :data="data.header" template="landing" theme="dark" />

      <!-- slider -->
      <div class="mt-12 s:mt-side">
        <Carousel
          ref="carouselRef"
          :drag="slider ? true : false"
          :center="slider ? true : false"
          :start="slider && 1"
          :class="!slider && 'justify-between'"
          :func="handleDragChange"
        >
          <div
            v-for="(item, i) in data.imageSlides"
            class="item max-w-[78.6rem] shrink-0 px-[2.9rem]"
          >
            <div
              class="w-full overflow-hidden rounded-base [&_div]:!h-full [&_div]:!max-w-none [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
            >
              <DatocmsImage :data="item.responsiveImage" />
            </div>
          </div>
        </Carousel>

        <!-- controls -->
        <div
          v-if="slider"
          class="mx-auto mt-side hidden w-full max-w-[150rem] justify-center px-[1rem] s:flex"
        >
          <div class="relative h-full w-[23.4rem]">
            <UISlideArrow
              dir="left"
              color="red"
              class="relative cursor-pointer"
              @click="handlePrev"
            />
          </div>
          <div class="count px-side font-barlow-cond text-red">
            <span class="inline-block w-[3rem] text-center">
              {{ active + 1 }}/{{ total }}</span
            >
          </div>
          <div class="relative h-full w-[23.4rem]">
            <UISlideArrow
              dir="right"
              color="red"
              class="relative cursor-pointer"
              @click="handleNext"
            />
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
