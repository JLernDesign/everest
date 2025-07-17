<script setup>
const props = defineProps(["data"]);
const progressBars = ref(null);
const speed = 5;
const carousel = ref(null);
const pageInactive = useState("pageInactive");
let slideshow;

const next = () => {
  progressBars.value.next();
  carousel.value.next();
};

const gotoSlide = (n) => {
  progressBars.value.next(n);
  carousel.value.goto(n - 1);
  stopSlideshow();
};

const slideTimer = () => {
  slideshow = setInterval(() => {
    if (!pageInactive.value) {
      next();
    }
  }, speed * 1000);
};

const stopSlideshow = () => {
  clearInterval(slideshow);
};

onMounted(() => {
  setTimeout(() => {
    if (progressBars.value) {
      progressBars.value.next();
    }
    slideTimer();
  }, 200);
});
onUnmounted(() => {
  stopSlideshow();
});
</script>

<template>
  <!-- thumb wrap -->
  <div
    class="relative aspect-[1.31] overflow-hidden rounded-base-mob s:w-[33.5rem] s:rounded-base"
  >
    <!-- slides -->
    <Carousel ref="carousel" :drag="false" class="h-full">
      <UIMediaThumb v-for="slide in data" :key="slide.id" :data="slide.post" />
    </Carousel>
  </div>

  <!-- nav -->
  <UIProgressBars
    v-if="data.length > 1"
    ref="progressBars"
    :speed="speed"
    :total="data.length"
    :gotoSlide="gotoSlide"
  />
</template>

<style scoped></style>
