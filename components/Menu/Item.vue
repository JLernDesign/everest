<script setup>
import gsap from "gsap";
const main = ref(null);
const props = defineProps(["data", "type", "active", "submenu", "close_func"]);
let el, link, accent, single;
props.data.__typename == "MenuItemRecord" ? (single = true) : null;

onMounted(() => {
  el = qs(".submenu", main.value);
  link = qs(".toplink", main.value);
  accent = qs(".accent", main.value);
});

// desktop: submenu open/close
const openMenu = () => {
  // kill off old
  gsap.killTweensOf([el, accent]);

  // toggle active class
  link.classList.add("on");

  // show arrow
  toggleAccent("on");

  // show menu
  gsap.to(el, {
    duration: 0.5,
    display: "block",
    opacity: 1,
    y: 0,
    ease: "power3.out",
  });
};

const closeMenu = () => {
  // kill off old
  gsap.killTweensOf([el, accent]);

  // toggle active class
  link.classList.remove("on");

  // hide arrow
  if (props.active != props.data.label) {
    toggleAccent("off");
  }

  // hide menu
  gsap.to(el, {
    duration: 0.3,
    opacity: 0,
    display: "none",
    y: 15,
    ease: "power3.in",
  });
};

const toggleAccent = (state) => {
  if (state == "on") {
    gsap.to(accent, {
      duration: 0.5,
      x: 0,
      y: 0,
      opacity: 1,
      ease: "power3.out",
    });
  } else {
    gsap.to(accent, {
      duration: 0.25,
      y: "-1rem",
      x: "-1rem",
      opacity: 0,
      ease: "quad.in",
    });
  }
};

// watch for active page change to update accent
watch(
  () => props.active,
  () => {
    props.active == props.data.label ? toggleAccent("on") : toggleAccent("off");
  },
);

// mobile: handle menu click
const handleClick = (e) => {
  if (e.target.dataset.parent) {
    toggleSubMenu(e);
  } else {
    closeMenu();
    if (e.target.target == "_blank") {
      window.open(e.target.dataset.href, "_blank");
    } else {
      if (props.close_func) {
        props.close_func();
      }
      navigateTo(e.target.dataset.href);
    }
  }
};

// mobile: toggle submenu
const toggleSubMenu = (e) => {
  const child = e.target;
  const parent = child.parentElement;

  const el = parent.querySelector(".nav-sub");
  const arrow = parent.querySelector(".arrow");

  // open
  if (!e.target.classList.contains("open")) {
    e.target.classList.add("open");

    const h = parent.querySelector(".submenu").offsetHeight;

    gsap.to(el, {
      duration: 0.75,
      height: h,
      ease: "power3.inOut",
      onComplete: function () {
        el.style.height = "auto";
      },
    });

    gsap.to(arrow, {
      duration: 0.75,
      rotation: 90,
      ease: "power3.inOut",
    });

    // close
  } else {
    e.target.classList.remove("open");

    gsap.to(el, {
      duration: 0.75,
      height: 0,
      ease: "power3.inOut",
    });

    gsap.to(arrow, {
      duration: 0.75,
      rotation: 0,
      ease: "power3.inOut",
    });
  }
};
</script>

<template>
  <li
    @mouseleave="type != 'mobile' && submenu ? closeMenu() : null"
    class="relative"
    ref="main"
  >
    <NuxtLink
      :to="type == 'main' && single ? getUrl(data) : null"
      :target="data.external && '_blank'"
      :data-parent="type == 'mobile' && submenu ? true : null"
      class="toplink ul relative z-1 cursor-pointer text-body-sm-mob after:bg-red s:text-body-sm"
      :class="[
        type == 'main' && active == data.label ? 'nuxt-link-active' : null,
        single && 'hover:text-red',
      ]"
      @mouseenter="type == 'main' && submenu ? openMenu() : null"
      v-on="{ click: type == 'mobile' ? handleClick : null }"
      >{{ data.label }}

      <!-- mobile arrow -->
      <div v-if="type == 'mobile' && submenu" class="arrow">
        <img src="/public/ui/chevron.svg" alt="" />
      </div>
    </NuxtLink>

    <!-- submenu -->
    <div v-if="submenu" class="nav-sub relative z-0 h-0 w-full">
      <Submenu :id="data.label" :data="data.submenu" />
    </div>

    <!-- accent arrow -->
    <div
      class="accent absolute -top-[1rem] left-0 w-[1.1rem] -translate-y-[1rem] opacity-0"
    >
      <img src="/public/ui/tri.svg" alt="" />
    </div>
  </li>
</template>

<style scoped>
.toplink {
  transition-timing-function: ease-out;
  &.on,
  &.nuxt-link-active {
    color: theme("colors.red");
  }
}
</style>
