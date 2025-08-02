<script setup>
import gsap from "gsap";

const props = defineProps(["data"]);
const anims = ref(null);
/* const parallax = ref(null); */

// if more than 3 items, init slider
let slider = false;
const total = props.data.buckets.length;
total > 3 ? (slider = true) : null;

// set numbers for duplicates
let n = 0;
const getNum = () => {
  n++;
  n > total ? (n = 1) : null;
  return "0" + n;
};

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
    class="bg-shadowblue px-side-mob pb-[8.5rem] s:!pt-0 s:pb-section-bot-lg max-s:!pt-4"
  >
    <UIJagEdge color="fill-shadowblue" />

    <SectionHeader theme="dark" :data="data.header" />

    <!-- buckets -->
    <div class="mt-12 s:mt-[8rem] s:px-[13rem]" ref="anims">
      <div
        class="mx-auto w-full max-w-[150rem] overflow-hidden s:-mb-[12rem] s:pb-[12rem]"
      >
        <Carousel
          ref="carouselRef"
          :drag="slider ? true : false"
          :center="slider ? true : false"
          :start="slider && 1"
          :class="!slider && 'justify-between'"
          class="max-s:hidden"
        >
          <div
            v-for="(item, i) in data.buckets"
            class="item anim-item"
            :class="slider && 'px-[2.9rem]'"
          >
            <div
              class="bucket h-full w-[45.5rem] rounded-base-mob bg-shadowbluelt p-[3rem] s:rounded-base"
            >
              <IconTri color="fill-red" class="mb-4" />
              <div
                class="num -tracking-md mb-12 font-barlow-cond-semibold text-xxl-mob leading-xxl text-shadowblue s:text-xxl"
              >
                {{ "0" + (i + 1) }}
              </div>
              <h3
                class="mb-7 font-barlow-cond text-sm-mob leading-[.94] text-red s:text-sm"
              >
                {{ item.headline }}
              </h3>
              <p
                class="text-body-sm-mob leading-sm text-white s:text-body-sm"
                v-html="formatText(item.description)"
              ></p>
            </div>
          </div>
        </Carousel>

        <!-- mobile carousel -->
        <div class="space-y-[2.5rem] s:hidden">
          <div v-for="(item, i) in data.buckets">
            <div
              class="bucket h-full w-full rounded-base-mob bg-shadowbluelt p-side-mob s:rounded-base s:p-[3rem]"
            >
              <IconTri color="fill-red" class="mb-10 s:mb-4" />
              <div
                class="num -tracking-md mb-12 font-barlow-cond-semibold text-xxl-mob leading-xxl text-shadowblue s:text-xxl"
              >
                {{ "0" + (i + 1) }}
              </div>
              <h3
                class="mb-7 font-barlow-cond text-sm-mob leading-[.94] text-red s:text-sm"
              >
                {{ item.headline }}
              </h3>
              <p
                class="text-body-sm leading-sm text-white s:text-body-sm"
                v-html="formatText(item.description)"
              ></p>
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
            color="red"
            class="relative cursor-pointer"
            @click="handlePrev"
          />
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
  </Section>
</template>

<style scoped></style>
