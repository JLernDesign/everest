<script setup>
import { gsap } from "gsap";
import { vOnClickOutside } from "@vueuse/components";

const open = ref(false);
const arrowDiamond = ref(null);
const main = ref(null);
const q = ref("");

function handleSearch() {
  navigateTo("/search?q=" + q.value);

  // close search
  closeSearch();
}

const openSearch = () => {
  open.value = true;
  gsap.fromTo(
    main.value,
    {
      display: "block",
      yPercent: -100,
    },
    {
      duration: 0.75,
      yPercent: -1,
      ease: "elastic.out(1.5,4)",
    },
  );

  setTimeout(() => {
    const input = document.getElementById("search-input");
    input.focus();
  }, 100);
};

const closeSearch = () => {
  open.value = false;
  gsap.to(main.value, {
    duration: 0.75,
    yPercent: -100,
    display: "none",
    ease: "elastic.inOut(1.5,3)",
  });
};

const handleClickOutside = () => {
  if (open.value) {
    closeSearch();
  }
};

defineExpose({
  openSearch,
  closeSearch,
});
</script>

<template>
  <div
    id="search-bar"
    class="search fixed right-0 top-0 z-[50] hidden w-full overflow-hidden max-s:px-side-mob"
    ref="main"
    v-on-click-outside="handleClickOutside"
  >
    <UITexture class="opacity-[.98]" />

    <!-- search contents -->
    <div
      class="search-wrap relative mx-auto w-full py-[4rem] text-center s:w-[67.2rem] s:py-section-top"
    >
      <h2 class="font-barlow-cond text-[3rem] leading-lg text-white s:text-lg">
        What are you searching for?
      </h2>
      <div
        class="search-input relative mb-4 mt-[2.5rem] h-[6rem] rounded-base-mob bg-jaffa px-[1.5rem] s:mt-[4rem] s:h-[9rem] s:px-[2.5rem]"
      >
        <div
          class="search-input-inner flex h-full items-center gap-4 text-[1.6rem]"
        >
          <label for="search-input">Search:</label>
          <input
            id="search-input"
            type="text"
            class="h-full w-auto grow bg-transparent text-black outline-none"
            v-model="q"
            @keyup.enter="handleSearch()"
          />
        </div>
        <div
          class="search-input-icon absolute right-[.5rem] top-1/2 size-[5.4rem] -translate-y-1/2 s:right-[1.5rem]"
        >
          <button
            @click="handleSearch()"
            @mouseenter="arrowDiamond.hoverOn()"
            @mouseleave="arrowDiamond.hoverOff()"
          >
            <UIArrowDiamond
              ref="arrowDiamond"
              icon="search"
              class="s:scale-75 max-s:!scale-[.65]"
            />
          </button>
        </div>
        <!-- Search</button> -->
      </div>
    </div>

    <!-- close button -->
    <button
      class="group absolute bottom-[.5rem] right-[.5rem] size-[3rem] s:bottom-[1rem] s:right-[2rem]"
      @click="closeSearch"
    >
      <div
        v-for="n in 2"
        class="absolute left-1/2 top-1/2 h-0 w-[2rem] -translate-x-1/2 -translate-y-1/2 border-t-2 border-skyblue transition-colors duration-300 group-hover:border-red"
        :class="n == 1 ? 'rotate-45' : '-rotate-45'"
      ></div>
    </button>
  </div>
</template>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 1000px theme("colors.jaffa") inset;
  -webkit-text-fill-color: #000;
}
</style>
