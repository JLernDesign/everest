<script setup>
import gsap from "gsap";
const props = defineProps(["data", "items"]);
const mobile = breakpoints.smallerOrEqual("tablet1");
const slider = ref(true);
const anims = ref(null);
const isScrolling = ref(false);
let scrollTimeout;
let ctx;

onMounted(() => {
  if (!mobile.value && props.items.length <= 3) {
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

  // animate items into place on scroll to section
  ctx = gsap.context((self) => {
    setTimeout(() => {
      const items = anims.value.querySelectorAll(".anim-item");
      animIntoView(items, anims.value, 0.2, "top bottom");
    }, 1000);
  }, anims.value);
});

onUnmounted(() => {
  ctx.revert();
});

let duplicated = [];
if (props.items.length > 5) {
  duplicated = props.items;
} else {
  duplicated = [...props.items, ...props.items];
}

watch(mobile, () => {
  if (!mobile.value && props.items.length <= 3) {
    slider.value = false;
  } else {
    slider.value = true;
  }
});
</script>

<template>
  <Section
    :hero="true"
    class="pb-section-bot-mob s:pb-section-bot-lg"
    theme="dark"
  >
    <UITexture />

    <SectionHeader
      class="pt-[4rem]"
      align="center"
      :hero="true"
      :data="data"
      :anim="true"
    />

    <!-- slider -->
    <template v-if="slider || mobile">
      <Carousel
        class="slider-wrap mt-[10rem] -rotate-[15deg] s:mt-[15.5rem] s:!h-[40rem] max-s:!h-[30rem]"
        :class="[
          slider
            ? 'ml-[1.5rem] s:ml-[5.65rem]'
            : 'justify-center s:ml-[3.5rem]',
          isScrolling ? '!pointer-events-none' : '',
        ]"
        :drag="slider && true"
        :center="slider && true"
        :start="slider && 1"
      >
        <div
          v-for="item in duplicated"
          class="item shrink-0 px-[1.8rem] s:px-[4.2rem]"
        >
          <WhyClientsSlide :data="item" class="rotate-[15deg]" />
        </div>
      </Carousel>
    </template>

    <!-- static buckets if 3 or less items -->
    <template v-else>
      <div
        class="mb-[13rem] mt-[24.5rem] flex flex-wrap justify-center gap-[6rem]"
        ref="anims"
      >
        <WhyClientsSlide
          v-for="(item, i) in items"
          :data="item"
          :style="`margin-top:-${9.5 * i}rem`"
          class="anim-item"
        />
      </div>
    </template>
  </Section>
</template>

<style scoped></style>
