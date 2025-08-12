<script setup>
import gsap from "gsap";

const { locale, locales, setLocale } = useI18n();

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
    y: 5,
    ease: "power3.in",
  });
};

const handleClick = (item) => {
  closeMenu();
  setLocale(item.code);
};
</script>

<template>
  <div
    class="lang relative z-2 mb-[1.65rem] flex justify-end space-x-8 text-[1.3rem] uppercase"
  >
    <!-- language -->
    <button @click="toggleMenu" class="group flex items-start hover:text-red">
      <span>EN</span
      ><span class="ml-2 mt-1 inline-block"
        ><IconChevron
          :color="theme == 'dark' ? 'stroke-white' : 'stroke-black'"
          class="group-hover:[&_.icon]:stroke-red"
      /></span>
    </button>

    <!-- language menu -->
    <div
      class="absolute right-0 top-[2rem] hidden translate-y-[.5rem]"
      @mouseleave="closeMenu"
      ref="menu"
    >
      <ul
        class="inline-block divide-y-1 divide-jaffalt rounded-base border-1 border-jaffalt bg-jaffa pt-1 shadow-nav"
      >
        <li v-for="(item, i) in locales" class="px-4 py-2 text-left">
          <button
            @click="handleClick(item)"
            class="flex items-center gap-4 text-[1.3rem] uppercase hover:text-red"
            :class="{ 'text-red': locale === item.code }"
          >
            {{ item.code }}
            <img
              :src="`/flags/flag-${item.code}@2x.png`"
              alt=""
              class="-mt-1 w-[2.1rem]"
            />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
