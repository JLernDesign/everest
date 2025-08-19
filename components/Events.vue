<script setup>
import gsap from "gsap";
import { Image as DatocmsImage } from "vue-datocms";
const props = defineProps(["data"]);
const main = ref(null);
let hover_images = [];
let nextIndex = 0;

const showImage = (e) => {
  const imageInner = main.value.querySelector(".image-inner");
  gsap.killTweensOf(imageInner);
  gsap.fromTo(
    imageInner,
    {
      opacity: 0,
      scale: 0.8,
    },
    {
      opacity: 1,
      duration: 0.75,
      scale: 1,
      delay: 0.2,
      ease: "elastic.out(3,3)",
    },
  );
};

const hideImage = () => {
  const imageInner = main.value.querySelector(".image-inner");
  gsap.killTweensOf(imageInner);
  gsap.to(imageInner, {
    opacity: 0,
    scale: 0.8,
    duration: 0.35,
    ease: "back.in",
    onComplete: () => {
      // reset images
      gsap.set(hover_images, {
        clipPath: "inset(0 100% 0 0)",
      });
    },
  });
};

const handleMouseEnter = (e) => {
  // get the centered position of the item in the list
  const top = e.target.offsetTop;
  const h = e.target.offsetHeight;
  const ypos = top + h / 2;

  // move the hover image to the centered position
  const hoverImage = main.value.querySelector(".hover-image");
  gsap.killTweensOf(hoverImage);
  gsap.to(hoverImage, {
    y: ypos,
    duration: 0.75,
    ease: "power3.out",
  });

  // show the image
  const id = e.target.dataset.id;
  gsap.set(hover_images[id], {
    zIndex: nextIndex++,
  });
  gsap.fromTo(
    hover_images[id],
    {
      clipPath: "inset(0 100% 0 0)",
    },
    {
      duration: 0.75,
      clipPath: "inset(0 0% 0 0)",
      ease: "power3.inOut",
    },
  );
};

const getDate = (item) => {
  let startDate = useDateFormat(item.startDate, "MM/DD/YY");
  let endDate = useDateFormat(item.endDate, "MM/DD/YY");
  if (item.endDate) {
    return startDate.value + " - <br class='max-s:hidden' />" + endDate.value;
  }
  return startDate.value;
};

onMounted(() => {
  hover_images = main.value.querySelectorAll(".image-item");
  gsap.set(hover_images, {
    clipPath: "inset(0 100% 0 0)",
  });
});
</script>

<template>
  <Section class="bg-jaffa pb-section-bot-mob s:pb-section-bot">
    <SectionHeader :data="data.header" />

    <!-- events list -->
    <div
      class="relative mx-auto mt-12 flex max-w-content flex-col s:mt-[10rem] s:flex s:flex-row"
      ref="main"
      @mouseenter="showImage"
      @mouseleave="hideImage"
    >
      <div class="w-full">
        <!-- headers -->
        <div
          class="hidden border-b-1 border-grayline px-side-mob pb-[2.5rem] font-barlow text-body-xsm-mob uppercase s:flex s:px-side s:text-body-xsm [&_span]:opacity-40"
        >
          <span class="w-[24.7rem]">Date</span>
          <span class="w-[26.4rem]">Location</span>
          <span class="w-[64.5rem]">Event/Webinar Name</span>
        </div>

        <!-- list items -->
        <div
          v-for="(item, i) in data.events"
          :key="i"
          :data-id="i"
          @mouseenter="handleMouseEnter"
          class="item group relative border-b-1 border-grayline py-[3rem] text-body-sm-mob leading-sm s:px-side s:py-[4rem] s:text-body-sm"
        >
          <div class="relative s:flex">
            <div
              class="text-body-xsm s:w-[24.7rem]"
              v-html="getDate(item)"
            ></div>
            <div class="text-body-xsm s:w-[26.4rem] max-s:mt-1">
              {{ item.location }}
            </div>
            <div class="s:w-[64.5rem] max-s:mt-6">
              <a
                v-if="item.link"
                :href="item.link"
                target="_blank"
                class="ul single relative font-helvh max-s:underline"
                >{{ item.title }}</a
              >
              <div v-else class="font-helvh">{{ item.title }}</div>
              <p v-if="item.description" class="mt-2">{{ item.description }}</p>
            </div>
          </div>

          <!-- hover image -->
          <!-- <div
            class="pointer-events-none dato-image absolute right-0 top-1/2 hidden h-[21.5rem] w-[28.5rem] -translate-y-1/2 s:block [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
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
          </div> -->
        </div>
      </div>

      <!-- hover image -->
      <div
        class="hover-image dato-image pointer-events-none absolute right-0 top-0 hidden h-[21.5rem] w-[28.5rem] s:block [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
      >
        <div
          class="image-inner absolute h-full w-full -translate-y-1/2 overflow-hidden rounded-base opacity-0"
        >
          <div
            v-for="(item, i) in data.events"
            :key="i"
            :data-id="i"
            class="image-item absolute h-full w-full"
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
  </Section>
</template>

<style scoped></style>
