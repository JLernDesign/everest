<script setup>
import gsap from "gsap";
import { vOnClickOutside } from "@vueuse/components";

const props = defineProps(["data", "template"]);
const route = useRoute();
const current = props.data.find((item) => item.slug === route.params.slug);
const open = ref(false);
const menu = ref(null);

// scroll to element
const handleClick = (id) => {
  const element = document.getElementById(id);
  gsap.to(window, {
    scrollTo: { y: element },
    duration: 0.75,
    ease: "power3.inOut",
  });
};

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
    class="relative z-2 w-full pt-[2rem] text-center s:pt-[3rem]"
    v-on-click-outside="closeMenu"
  >
    <!-- mobile menu button -->
    <div class="s:hidden max-s:inline-block">
      <button class="relative text-body-sm-mob" @click="toggleMenu">
        <div
          class="accent absolute -top-2 left-0 h-[1rem] w-[1.1rem] -translate-y-[1rem]"
        >
          <img src="/public/ui/tri.svg" alt="" />
        </div>
        <span class="ul on text-red after:bg-red">{{ current.title }}</span>
      </button>
    </div>

    <!-- menu list -->
    <div
      class="absolute s:relative max-s:left-0 max-s:top-[5.5rem] max-s:hidden max-s:w-full max-s:translate-y-[1.5rem]"
      ref="menu"
    >
      <ul
        class="inline-block s:inline-flex s:space-x-nav max-s:divide-y-1 max-s:divide-jaffalt max-s:rounded-base-mob max-s:border-1 max-s:border-jaffalt max-s:bg-white max-s:shadow-nav"
      >
        <li v-for="item in data" class="max-s:px-6 max-s:py-4 max-s:text-left">
          <SubNavLink
            :data="item"
            @click="
              item.slug
                ? navigateTo(`/${props.template}/${item.slug}`)
                : handleClick(item.id)
            "
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
