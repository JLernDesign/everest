<script setup>
import gsap from "gsap";
const props = defineProps(["theme", "data"]);

const mobile = breakpoints.smallerOrEqual("tablet1");
const main = ref(null);
const carouselRef = ref(null);
const slides = ref(null);
let items;
const amtY = 7.6;
const posY = [0, -7.6, -15.2];
const z = [3, 2, 1];
const order = [0, 1, 2];
const bgs = ["#ffffff", "#313944", "#262D36"];
const text_colors = [
  "#000000",
  "rgba(255,255,255,0.3)",
  "rgba(255,255,255,0.1)",
];

// Navigation handlers (mobile)
const handlePrev = () => {
  carouselRef.value?.back();
  stopSlideshow();
};

const handleNext = () => {
  carouselRef.value?.next();
  stopSlideshow();
};

onMounted(() => {
  // get slides
  items = qsa(".slide", main.value);

  // set initial positions
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

  // play slideshow on scroll to section
  setTimeout(() => {
    playInView(main.value, null, toggleSlideshow);
  }, 200);
});

const dur = 1;
const stag = 0.02;

const changeSlide = (dir) => {
  // move first slide down / last slide up
  let cur1 = dir == "next" ? 0 : 2;
  let next1 = dir == "next" ? 2 : 0;
  let startY = dir == "next" ? 36 : posY[cur1] + amtY;
  let endY = dir == "next" ? posY[next1] + amtY : 36;

  let item1 = items[order[cur1]];
  gsap.to(item1, {
    duration: dur / 2,
    y: startY + "rem",
    opacity: 1,
    rotate: dir == "next" ? 5 : -5,
    ease: "power3.in",
    onStart: () => {
      let title = qs(".title", item1);
      gsap.set(title, { color: text_colors[next1] });
    },
    onComplete: () => {
      // move current slide to back
      gsap.set(item1, {
        opacity: 1,
        display: "none",
        y: endY + "rem",
        zIndex: z[next1],
        backgroundColor: bgs[next1],
        rotate: dir == "next" ? 5 : -5,
      });
      gsap.to(item1, {
        display: "block",
        delay: stag * 3,
        duration: dir == "next" ? 1 : 0.75,
        y: posY[next1] + "rem",
        opacity: 1,
        rotate: 0,
        ease: dir == "next" ? "elastic.out(1,3)" : "elastic.out(1,2.5)",
      });
    },
  });

  // move middle slide to front or back
  let cur2 = 1;
  let next2 = dir == "next" ? 0 : 2;

  let item2 = items[order[cur2]];
  gsap.to(item2, {
    delay: stag,
    duration: dur,
    y: posY[next2] + "rem",
    backgroundColor: bgs[next2],
    zIndex: z[next2],
    ease: "power3.inOut",
    onStart: () => {
      let title = qs(".title", item2);
      gsap.set(title, { color: text_colors[next2] });
    },
  });

  // move first or last slide to middle
  let cur3 = dir == "next" ? 2 : 0;
  let next3 = 1;

  let item3 = items[order[cur3]];
  gsap.to(item3, {
    delay: stag * 2,
    duration: dur,
    y: posY[next3] + "rem",
    backgroundColor: bgs[next3],
    zIndex: z[next3],
    ease: "power3.inOut",
    onStart: () => {
      let title = qs(".title", item3);
      gsap.set(title, { color: text_colors[next3] });
    },
  });

  // update order
  setTimeout(() => {
    if (dir == "next") {
      order.push(order.shift());
    } else {
      order.unshift(order.pop());
    }
  }, 1000);
};

// slideshow
const speed = 5;
const pageInactive = useState("pageInactive");
const progressBarMobile = ref(null);
let slideshow;

const startSlideshow = () => {
  if (mobile.value) {
    progressBarMobile.value?.barProgress();
  } else {
    if (slides.value) {
      slides.value.forEach((slide) => {
        slide.barProgress();
      });
    }
  }
  slideTimer();
};

const stopSlideshow = () => {
  clearInterval(slideshow);
  if (mobile.value) {
    progressBarMobile.value?.stopProgress();
  } else {
    if (slides.value) {
      slides.value.forEach((slide) => {
        slide.stopProgress();
      });
    }
  }
};

const toggleSlideshow = (ev) => {
  ev == "enter" ? startSlideshow() : stopSlideshow();
};

const next = () => {
  if (mobile.value) {
    progressBarMobile.value?.next();
    carouselRef.value?.next();
  } else {
    changeSlide("next");
    if (slides.value) {
      slides.value.forEach((slide) => {
        slide.next();
      });
    }
  }
};

const slideTimer = () => {
  slideshow = setInterval(() => {
    if (!pageInactive.value) {
      next();
    }
  }, speed * 1000);
};

onUnmounted(() => {
  stopSlideshow();
});
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
        :stopSlideshow="stopSlideshow"
        :speed="speed"
        ref="slides"
      />
    </div>

    <!-- mobile slides -->
    <div
      class="slides-mobile relative left-1/2 w-screen -translate-x-1/2 s:hidden"
    >
      <Carousel
        ref="carouselRef"
        :drag="true"
        class="mt-[2rem]"
        @mousedown="stopSlideshow"
      >
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
        :speed="speed"
        ref="progressBarMobile"
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
