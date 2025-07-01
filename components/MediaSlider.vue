<script setup>
const props = defineProps(["data"]);
const progressBars = ref(null);
const speed = 5;
const carousel = ref(null);
const pageInactive = useState("pageInactive");

const next = () => {
  progressBars.value.next();
  carousel.value.next();
};

const slideTimer = () => {
  setInterval(() => {
    //console.log("slideTimer");

    if (!pageInactive.value) {
      next();
    }
  }, speed * 1000);
};

onMounted(() => {
  setTimeout(() => {
    if (progressBars.value) {
      progressBars.value.next();
    }
    slideTimer();
  }, 200);
});
</script>

<template>
  <!-- thumb wrap -->
  <div
    class="relative aspect-[1.31] overflow-hidden rounded-base-mob s:w-[33.5rem] s:rounded-base"
  >
    <!-- slides -->
    <Carousel ref="carousel" :drag="false" class="h-full">
      <UIVideoThumb v-for="slide in data" :key="slide.id" :data="slide" />
    </Carousel>
  </div>

  <!-- nav -->
  <UIProgressBars ref="progressBars" :speed="speed" />
</template>

<style scoped></style>
