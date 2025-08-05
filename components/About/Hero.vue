<script setup>
import gsap from "gsap";

const props = defineProps(["data", "stats"]);
const mobile = breakpoints.smallerOrEqual("tablet1");
const slider = ref(true);
const anims = ref(null);
const loaded = ref(false);
const main = ref(null);
const isScrolling = ref(false);
let scrollTimeout;
let ctx;

onMounted(() => {
  if (!mobile.value && props.stats.length <= 3) {
    slider.value = false;
  } else {
    slider.value = true;
  }

  // prevent slider drag if scrolling
  if (isTouchDevice()) {
    isScrolling.value = true;
    useEventListener(window, "scroll", (e) => {
      isScrolling.value = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling.value = false;
      }, 100);
    });
  }

  ctx = gsap.context((self) => {
    // parallax clouds
    const clouds = self.selector(".cloud");
    const cloudY = [60, 40, 30, 80];
    cloudParallax(main.value.$el, null, clouds, cloudY);

    // animate items into place on scroll to section
    if (!mobile.value) {
      setTimeout(() => {
        const items = anims.value.querySelectorAll(".anim-item");
        animIntoView(items, anims.value, 0.2, "top 90%");
      }, 200);
    }
  }, main.value.$el);

  setTimeout(() => {
    loaded.value = true;
  }, 200);
});

onUnmounted(() => {
  ctx.revert();
});

let duplicated = [];
if (props.stats.length > 5) {
  duplicated = props.stats;
} else {
  duplicated = [...props.stats, ...props.stats];
}

watch(mobile, () => {
  if (!mobile.value && props.stats.length <= 3) {
    slider.value = false;
  } else {
    slider.value = true;
  }
});
</script>

<template>
  <Section
    :hero="true"
    side="none"
    class="bg-skyblue pb-[16rem] text-center s:pb-section-bot-lg max-s:pt-hero-mob-lg"
    :anim="true"
    ref="main"
  >
    <!-- bg elements -->
    <UICloud
      type="1"
      class="-left-[11.5rem] top-[26.5rem]"
      :flip="true"
      :anim="true"
      :speed="65"
      :num="1"
    />
    <UICloud
      type="2"
      class="-left-[25rem] top-0"
      :anim="true"
      :speed="75"
      :num="2"
    />
    <UICloud
      type="2"
      class="left-[22.1rem] top-[43.5rem]"
      :anim="true"
      :speed="60"
      :rot="-10"
      :width="91"
      :num="3"
    />
    <UICloud
      type="3"
      class="left-[64rem] top-[45.7rem]"
      :anim="true"
      :speed="50"
      :num="4"
    />

    <SectionHeaderBig
      align="center"
      :data="{ headline: data }"
      class="px-side-mob s:px-side"
      anim="auto"
    />

    <!-- slider -->
    <template v-if="slider || mobile">
      <Carousel
        class="slider-wrap mt-[10rem] -rotate-[15deg] s:mt-[22.5rem] s:!h-[50rem]"
        :class="[
          slider ? 's:ml-[5.65rem]' : 'justify-center s:ml-[3.5rem]',
          isScrolling ? '!pointer-events-none' : '',
        ]"
        :drag="slider && true"
        :center="slider && true"
        :start="slider && 1"
      >
        <div
          v-for="stat in duplicated"
          class="item h-[19rem] shrink-0 px-[1.5rem] s:px-[4.2rem]"
        >
          <div
            class="z-1 h-full w-[32rem] rotate-[15deg] rounded-base-mob bg-white p-[2rem] text-left s:h-[27.7rem] s:w-[40rem] s:rounded-base s:p-[3.2rem] s:pt-[3.75rem]"
          >
            <IconTri color="fill-red" class="mb-[2.4rem]" />
            <h3
              class="font-barlow-cond text-xl-mob leading-xl -tracking-sm s:text-xl"
            >
              {{ stat.figure }}
            </h3>
            <p class="mt-[2.8rem] text-body-sm-mob s:text-body-sm">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </Carousel>
    </template>

    <!-- static buckets if 3 or less stats -->
    <template v-else>
      <div
        ref="anims"
        class="anim-wrap mb-[6rem] mt-[37.5rem] flex flex-wrap justify-center gap-[8rem]"
      >
        <div
          v-for="(stat, i) in stats"
          class="anim-item z-1 h-full w-[35.2rem] rounded-base-mob bg-white p-[2rem] text-left s:h-[27.7rem] s:w-[40rem] s:rounded-base s:p-[3.2rem] s:pt-[3.75rem]"
          :style="`margin-top:-${13 * i}rem`"
        >
          <IconTri color="fill-red" class="mb-[2.4rem]" />
          <h3
            class="font-barlow-cond text-xl-mob leading-xl -tracking-sm s:text-xl"
          >
            {{ stat.figure }}
          </h3>
          <p class="mt-[2.8rem] text-body-sm-mob s:text-body-sm">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </template>

    <!-- cover image for fade in -->
    <LoadCover :loaded="loaded" />
  </Section>
</template>

<style scoped></style>
