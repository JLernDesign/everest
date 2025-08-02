<script setup>
const props = defineProps(["theme", "data"]);
const mobile = breakpoints.smallerOrEqual("tablet1");
const active = 0;
const carouselRef = ref(null);
const carouselRefRight = ref(null);
const carouselRefLeft = ref(null);
const main = ref(null);

// navigation handlers
const handlePrev = () => {
  carouselRef.value?.back();
  carouselRefRight.value?.back();
  carouselRefLeft.value?.back();
  stopSlideshow();
};

const handleNext = () => {
  carouselRef.value?.next();
  carouselRefRight.value?.next();
  carouselRefLeft.value?.next();
  stopSlideshow();
};

const startSlideshow = () => {
  mobile.value
    ? progressBarMobile.value?.barProgress()
    : progressBar.value?.barProgress();
  slideTimer();
};

const stopSlideshow = () => {
  clearInterval(slideshow);
  mobile.value
    ? progressBarMobile.value?.stopProgress()
    : progressBar.value?.stopProgress();
};

const toggleSlideshow = (ev) => {
  ev == "enter" ? startSlideshow() : stopSlideshow();
};

// slideshow
const speed = 5;
const pageInactive = useState("pageInactive");
const progressBar = ref(null);
const progressBarMobile = ref(null);
let slideshow;

const next = () => {
  mobile.value ? progressBarMobile.value?.next() : progressBar.value?.next();
  carouselRef.value?.next();
  carouselRefRight.value?.next();
  carouselRefLeft.value?.next();
};

const slideTimer = () => {
  slideshow = setInterval(() => {
    if (!pageInactive.value) {
      next();
    }
  }, speed * 1000);
};

onMounted(() => {
  setTimeout(() => {
    playInView(main.value, null, toggleSlideshow);
  }, 200);
});

onUnmounted(() => {
  stopSlideshow();
});
</script>

<template>
  <Section
    :theme="theme"
    class="bg-jaffa pb-section-bot-mob s:pb-section-bot"
    :class="data.jaggedEdge && 'mt-[23rem] !pt-16 s:mt-[26.8rem] s:!pt-8'"
  >
    <template v-if="data.jaggedEdge">
      <UIGlow
        class="transform-origin-left scale-60 -top-[18rem] h-[60rem] w-[116rem] s:-top-[35rem] s:h-[35rem] s:w-[116rem] s:scale-100 max-s:left-1/2 max-s:translate-x-[-50%] max-s:blur-big"
        src="/ui/callout-bot-gradient.svg"
      />
      <div
        class="gradient-cover absolute left-0 top-0 z-0 h-full w-full bg-jaffa"
      ></div>
      <UIJagEdge color="fill-jaffa" />
    </template>

    <SectionHeader :theme="theme" :data="data.header" />

    <!-- slide module -->
    <div
      class="max-w-content mx-auto mt-[3rem] flex s:mt-md"
      v-if="data.slides && data.slides.length > 0"
      :class="data.slides.length > 1 && 's:divide-x-1 s:divide-grayline'"
      ref="main"
    >
      <!-- left -->
      <div class="col lt hidden w-[27.5%] overflow-hidden s:block">
        <Carousel ref="carouselRefLeft" :start="2" :drag="false">
          <div
            v-for="slide in data.slides"
            class="item shrink-0 s:w-[47.5rem] s:px-[10rem]"
          >
            <div
              v-if="slide.photo"
              class="photo aspect-[1.57] w-full overflow-hidden rounded-base-mob s:rounded-base"
            >
              <!-- image -->
              <img
                :src="slide.photo.url"
                alt=""
                class="h-full w-full object-cover"
              />
            </div>
          </div>
        </Carousel>

        <!-- arrow -->
        <UISlideArrow
          v-if="data.slides.length > 1"
          dir="left"
          class="cursor-pointer px-[10rem]"
          @click="handlePrev"
        />
      </div>

      <!-- active slide (center) -->
      <div class="col main w-full s:w-[45%] s:overflow-hidden">
        <Carousel
          ref="carouselRef"
          class="relative max-s:-left-[2rem] max-s:w-screen"
          :drag="false"
        >
          <div
            v-for="slide in data.slides"
            class="item w-screen shrink-0 px-side-mob s:w-[77.2rem] s:px-[10rem]"
          >
            <div
              class="photo aspect-[1.57] w-full overflow-hidden rounded-base-mob s:rounded-base"
            >
              <img
                v-if="slide.photo"
                :src="slide.photo.url"
                class="h-full w-full object-cover"
                alt=""
              />
            </div>

            <!-- text details -->
            <div v-if="slide.caption" class="slide-text pt-[3.5rem]">
              <!-- caption -->
              <span
                v-html="slide.caption"
                class="space-y-[2.5rem] [&_a]:underline"
              ></span>

              <!-- link -->
              <a
                v-if="slide.link"
                :href="slide.link"
                target="_blank"
                class="mt-8 inline-block font-helvh text-body-sm underline hover:text-red"
                >Read More</a
              >
            </div>
          </div>
        </Carousel>
      </div>

      <!-- right -->
      <div class="col rt hidden w-[27.5%] overflow-hidden s:block">
        <Carousel ref="carouselRefRight" :start="1" :drag="false">
          <div
            v-for="slide in data.slides"
            class="item shrink-0 s:w-[47.5rem] s:px-[10rem]"
          >
            <div
              v-if="slide.photo"
              class="photo aspect-[1.57] w-full overflow-hidden rounded-base-mob s:rounded-base"
            >
              <!-- image -->
              <img
                :src="slide.photo.url"
                alt=""
                class="h-full w-full object-cover"
              />
            </div>
          </div>
        </Carousel>

        <!-- arrow -->
        <UISlideArrow
          v-if="data.slides.length > 1"
          dir="right"
          class="cursor-pointer px-[10rem]"
          @click="handleNext"
          :speed="speed"
          ref="progressBar"
        />
      </div>
    </div>

    <!-- mobile controls-->
    <div
      class="relative mt-[5.5rem] flex h-[3.2rem] w-full justify-between px-side-mob s:hidden"
    >
      <UISlideArrow
        v-if="data.slides.length > 1"
        dir="left"
        class="!w-[48%]"
        @click="handlePrev"
      />
      <UISlideArrow
        v-if="data.slides.length > 1"
        dir="right"
        class="!w-[48%]"
        @click="handleNext"
        :speed="speed"
        ref="progressBarMobile"
      />
    </div>
  </Section>
</template>

<style scoped></style>
