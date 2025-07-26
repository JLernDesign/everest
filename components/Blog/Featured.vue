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
  clearInterval(slideshow);
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
  progressBars.value?.stopProgress();
};

onUnmounted(() => {
  clearInterval(slideshow);
});

onMounted(() => {
  setTimeout(() => {
    progressBars.value.next();
    slideTimer();
  }, 200);
});
</script>

<template>
  <Section
    :side="false"
    class="border-t border-grayline s:!py-[5rem] max-s:pt-0"
  >
    <Carousel
      v-if="data?.featuredPosts"
      ref="carousel"
      @mousedown="stopSlideshow"
    >
      <div
        v-for="(item, i) in data.featuredPosts"
        class="item shrink-0 s:px-[1.6rem] max-s:w-full"
      >
        <BlogPostHeader :data="item" class="h-full" type="feature" />
      </div>
    </Carousel>

    <!-- nav -->
    <div class="mt-4 w-full text-center">
      <UIProgressBars
        ref="progressBars"
        :speed="speed"
        :total="data.featuredPosts.length"
        :gotoSlide="gotoSlide"
      />
    </div>
  </Section>
</template>
