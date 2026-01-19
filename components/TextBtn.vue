<script setup>
import { gsap } from "gsap";

const props = defineProps(["data", "target", "theme", "color"]);

const main = ref(null);
const route = useRoute();

const hoverOn = () => {
  if (isTouchDevice()) return;
  gsap.fromTo(
    main.value.$el,
    {
      backgroundSize: "0% 1px",
    },
    {
      backgroundSize: "100% 1px",
      duration: 0.5,
      ease: "power3.inOut",
    },
  );
};
</script>

<template>
  <NuxtLink
    ref="main"
    :to="data && getUrl(data) + addUtm(route, data.external)"
    :target="data?.external && '_blank'"
    class="ul single cta relative font-helvh text-body-sm-mob transition-none s:text-body-sm"
    :class="
      color == 'black'
        ? 'text-black after:bg-black'
        : 'text-white after:bg-white'
    "
    @mouseenter="hoverOn"
    ><slot
  /></NuxtLink>
</template>

<style scoped></style>
