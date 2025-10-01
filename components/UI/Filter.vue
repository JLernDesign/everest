<script setup>
import gsap from "gsap";
import { vOnClickOutside } from "@vueuse/components";

const props = defineProps(["data", "label", "category"]);

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
  gsap.killTweensOf(menu.value);
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
  gsap.killTweensOf(menu.value);
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
    v-if="data.length > 0"
    class="group relative z-2 mb-[2.5rem] w-full text-center filter s:mb-[4rem]"
    v-on-click-outside="closeMenu"
  >
    <!-- filter button -->
    <button
      class="relative z-1 inline-flex items-center gap-4"
      @mouseenter="openMenu"
      @click="toggleMenu"
    >
      <span class="font-barlow-cond text-h5 uppercase"
        >{{ !category ? label : "Category: " }}
        <span v-if="category" class="text-red">{{ category }}</span>
      </span>

      <IconArrowFill
        color="fill-black"
        class="rotate-90 group-hover:fill-red"
      />
    </button>

    <!-- filter menu -->
    <div
      class="absolute -top-[1rem] left-0 z-0 hidden h-0 w-full translate-y-[1.5rem]"
      ref="menu"
    >
      <div class="inline-block pt-[5.75rem]" @mouseleave="closeMenu">
        <ul
          class="inline-block min-w-[20rem] divide-y-1 divide-jaffalt rounded-base-mob border-1 border-jaffalt bg-white shadow-nav"
        >
          <FilterLink v-for="item in data" :data="item" :close="closeMenu" />
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
