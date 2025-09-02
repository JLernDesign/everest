<script setup>
import gsap from "gsap";

const props = defineProps(["data", "loc"]);
const anims = ref(null);
const colors = ref(null);

// if more than 3 items, init slider
let slider = false;
const total = props.data.slides.length;
total > 3 ? (slider = true) : null;

// carousel ref and navigation
const carouselRef = ref(null);

const handlePrev = () => {
  carouselRef.value?.back();
};

const handleNext = () => {
  carouselRef.value?.next();
};

let ctx;

onMounted(() => {
  colors.value = gsap.utils.wrap(color_set);

  ctx = gsap.context((self) => {
    // animate items into place on scroll to section
    setTimeout(() => {
      const items = self.selector(".anim-item");
      animIntoView(items, anims.value, 0.2, "top 80%");
    }, 200);
  }, anims.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <Section
    side="none"
    class="results px-side-mob pb-section-bot-mob s:!pt-0 s:pb-[11rem]"
    :class="loc != 'lockup' && 'border-t border-t-grayline bg-jaffa'"
  >
    <!-- buckets -->
    <div class="s:mt-[10rem] s:px-[13rem]" ref="anims">
      <div
        class="mx-auto w-full max-w-[148rem] overflow-hidden s:-mb-[12rem] s:pb-[12rem]"
      >
        <!-- intro -->
        <h3 class="mb-12" :class="loc == 'lockup' && 'text-center'">
          {{ data.intro }}
        </h3>

        <Carousel
          ref="carouselRef"
          :drag="slider ? true : false"
          :center="slider ? true : false"
          :start="slider && 1"
          :class="!slider && 'justify-between'"
          class="max-s:hidden"
        >
          <div
            v-for="(item, i) in data.slides"
            class="item anim-item"
            :class="slider && 'px-[2.9rem]'"
          >
            <div
              class="bucket h-full w-[45.5rem] rounded-base-mob p-[3rem] s:rounded-base"
              :class="colors && colors(i)"
            >
              <IconTri color="fill-black" class="mb-12" />
              <h3
                class="mb-7 font-barlow-cond text-sm-mob leading-[.94] text-black s:text-sm"
              >
                {{ item.text }}
              </h3>
            </div>
          </div>
        </Carousel>

        <!-- mobile -->
        <div class="space-y-[2.5rem] s:hidden">
          <div v-for="(item, i) in data.slides">
            <div
              class="bucket h-full w-full rounded-base-mob p-side-mob s:rounded-base s:p-[3rem]"
              :class="colors && colors(i)"
            >
              <IconTri color="fill-black" class="mb-10 s:mb-4" />
              <h3
                class="mb-7 font-barlow-cond text-sm-mob leading-[.94] text-black s:text-sm"
              >
                {{ item.text }}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <!-- controls -->
      <div
        v-if="slider"
        class="mx-auto mt-[5.5rem] hidden w-full max-w-[150rem] justify-between px-[1rem] s:flex"
      >
        <div class="relative h-full w-[23.4rem]">
          <UISlideArrow
            dir="left"
            color="black"
            class="relative cursor-pointer"
            @click="handlePrev"
          />
        </div>

        <div class="relative h-full w-[23.4rem]">
          <UISlideArrow
            dir="right"
            color="black"
            class="relative cursor-pointer"
            @click="handleNext"
          />
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
