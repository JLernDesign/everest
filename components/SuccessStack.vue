<script setup>
import gsap from "gsap";
const props = defineProps(["theme", "data"]);

const main = ref(null);
const slide = ref(null);
const carouselRef = ref(null);
let items;
const amtY = 7.6;
const posY = [0, -7.6, -15.2];
const current = ref(0);
const z = [3, 2, 1];
const order = [0, 1, 2];
const bgs = ["#ffffff", "#313944", "#262D36"];
const text_colors = [
  "#000000",
  "rgba(255,255,255,0.3)",
  "rgba(255,255,255,0.1)",
];

// Navigation handlers
const handlePrev = () => {
  carouselRef.value?.back();
};

const handleNext = () => {
  carouselRef.value?.next();
};

onMounted(() => {
  items = qsa(".slide", main.value);
  //items.reverse();

  items.forEach((item, i) => {
    //let amt = amtY * (items.length - 1 - i) + "rem";
    gsap.set(item, { y: posY[i] + "rem", zIndex: z[i] });

    let title = qs(".title", item);

    // fully grayed
    if (i > 1) {
      gsap.set(item, { backgroundColor: "#262D36" });
      gsap.set(title, { color: text_colors[2] });
    }
    // partial grayed
    if (i == 1) {
      gsap.set(item, { backgroundColor: "#313944" });
      gsap.set(title, { color: text_colors[1] });
    }
  });
});

const changeSlide = (i, dir) => {
  console.log("changeSlide", i, dir);

  // move current slide down and fade out
  gsap.to(items[order[0]], {
    duration: 0.5,
    y: posY[0] + amtY + "rem",
    opacity: 0,
    ease: "power3.in",
    onComplete: () => {
      // move current slide to back
      gsap.fromTo(
        items[order[0]],
        { y: posY[2] - amtY + "rem", zIndex: z[2], backgroundColor: bgs[2] },
        {
          duration: 0.5,
          y: posY[2] + "rem",
          opacity: 1,
          ease: "power3.out",
        },
      );
    },
  });
  // change title color
  let title = qs(".title", items[order[0]]);
  gsap.set(title, { color: text_colors[2] });

  // move next slide to front
  gsap.to(items[order[1]], {
    duration: 1,
    y: posY[0] + "rem",
    backgroundColor: bgs[0],
    zIndex: z[0],
    ease: "power3.inOut",
    onStart: () => {
      let title = qs(".title", items[order[1]]);
      gsap.set(title, { color: text_colors[0] });
    },
  });

  // move last slide to middle
  gsap.to(items[order[2]], {
    duration: 1,
    y: posY[1] + "rem",
    backgroundColor: bgs[1],
    zIndex: z[1],
    ease: "power3.inOut",
    onStart: () => {
      let title = qs(".title", items[order[2]]);
      gsap.set(title, { color: text_colors[1] });
    },
  });

  // update order
  setTimeout(() => {
    order.push(order.shift());
  }, 1000);
};
</script>

<template>
  <Section
    :theme="theme"
    class="bg-skyblue pb-section-bot-mob pt-section-top-lg s:pb-section-bot"
  >
    <SectionHeader :theme="theme" :data="data.header" />

    <!-- slides -->
    <div
      class="slides relative top-[15.2rem] mx-auto mt-[5rem] hidden h-[51.5rem] w-[116rem] s:block max-s:w-full"
      ref="main"
    >
      <StackSlide
        v-for="(slide, i) in data.slides"
        :data="slide"
        :key="i"
        :num="i"
        :changeSlide="changeSlide"
      />
    </div>

    <!-- mobile slides -->
    <div
      class="slides-mobile relative left-1/2 w-screen -translate-x-1/2 s:hidden"
    >
      <Carousel ref="carouselRef" :drag="true" class="mt-[2rem]">
        <div
          class="item w-full shrink-0 px-side-mob"
          v-for="(slide, i) in data.slides"
          :key="i"
        >
          <StackSlide :data="slide" />
        </div>
      </Carousel>
    </div>

    <!-- mobile controls-->
    <div
      class="relative mt-[2.5rem] flex h-[3.2rem] w-full justify-between px-side-mob s:hidden"
    >
      <UISlideArrow
        v-if="data.slides.length > 1"
        dir="left"
        class="!w-[48%] cursor-pointer"
        @click="handlePrev"
      />
      <UISlideArrow
        v-if="data.slides.length > 1"
        dir="right"
        class="!w-[48%] cursor-pointer"
        @click="handleNext"
      />
    </div>

    <!-- cta buttons -->
    <CtaGroup
      v-if="data.cta"
      :data="data.cta.buttons"
      align="center"
      :theme="theme"
      class="relative z-2 mt-[4rem] s:mt-[6rem]"
    />
  </Section>
</template>

<style scoped></style>
