<script setup>
const props = defineProps(["layout", "data"]);
const active = ref(0);
const mobile = breakpoints.smallerOrEqual("tablet1");
const main = ref(null);
const carouselRef = ref(null);
const total = props.data.slides.length;
const slides = props.data.slides.reverse();

const handleSlide = (dir) => {
  if (dir == "left") {
    active.value--;
    if (active.value < 0) {
      active.value = total - 1;
    }
    carouselRef.value?.next();
  } else {
    active.value++;
    if (active.value > total - 1) {
      active.value = 0;
    }
    carouselRef.value?.back();
  }
  stopSlideshow();
};

// slideshow
const speed = 5;
const pageInactive = useState("pageInactive");
const progressBar = ref(null);
const progressBarMobile = ref(null);
let slideshow;

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

const next = () => {
  mobile.value ? progressBarMobile.value?.next() : progressBar.value?.next();
  active.value++;
  if (active.value > total - 1) {
    active.value = 0;
  }
  carouselRef.value?.back();
};

const slideTimer = () => {
  slideshow = setInterval(() => {
    if (!pageInactive.value) {
      next();
    }
  }, speed * 1000);
};

onMounted(() => {
  carouselRef.value?.goto(total - 1);
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
    class="pb-section-bot-mob pt-[12rem] s:pb-section-bot"
    :class="layout == 'img-rt' ? 'bg-jaffa' : 'bg-skyblue'"
    side="lg"
  >
    <!-- header -->
    <header
      class="relative flex h-[1.8rem] justify-between"
      :class="
        layout == 'img-rt' ? '[&_.eyebrow]:bg-jaffa' : '[&_.eyebrow]:bg-skyblue'
      "
    >
      <LineFull class="top-1/2" />
      <div
        class="eyebrow relative z-1 bg-jaffa px-5 text-body-sm-mob s:text-body-sm"
      >
        {{ data.header.eyebrow }}
      </div>
      <div class="eyebrow relative z-1 -translate-y-1 bg-jaffa px-5">
        <IconEyebrow color="fill-black" />
      </div>
    </header>

    <!-- slides -->
    <div
      ref="main"
      class="mt-[5rem] flex flex-col justify-between overflow-hidden rounded-base-mob bg-shadowblue s:mt-[10rem] s:flex-row s:rounded-base"
    >
      <!-- text -->
      <div
        class="text relative w-full px-side-mob pb-[5rem] pt-[3.5rem] text-white s:w-1/2 s:px-[5rem] s:pb-[16rem] s:pt-[11.5rem] max-s:order-1"
        :class="layout == 'img-rt' ? 'order-1' : 'order-2'"
      >
        <div class="max-w-[575px] space-y-7">
          <h2
            class="font-helvb text-md-mob leading-[1.09] s:text-md"
            v-html="formatText(data.header.headline)"
          ></h2>
          <p v-html="formatText(data.header.intro)"></p>

          <!-- cta buttons -->
          <CtaGroup
            v-if="data.header.cta"
            :data="data.header.cta.buttons"
            :align="align"
            :theme="theme"
            class="pt-6"
          />
        </div>

        <!-- controls -->
        <div
          class="absolute bottom-[8rem] left-0 hidden h-[3.2rem] w-full items-center px-[5rem] s:flex"
        >
          <div class="relative h-full w-[23.4rem]">
            <UISlideArrow
              dir="left"
              :color="layout == 'img-rt' ? 'red' : 'blue'"
              @click="handleSlide('left')"
            />
          </div>
          <div
            class="count px-side font-barlow-cond"
            :class="layout == 'img-rt' ? 'text-red' : 'text-lightblue'"
          >
            <span class="inline-block w-[3rem] text-center">
              {{ active + 1 }}/{{ total }}</span
            >
          </div>
          <div class="relative h-full w-[23.4rem]">
            <UISlideArrow
              dir="right"
              @click="handleSlide('right')"
              :color="layout == 'img-rt' ? 'red' : 'blue'"
              :speed="speed"
              ref="progressBar"
            />
          </div>
        </div>
      </div>

      <!-- image -->
      <div
        class="image has-break w-full overflow-hidden rounded-base-mob bg-cover p-[1.4rem] s:h-auto s:min-h-[72.6rem] s:w-[72rem] s:rounded-base max-s:order-2"
        :class="
          layout == 'img-rt'
            ? 'order-2 bg-[url(/ui/mt-red@2x.jpg)]'
            : 'order-1 bg-[url(/ui/mt-blue@2x.jpg)]'
        "
      >
        <Carousel
          :drag="false"
          class="h-full -rotate-[15deg]"
          ref="carouselRef"
        >
          <div
            v-for="slide in slides"
            class="item flex shrink-0 flex-col justify-center px-side-mob s:w-[72rem] s:px-[13rem]"
          >
            <div class="rotate-[15deg]">
              <div
                class="flex flex-col items-center rounded-base-mob bg-jaffa p-[3.2rem] text-center text-body-sm-mob leading-sm s:rounded-base s:text-body-sm"
              >
                <div v-if="slide.icon" class="icon mb-[3rem] size-[12.2rem]">
                  <img :src="slide.icon.url" alt="" />
                </div>
                <h3
                  class="mb-[4.25rem] font-barlow-cond text-h5 uppercase leading-base"
                  v-html="formatText(slide.headline)"
                ></h3>
                <p v-html="formatText(slide.description)"></p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>

    <!-- mobile controls -->
    <div
      class="mt-12 flex h-[3.2rem] w-full items-center justify-center s:hidden"
    >
      <div class="relative h-full w-[11rem] shrink-0 s:w-[23.4rem]">
        <UISlideArrow
          dir="left"
          :color="red"
          class="cursor-pointer"
          @click="handleSlide('left')"
        />
      </div>
      <div class="count px-side-mob font-barlow-cond text-red s:px-side">
        <span class="inline-block w-[3rem] text-center">
          {{ active + 1 }}/{{ total }}
        </span>
      </div>
      <div class="relative h-full w-[11rem] shrink-0 s:w-[23.4rem]">
        <UISlideArrow
          dir="right"
          :color="red"
          class="cursor-pointer"
          @click="handleSlide('right')"
          :speed="speed"
          ref="progressBarMobile"
        />
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
