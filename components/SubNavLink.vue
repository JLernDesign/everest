<script setup>
import gsap from "gsap";
const props = defineProps(["data", "num", "active"]);
const route = useRoute();
const accent = ref(null);

const isActive = computed(() => {
  let active = false;

  // links to a page
  if (props.data.slug != undefined || props.data.tag?.slug != undefined) {
    if (route.params.slug == (props.data.slug || props.data.tag?.slug)) {
      active = true;
    }

    // news links
    let name = route.name.split("___"); // account for locale
    if (name[0].split("-")[1] == props.data.tag?.slug) {
      active = true;
    }
  }

  // link changes content
  else {
    if (props.num == props.active) {
      active = true;
    }
  }

  if (active) {
    toggleAccent("on");
  } else {
    toggleAccent("off");
  }

  return active;
});

const hoverOn = () => {
  toggleAccent("on");
};
const hoverOff = (e) => {
  if (e.target.classList.contains("on")) return;
  toggleAccent("off");
};

const toggleAccent = (state) => {
  if (!accent.value) return;
  gsap.killTweensOf(accent.value);
  if (state == "on") {
    gsap.to(accent.value, {
      duration: 0.5,
      x: 0,
      y: 0,
      opacity: 1,
      ease: "power3.out",
    });
  } else {
    gsap.to(accent.value, {
      duration: 0.25,
      y: "-1rem",
      x: "-1rem",
      opacity: 0,
      ease: "quad.in",
    });
  }
};
</script>

<template>
  <button
    class="ul single relative text-body-sm-mob leading-base hover:text-red s:text-body-sm max-s:!bg-none"
    :class="isActive ? 'on text-red' : ''"
    @mouseenter="hoverOn"
    @mouseleave="hoverOff"
  >
    <div
      class="accent absolute -top-[1.75rem] left-0 hidden h-[1rem] w-[1.1rem] s:block"
      :class="
        isActive
          ? 'translate-x-0 translate-y-0 opacity-100'
          : '-translate-x-[1rem] -translate-y-[1rem] opacity-0'
      "
      ref="accent"
    >
      <img src="/public/ui/tri.svg" alt="" />
    </div>
    <span>{{ data.title }}</span>
  </button>
</template>

<style scoped>
/* button {
  transition: var(--ease-out);
}
.on {
  color: theme("colors.red");
}
@media (min-width: 650px) {
  .on {
    background-size: 100% 1px;
    .accent {
      opacity: 1;
    }
  }
} */
</style>
