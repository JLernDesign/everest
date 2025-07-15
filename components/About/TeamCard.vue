<script setup>
import gsap from "gsap";
import { Image as DatocmsImage } from "vue-datocms";
const props = defineProps(["data"]);
const open = ref(false);
const itemRef = ref(null);

const openItem = () => {
  open.value = true;
  animateItemOpen();
};

const animateItemOpen = () => {
  if (!itemRef.value) return;

  // Get the item element
  const item = itemRef.value;

  // First, temporarily set height to auto to measure the natural height
  gsap.set(item, { height: "auto" });
  const targetHeight = item.scrollHeight;

  // Set initial state
  gsap.set(item, {
    height: 0,
    opacity: 0,
  });

  // Animate to the exact measured height
  gsap.to(item, {
    height: targetHeight,
    opacity: 1,
    duration: 0.75,
    ease: "power3.inOut",
    onComplete: () => {
      // Reset to auto height and overflow after animation
      gsap.set(item, {
        height: "auto",
      });
    },
  });
};

const closeItem = () => {
  if (!itemRef.value) return;

  const item = itemRef.value;
  open.value = false;

  // Animate to closed state
  gsap.to(item, {
    height: 0,
    opacity: 0,
    duration: 0.75,
    ease: "power3.inOut",
  });
};

defineExpose({ openItem, open, closeItem });
</script>

<template>
  <div
    class="relative rounded-base-mob transition-all duration-500 ease-out s:rounded-base"
    :class="
      open
        ? 'cursor-auto bg-white shadow-[4px_4px_20px_0px_rgba(0,0,0,0.03)]'
        : 'cursor-pointer hover:bg-[rgba(255,255,255,0.2)]'
    "
  >
    <!-- title -->
    <div
      class="title flex w-full flex-col border-b-1 border-b-grayline px-side-mob pb-[2rem] pt-[2.6rem] s:flex-row s:items-center s:justify-between s:px-[3rem] max-s:space-y-2"
    >
      <h3 class="s:w-[40%] max-s:mb-3">{{ data.name }}</h3>
      <p class="text-body-xsm-mob leading-sm s:w-[45%] s:text-body-xsm">
        {{ data.title }}
      </p>
      <a
        :href="data.linkedin"
        target="_blank"
        class="-mt-2 max-s:absolute max-s:right-[2rem] max-s:top-[2rem] [&_svg]:transition-colors [&_svg]:duration-500 hover:[&_svg]:fill-shadowblue"
      >
        <SocialLinkedin class="fill-red" />
      </a>
    </div>

    <!-- photo/quote -->
    <div ref="itemRef" class="item h-0 overflow-hidden">
      <div class="w-full p-side-mob s:space-y-[3rem] s:p-[3rem] s:pr-[15rem]">
        <div class="shrink-0 s:w-[35%]">
          <div
            class="w-[23.4rem] overflow-hidden rounded-base-mob s:rounded-base"
          >
            <DatocmsImage
              v-if="data.image"
              :data="data.image.responsiveImage"
            />
          </div>
        </div>
        <div
          v-if="data.bio"
          class="w-auto text-body-sm-mob leading-sm s:text-body-sm max-s:mt-12"
        >
          <span v-html="formatText(data.bio)"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
