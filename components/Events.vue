<script setup>
import gsap from "gsap";
import { Image as DatocmsImage } from "vue-datocms";
const props = defineProps(["data"]);

const handleMouseEnter = (e) => {
  const hoverImage = e.target.querySelector(".hover-image");
  gsap.killTweensOf(hoverImage);
  gsap.fromTo(
    hoverImage,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.75,
      ease: "power3.out",
    },
  );
};
const handleMouseLeave = (e) => {
  const hoverImage = e.target.querySelector(".hover-image");
  gsap.killTweensOf(hoverImage);
  gsap.to(hoverImage, {
    opacity: 0,
    duration: 0.25,
    ease: "power3.out",
  });
};

const getDate = (item) => {
  let startDate = useDateFormat(item.startDate, "MM/DD/YY");
  let endDate = useDateFormat(item.endDate, "MM/DD/YY");
  if (item.endDate) {
    return startDate.value + " - <br />" + endDate.value;
  }
  return startDate.value;
};
</script>

<template>
  <Section class="bg-jaffa">
    <SectionHeader :data="data.header" />

    <!--  -->
    <div class="mt-[10rem] flex-col s:flex s:flex-row">
      <div class="w-full">
        <!-- headers -->
        <div
          class="flex border-b-1 border-grayline px-side-mob pb-[2.5rem] font-barlow text-body-xsm-mob uppercase s:px-side s:text-body-xsm [&_span]:opacity-40"
        >
          <span class="w-[24.7rem]">Date</span>
          <span class="w-[26.4rem]">Location</span>
          <span class="w-[64.5rem]">Event/Webinar Name</span>
        </div>

        <!-- list items -->
        <div
          v-for="(item, i) in data.events"
          :key="i"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
          class="item group relative border-b-1 border-grayline px-side-mob py-[5rem] text-body-sm-mob leading-sm s:px-side s:text-body-sm"
        >
          <div class="relative flex">
            <span
              class="w-[24.7rem] text-body-xsm"
              v-html="getDate(item)"
            ></span>
            <span class="w-[26.4rem] text-body-xsm">{{ item.location }}</span>
            <span class="w-[64.5rem]">
              <a
                v-if="item.link"
                :href="item.link"
                target="_blank"
                class="ul single relative font-helvh after:bg-red"
                >{{ item.title }}</a
              >
              <span v-else class="font-helvh">{{ item.title }}</span>
              <p v-if="item.description" class="mt-6">{{ item.description }}</p>
            </span>
          </div>

          <!-- hover image -->
          <div
            class="pointer-events-none absolute right-0 top-1/2 hidden h-[21.5rem] w-[28.5rem] -translate-y-1/2 s:block [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
          >
            <div
              class="hover-image absolute h-full w-full overflow-hidden rounded-base opacity-0"
            >
              <DatocmsImage
                v-if="item.image"
                :data="item.image.responsiveImage"
                class="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
