<script setup>
const props = defineProps(["data", "theme", "sticky"]);
import gsap from "gsap";
console.log(props.data);
let menuOpen = false;
const main = ref(null);
const menu = ref(null);
const burger = ref(null);
const logo = ref(null);

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
    toggleSubMenu(e);
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

// toggle submenu
const toggleSubMenu = (e) => {
  const child = e.target;
  const parent = child.parentElement;
  const el = parent.querySelector(".nav-sub");
  const arrow = parent.querySelector(".arrow");

  // open
  if (!e.target.classList.contains("open")) {
    e.target.classList.add("open");

    const h = parent.querySelector(".sub").offsetHeight;

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
      scaleY: -1,
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
      scaleY: 1,
      ease: "power3.inOut",
    });
  }
};
</script>

<template>
  <div
    class="mobile-menu fixed left-0 top-0 z-20 block h-0 w-screen overflow-visible s:hidden"
    ref="main"
  >
    <MenuBurger
      @click="toggleMenu"
      :theme="theme"
      ref="burger"
      :sticky="sticky"
    />

    <!-- main menu -->
    <div
      class="menu-wrap absolute left-0 top-0 z-1 hidden h-screen w-screen touch-auto overflow-scroll overscroll-contain"
      ref="menu"
    >
      <div class="bar fixed left-0 top-0 z-1 h-[9rem] w-full bg-skyblue">
        <!-- logo -->
        <div
          class="logo-main absolute z-5 pl-side-mob pt-[1.5rem] s:pl-side s:pt-[4.25rem]"
        >
          <NuxtLink
            to="/"
            class="block h-[5.3rem] w-[6.2rem] origin-top-left s:h-[8.1rem] s:w-[9.4rem]"
          >
            <IconLogo />
          </NuxtLink>
        </div>
      </div>

      <div
        class="menu-contents min-h-screen w-full bg-skyblue px-side-mob pb-12 pt-[10.5rem]"
      >
        <!-- cta from header -->
        <CtaBtn
          to="/demo"
          :stretch="true"
          class="mb-[5rem] w-full"
          @click="closeMenu"
          >Try Everest</CtaBtn
        >

        <!-- menu -->
        <div
          class="nav-parent relative w-full border-t-1 border-t-black py-4"
          v-for="page in data"
        >
          <button
            @click.prevent="handleClick"
            :data-href="!page.submenu && getUrl(page)"
            :data-parent="page.submenu && true"
            class="text-body-md-mob inline-block w-full px-side-mob pt-2 text-left leading-base"
          >
            {{ page.label }}
            <div
              class="arrow pointer-events-none absolute right-5 top-[2rem] w-5"
            >
              <IconChevron v-if="page.submenu" color="stroke-red" width="1" />
            </div>
          </button>

          <!-- submenu -->
          <!-- <div
            class="nav-sub h-0 overflow-hidden px-side-mob text-body leading-body"
          >
            <div
              v-if="page.groups"
              class="sub pt-10"
              :class="page.id != 'Company' ? 'space-y-10' : 'space-y-6'"
            >
              <MenuGroup
                v-for="group in page.groups"
                :data="group"
                :parent="page.id"
                loc="mobile"
                :close="closeMenu"
              />
            </div>
          </div> -->
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
