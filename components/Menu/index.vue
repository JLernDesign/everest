<script setup>
const props = defineProps(["data", "theme", "sticky"]);
import gsap from "gsap";
const global_cta = inject("global_cta");

let menuOpen = false;
const main = ref(null);
const menu = ref(null);
const burger = ref(null);

onMounted(() => {
  // set toggle for scroll up
  scrollUpToggle(".menu-btn", "on");
});

// menu button click handler
const toggleMenu = (e) => {
  if (!menuOpen) {
    burger.value.openMenu();
    gsap.fromTo(
      menu.value,
      { display: "block", scrollTo: 0, opacity: 0 },
      {
        duration: 0.75,
        opacity: 1,
        ease: "elastic.out(1.2,3)",
        onComplete: function () {
          menu.value.style.transform = "";
        },
      },
    );

    main.value.classList.add("open");
    main.value.classList.add("expanded");
    menuOpen = true;
  } else {
    closeMenu();
  }
};

// handle menu click
const handleClick = (e) => {
  if (e.target.dataset.parent) {
    toggleSubMenus(e);
  } else {
    closeMenu();
    navigateTo(e.target.dataset.href);
  }
};

// close menu
const closeMenu = () => {
  burger.value.closeMenu();
  if (menuOpen) {
    //console.log('close menu');
    gsap.to(menu.value, {
      duration: 0.25,
      opacity: 0,
      ease: "power3.out",
      onComplete: function () {
        gsap.set(menu.value, { display: "none" });
        main.value.classList.remove("expanded");
      },
    });

    main.value.classList.remove("open");
    menuOpen = false;
  }
};

const toggleSubMenus = (e) => {
  const submenus = document.querySelectorAll(".nav-sub");

  submenus.forEach((submenu) => {
    if (
      submenu.dataset.label === e.target.dataset.label &&
      !submenu.classList.contains("open")
    ) {
      /* open submenu */
      submenu.classList.add("open");
      const h = submenu.querySelector(".sub").offsetHeight;
      gsap.to(submenu, {
        duration: 0.75,
        height: h,
        ease: "power3.inOut",
        onComplete: function () {
          submenu.style.height = "auto";
        },
      });

      /* close all other submenus */
    } else {
      submenu.classList.remove("open");
      gsap.to(submenu, {
        duration: 0.75,
        height: 0,
        ease: "power3.inOut",
      });
    }
  });
};
</script>

<template>
  <div
    class="mobile-menu fixed left-0 top-0 z-20 block h-0 w-screen translate-y-[3.6rem] overflow-visible s:hidden"
    ref="main"
  >
    <!-- menu button -->
    <MenuBurger
      @click="toggleMenu"
      :theme="theme"
      ref="burger"
      :sticky="sticky"
    />

    <!-- main menu -->
    <div
      class="menu-wrap absolute left-0 top-[0] z-1 hidden h-screen w-screen touch-auto overflow-scroll overscroll-contain"
      ref="menu"
    >
      <!-- top bar -->
      <div class="bar fixed left-0 top-0 z-10 h-[9rem] w-full bg-skyblue">
        <!-- logo -->
        <div class="logo-main absolute z-5 pl-side-mob pt-[1.5rem] s:pl-side">
          <NuxtLink
            :to="$localePath('/')"
            @click="closeMenu"
            class="block h-[5.3rem] w-[6.2rem] origin-top-left s:h-[8.1rem] s:w-[9.4rem]"
          >
            <IconLogo />
          </NuxtLink>
        </div>
      </div>

      <!-- menu contents -->
      <div
        class="menu-contents relative min-h-screen w-full overflow-hidden bg-skyblue px-side-mob pt-[10.5rem]"
      >
        <!-- cta from header -->
        <CtaBtn
          :to="getUrl(global_cta.buttons[0])"
          :stretch="true"
          class="mb-[5rem] w-full"
          @click="closeMenu"
          >{{ global_cta.buttons[0].label }}</CtaBtn
        >

        <!-- menu -->
        <div
          class="nav-parent relative z-3 w-full border-t-1 border-t-black py-4"
          v-for="page in data"
        >
          <button
            @click.prevent="handleClick"
            :data-href="!page.submenu && getUrl(page)"
            :data-parent="page.submenu && true"
            :data-label="page.label"
            class="inline-block w-full px-3 pt-2 text-left text-body-md-mob leading-base"
          >
            {{ page.label }}
            <div
              class="arrow pointer-events-none absolute right-5 top-[2rem] w-5"
            >
              <IconChevron v-if="page.submenu" color="stroke-red" width="1" />
            </div>
          </button>

          <!-- submenu -->
          <div
            v-if="page.submenu"
            :data-label="page.label"
            class="nav-sub h-0 overflow-hidden text-body-sm-mob"
          >
            <div class="sub">
              <MenuGroup :data="page.submenu" :close="closeMenu" />
            </div>
          </div>
        </div>

        <!-- bottom image -->
        <div class="h-[25rem]"></div>
        <div
          class="bottom-image absolute bottom-0 left-1/2 mt-[10rem] w-screen -translate-x-1/2 pb-[9.3rem]"
        >
          <div class="gradient absolute bottom-0 left-0 w-full">
            <img src="/public/ui/menu-gradient.svg" />
          </div>
          <div
            class="clouds absolute -bottom-[13rem] left-1/2 ml-[9rem] w-[108.8rem] -translate-x-1/2"
          >
            <img src="/public/ui/menu-clouds@2x.png" />
          </div>
          <div
            class="absolute bottom-0 z-10 h-[9.3rem] w-[108.8rem] bg-shadowblue"
          ></div>
          <UIJagEdge color="fill-shadowblue" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.expanded {
  height: 100%;
  z-index: 20;
}
</style>
