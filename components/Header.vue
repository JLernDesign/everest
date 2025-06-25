<script setup>
import gsap from "gsap";
import { useScroll } from "@vueuse/core";

const props = defineProps(["menu", "data"]);
const scrolled = ref(false);
const sticky = ref(true);
const header = ref(null);
const logo = ref(null);
const logo_wrap = ref(null);
const theme = useState("theme");

const { y, directions } = useScroll(window);
const sp = 0.75;
const easer = "power3.out";
onMounted(() => {
  // sticky nav
  useEventListener(window, "scroll", () => {
    setSticky();
  });
});

const setSticky = () => {
  // shrink header on scroll start
  if (window.scrollY > 0) {
    if (!scrolled.value) {
      smallHeader();
    }
  } else {
    if (scrolled.value) {
      fullHeader();
    }
  }

  // activate show/hide once past screen height
  if (y.value > window.innerHeight) {
    // show sticky on scroll up
    if (directions.top) {
      if (!sticky.value) {
        dropSticky();
      }

      // hide sticky on scroll down
    } else {
      if (sticky.value) {
        hideSticky();
      }
    }
  }
};

const smallHeader = () => {
  scrolled.value = true;
  logo.value.setSticky();

  // logo
  gsap.to(logo_wrap.value.$el, {
    duration: sp,
    scale: 0.73,
    y: "-.8rem",
    ease: easer,
  });

  // nav
  const bg = qs(".navbg", header.value);
  const wrap = qs(".nav-wrap", header.value);
  gsap.killTweensOf(bg);
  gsap.fromTo(
    bg,
    { scaleX: 0.7 },
    { duration: 2, opacity: 1, scaleX: 1, ease: "expo.out" },
  );
  gsap.to(wrap, { duration: sp, y: "-2.9rem", ease: easer });

  // cta
  const cta = qs(".cta-wrap", header.value);
  const lang = qs(".lang", header.value);
  gsap.to(cta, { duration: sp, y: "-2.9rem", ease: easer });
  gsap.to(lang, { duration: 0.3, autoAlpha: 0, ease: "none" });
};

const fullHeader = () => {
  scrolled.value = false;
  logo.value.unsetSticky();

  gsap.set(header.value, { yPercent: 0 });

  // logo
  gsap.to(logo_wrap.value.$el, {
    duration: sp,
    scale: 1,
    y: "0rem",
    ease: easer,
  });

  // nav
  const bg = qs(".navbg", header.value);
  const wrap = qs(".nav-wrap", header.value);
  gsap.killTweensOf(bg);
  gsap.to(bg, { duration: 0.5, scaleX: 0.925, opacity: 0, ease: "power3.out" });
  gsap.to(wrap, { duration: sp, y: 0, ease: easer });

  // cta
  const cta = qs(".cta-wrap", header.value);
  const lang = qs(".lang", header.value);
  gsap.to(cta, { duration: sp, y: 0, ease: easer });
  gsap.to(lang, { duration: 0.3, autoAlpha: 1, ease: "none" });
};

const dropSticky = () => {
  sticky.value = true;

  gsap.to(header.value, {
    duration: 0.75,
    yPercent: 0,
    ease: easer,
  });
};

const hideSticky = () => {
  sticky.value = false;

  gsap.to(header.value, {
    duration: 0.75,
    yPercent: -100,
    ease: "power3.inOut",
  });
};
</script>

<template>
  <header
    class="absolute z-20 h-[12rem] w-full s:fixed"
    :class="theme == 'dark' && !scrolled ? 'text-white' : null"
    ref="header"
  >
    <!-- logo -->
    <div
      class="logo-main absolute z-5 pl-side-mob pt-[1.5rem] s:pl-side s:pt-[4.25rem]"
    >
      <NuxtLink
        to="/"
        class="block h-[5.3rem] w-[6.2rem] origin-top-left s:h-[8.1rem] s:w-[9.4rem]"
        ref="logo_wrap"
      >
        <IconLogo ref="logo" :theme="theme" />
      </NuxtLink>
    </div>

    <!-- nav -->
    <div class="nav-wrap hidden w-full justify-center pt-[6rem] s:grid">
      <div class="relative grid place-content-center px-[5rem] py-[1.25rem]">
        <div
          class="navbg absolute -top-[1px] left-0 h-full w-full rounded-btn border-1 border-jaffalt bg-jaffa opacity-0 shadow-nav"
        ></div>
        <Nav type="main" :data="menu.main" />
      </div>
    </div>

    <!-- cta / login -->
    <div class="cta-wrap absolute right-0 top-0 hidden pr-side pt-10 s:block">
      <div
        class="lang mb-[1.65rem] flex justify-end space-x-8 text-[1.3rem] uppercase"
      >
        <!-- language -->
        <!-- <a href="#" class="flex items-start">
          <span>EN</span
          ><span class="ml-2 mt-1 inline-block"
            ><IconChevron
              :color="
                theme == 'dark' ? 'stroke-white' : 'stroke-black'
              " /></span
        ></a> -->

        <a v-if="data.signIn" :href="data.signIn" target="_blank">Sign In</a>
      </div>

      <CtaGroup
        v-if="data.headerCta"
        :data="data.headerCta.buttons"
        :align="left"
        theme="dark"
        :class="scrolled && 'btn-shadow'"
      />
    </div>
  </header>

  <!-- mobile menu -->
  <Menu :data="menu.main" :sticky="sticky" />
</template>

<style scoped></style>
