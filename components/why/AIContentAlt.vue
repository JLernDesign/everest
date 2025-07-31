<script setup>
import { gsap } from "gsap";
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["data", "color"]);
const main = ref(null);
const active = 0;
const carouselRef = ref(null);
let items, wraps, topSpacers, botSpacers, ctx;

onMounted(() => {
  items = main.value.querySelectorAll(".slide");
  wraps = main.value.querySelectorAll(".wrap");
  topSpacers = main.value.querySelectorAll(".spacer.top");
  botSpacers = main.value.querySelectorAll(".spacer.bot");
  // open first wrap by default
  ctx = gsap.context((self) => {
    // animate items into place on scroll to section
    setTimeout(() => {
      //playInView(main.value, null, openFirst, 0, "top 50%");
      const image = self.selector(".anim-item");
      animIntoView(image, main.value, 0.2, "top 60%", openFirst);
    }, 200);
  }, main.value);
  //handleClick(0);
});

onUnmounted(() => {
  ctx.revert();
});

const handleClick = (i) => {
  // toggle expand on items
  toggleExpand(i, wraps, 1.25);
  toggleExpand(i, topSpacers, 1.25);
  toggleExpand(i, botSpacers, 1.25);

  // go to slide
  carouselRef.value.goto(i);
};

const open = false;
const openFirst = () => {
  if (!open) {
    setTimeout(() => {
      handleClick(0);
      open = true;
    }, 1000);
  }
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
            class="anim-item slide px-side-mob py-6 s:px-side"
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
              <div class="s:h-[20rem]"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- image -->
      <div
        class="w-full border-r border-r-whiteline p-8 s:w-[57%] max-s:order-1 max-s:border max-s:border-t-0 max-s:border-whiteline"
      >
        <div class="anim-item w-full overflow-hidden rounded-sm bg-skyblue">
          <Carousel :drag="false" :center="false" ref="carouselRef">
            <div
              v-for="slide in data.slides"
              class="item grid aspect-[1.32] w-[31.1rem] shrink-0 place-content-center p-4 s:w-[80rem] s:p-12 [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
            >
              <DatocmsImage
                v-if="slide.image"
                :data="slide.image.responsiveImage"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
