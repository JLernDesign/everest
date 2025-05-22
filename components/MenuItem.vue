<script setup>
import gsap from "gsap";
const main = ref(null);
const menu = ref(null);
const props = defineProps(["data", "type", "active", "submenu", "close_func"]);
let el, link, accent;

onMounted(() => {
  el = qs(".submenu", main.value);
  link = qs(".toplink", main.value);
  accent = qs(".accent", main.value);
});

// submenu
const openMenu = () => {
  link.classList.add("on");
  gsap.to(accent, {
    duration: 0.5,
    x: 0,
    y: 0,
    opacity: 1,
    ease: "power3.out",
  });

  gsap.killTweensOf(el);
  gsap.to(el, {
    duration: 0.5,
    display: "block",
    opacity: 1,
    y: 0,
    ease: "power3.out",
  });
};
const closeMenu = () => {
  link.classList.remove("on");
  gsap.to(accent, {
    duration: 0.25,
    y: "-1rem",
    x: "-1rem",
    opacity: 0,
    ease: "quad.in",
  });

  gsap.killTweensOf(el);
  gsap.to(el, {
    duration: 0.3,
    opacity: 0,
    display: "none",
    y: 15,
    ease: "power3.in",
  });
};

// handle menu click
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

// toggle mobile submenu
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
      :to="type == 'main' ? data.url : null"
      :data-parent="type == 'mobile' && submenu ? true : null"
      :target="data.target"
      class="toplink ul relative z-1 text-body-sm after:bg-red hover:text-red"
      :class="[type == 'main' && active == data.title ? 'on' : null]"
      @mouseenter="type == 'main' && submenu ? openMenu() : null"
      @click.prevent="handleClick"
      >{{ data.title }}

      <!-- mobile arrow -->
      <div v-if="type == 'mobile' && submenu" class="arrow">
        <img src="/public/ui/chevron.svg" alt="" />
      </div>
    </NuxtLink>

    <!-- submenu -->
    <div v-if="submenu" class="nav-sub relative z-0 h-0 w-full">
      <Submenu />
    </div>

    <!-- accent arrow -->
    <div
      class="accent absolute -top-[1.5rem] left-0 -translate-y-[1rem] opacity-0"
    >
      <img src="/public/ui/tri.svg" alt="" />
    </div>
  </li>
</template>

<style scoped>
/* @media (max-width: 1024px) {
  .nav-sub {
    height: 0;
    overflow: hidden;
  }
  .submenu {
    border: none !important;
    padding-bottom: 15px;
    padding-top: 16px;
    padding-left: 22px;
    li {
      font-family: 'Inter', sans-serif;
      font-size: 18px;
      text-transform: none;
      letter-spacing: 0;
      font-weight: 400;
    }
    li + li {
      border: none !important;
      margin-top: 22px;
    }
    a {
      &:hover {
        background-color: var(--black);
        color: var(--cream);
      }
    }
  }

  .nav-sub {
    &.icons {
      .submenu {
        a {
          display: flex;
          justify-items: flex-start;
          align-items: center;
        }
      }
      .list-icon {
        width: 46px;
        height: 46px;
        flex-shrink: 0;
        margin-right: 20px;

        img {
          object-fit: cover;
        }
      }
    }
  }
} */
</style>
