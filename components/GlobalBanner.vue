<script setup>
import gsap from "gsap";
const props = defineProps(["data"]);
const mobile = breakpoints.smallerOrEqual("tablet1");
const main = ref(null);
const banner = ref(null);

onMounted(() => {
  mobile.value ? main.value.classList.add("on") : null;

  gsap.fromTo(
    banner.value,
    { y: -20 },
    {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: "power3.out",
    },
  );
});

watch(mobile, () => {
  mobile.value
    ? main.value.classList.add("on")
    : main.value.classList.remove("on");
});
</script>

<template>
  <div
    class="global-banner relative z-20 h-[3.6rem] w-full overflow-hidden text-body-xsm text-white opacity-0 [&_a:hover]:opacity-75 [&_a]:underline"
    :class="bgColor(data)"
    ref="banner"
  >
    <div class="ticker-wrap flex h-full items-center" ref="main">
      <div
        v-for="n in 2"
        class="ticker-group flex shrink-0 items-center s:w-full s:justify-center"
        :class="n == 2 && 'block s:hidden'"
        v-html="data.bannerText"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.ticker-wrap.on .ticker-group {
  animation: ticker 30s linear infinite;
}
</style>
