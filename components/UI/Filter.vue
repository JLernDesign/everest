<script setup>
import gsap from "gsap";
import { vOnClickOutside } from "@vueuse/components";

const props = defineProps(["data", "label"]);

const open = ref(false);
const menu = ref(null);

// toggle menu
const toggleMenu = () => {
  if (!open.value) {
    openMenu();
  } else if (open.value) {
    closeMenu();
  }
};

const openMenu = () => {
  open.value = true;
  gsap.to(menu.value, {
    duration: 0.5,
    display: "block",
    opacity: 1,
    y: 0,
    ease: "power3.out",
  });
};

const closeMenu = () => {
  open.value = false;
  gsap.to(menu.value, {
    duration: 0.3,
    opacity: 0,
    display: "none",
    y: 15,
    ease: "power3.in",
  });
};
</script>

<template>
  <div
    class="relative z-2 mb-[2.5rem] w-full text-center filter s:mb-[4rem]"
    v-on-click-outside="closeMenu"
  >
    <!-- filter button -->
    <button
      class="group inline-flex items-center gap-4"
      @mouseenter="openMenu"
      @click="toggleMenu"
    >
      <span class="font-barlow-cond text-h5 uppercase">{{ label }}</span>
      <IconArrowFill
        color="fill-black"
        class="rotate-90 group-hover:fill-red"
      />
    </button>

    <!-- filter menu -->
    <div
      class="absolute left-0 top-[4.75rem] hidden w-full translate-y-[1.5rem]"
      ref="menu"
    >
      <ul
        class="inline-block min-w-[20rem] divide-y-1 divide-jaffalt rounded-base-mob border-1 border-jaffalt bg-white shadow-nav"
        @mouseleave="closeMenu"
      >
        <FilterLink v-for="item in data" :data="item" />
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
