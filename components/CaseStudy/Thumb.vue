<script setup>
import { gsap } from "gsap";
import { Image as DatocmsImage } from "vue-datocms";
const props = defineProps(["data"]);

const main = ref(null);

const hoverOn = () => {
  const photo = main.value.querySelector(".photo-wrap");
  gsap.to(main.value, {
    y: "-1rem",
    ease: "power3.out",
    duration: 0.5,
  });
};

const hoverOff = () => {
  const photo = main.value.querySelector(".photo-wrap");
  gsap.to(main.value, {
    y: "0rem",
    ease: "power3.out",
    duration: 0.5,
  });
};
</script>

<template>
  <div
    class="relative w-[59rem] rounded-base-mob bg-jaffalt p-[1.5rem] pb-[7.6rem] s:rounded-base"
    @mouseenter="hoverOn"
    @mouseleave="hoverOff"
    ref="main"
  >
    <div
      class="photo aspect-[1.57] overflow-hidden rounded-base-mob s:rounded-base [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
    >
      <DatocmsImage
        v-if="data.image"
        :data="data.image.responsiveImage"
        class="photo-wrap h-full w-full"
      />
    </div>
    <div class="p-[2rem]">
      <p>{{ data.headline }}</p>
    </div>

    <!-- arrow -->
    <div
      class="arrow absolute bottom-0 left-0 z-1 flex h-[7.6rem] w-full items-center border-t-1 border-grayline bg-[url('/casestudy/cs-thumb-lines@2x.png')] bg-cover px-[3.75rem]"
    >
      <IconArrow color="stroke-black" />
    </div>

    <NuxtLink
      :to="'/case-studies/' + data.slug"
      class="absolute left-0 top-0 z-2 block size-full"
    ></NuxtLink>
  </div>
</template>

<style scoped></style>
