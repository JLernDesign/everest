<script setup>
import gsap from "gsap";
import { useScroll } from "@vueuse/core";

const props = defineProps(["menu", "data", "banner"]);
const scrolled = ref(false);
const sticky = ref(true);
const header = ref(null);
const logo = ref(null);
const searchBar = ref(null);
const theme = useState("theme");
const loaded = ref(false);
const { y, directions } = useScroll(window);
const mobile = breakpoints.smallerOrEqual("tablet1");
const sp = 0.75;
const easer = "power3.out";
let bannerGap = 0;
props.banner && !mobile.value ? (bannerGap = "1rem") : null;

onMounted(() => {
  setTimeout(() => {
    loaded.value = true;
    gsap.fromTo(
      header.value,
      { y: -20 },
      {
        duration: 0.75,
        opacity: 1,
        y: () => bannerGap,
        ease: "power3.out",
      },
    );
  }, 200);

  // sticky nav
  useEventListener(window, "scroll", () => {
    setSticky();
  });
});

const setSticky = () => {
  // shrink header on scroll start
  if (window.scrollY > 0) {
    if (!scrolled.value && !mobile.value) {
      smallHeader();
    }
    if (mobile.value) {
      const menu = document.querySelector(".mobile-menu");
      gsap.killTweensOf(menu);
      gsap.to(menu, { duration: 0.75, y: 0, ease: easer });
    }
  } else {
    if (scrolled.value) {
      fullHeader();
    }
    if (mobile.value) {
      const menu = document.querySelector(".mobile-menu");
      gsap.killTweensOf(menu);
      gsap.to(menu, { duration: 0.5, y: "3.6rem", ease: easer });
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
      if (sticky.value && !mobile.value) {
        hideSticky();
      }
    }
  }
};

const smallHeader = () => {
  scrolled.value = true;
  sticky.value = true;
  logo.value.setSticky();

  // header
  gsap.to(header.value, { duration: sp, y: 0, ease: easer });

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
  //gsap.to(lang, { duration: 0.3, autoAlpha: 0, ease: "none" });
};

const fullHeader = () => {
  scrolled.value = false;
  sticky.value = false;
  logo.value.unsetSticky();

  // header
  gsap.to(header.value, {
    duration: 0.5,
    y: () => bannerGap,
    ease: "power3.out",
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
    y: 0,
    ease: easer,
  });
};

const hideSticky = () => {
  sticky.value = false;
  const h = header.value.scrollHeight;

  gsap.to(header.value, {
    duration: 0.75,
    y: -h,
    ease: "power3.inOut",
  });
};

// check for mobile to adjust banner gap
watch(mobile, () => {
  mobile.value ? (bannerGap = 0) : (bannerGap = "1rem");
  if (!scrolled.value) {
    gsap.set(header.value, { y: bannerGap });
  }
});
</script>

<template>
  <header
    class="absolute z-20 h-[12rem] w-full opacity-0 s:fixed"
    :class="[theme == 'dark' && !scrolled ? 'text-white' : null]"
    ref="header"
    data-datocms-noindex
  >
    <!-- logo -->
    <LogoAnim ref="logo" :speed="sp" :easer="easer" :theme="theme" />

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
    <div
      class="cta-wrap absolute right-[4.5rem] top-[4.75rem] flex items-center justify-end space-x-8 pr-side pt-10 s:right-0 s:top-[3.4rem]"
    >
      <button
        class="search-btn relative max-s:-mt-1 [&_.icon]:hover:fill-red"
        @click="searchBar.openSearch"
      >
        <span
          class="hit absolute left-1/2 top-1/2 size-[200%] -translate-x-1/2 -translate-y-1/2"
        ></span>
        <IconSearch :color="theme == 'dark' ? 'fill-white' : 'fill-black'" />
      </button>

      <!-- <Language :theme="theme" /> -->

      <div class="hidden s:block">
        <CtaGroup
          v-if="data?.headerCta"
          :data="data.headerCta.buttons"
          :align="left"
          theme="dark"
          :class="scrolled && 'btn-shadow'"
        />
      </div>
    </div>
  </header>

  <!-- mobile menu -->
  <Menu :data="menu.main" :sticky="sticky" data-datocms-noindex />

  <!-- search -->
  <SearchBar ref="searchBar" data-datocms-noindex />
</template>

<style scoped></style>
