<script setup>
const props = defineProps(["color", "data"]);
let brands, speed;

// use specific logos for product page
if (props.data) {
  brands = props.data;

  // if less than 4 logos, double up
  if (brands.length < 4) {
    let base = brands;
    base.forEach((brand) => {
      brands.push(brand);
    });
  }

  // use global featured logos
} else {
  const wp_url = useState("wp_url");
  const endpoint = wp_url.value + "/wp-json/options/all?_fields=logos";
  const { data } = await useFetch(endpoint, { cache: "no-store" });
  brands = data.value.logos;
}

// determine speed based on number of logos
speed = brands.length * 10;

let ctx;
const main = ref();

onMounted(() => {
  /* ctx = gsap.context((self) => {
    setTimeout(() => {
      toggleOn(main.value);
    }, 200);
  }, main.value); */
});

onUnmounted(() => {
  //ctx && ctx.revert();
});
</script>

<template>
  <div
    class="ticker-wrap on relative left-1/2 flex w-[200vw] -translate-x-1/2 overflow-hidden s:w-screen"
    ref="main"
  >
    <div
      v-for="n in 2"
      class="ticker-group relative flex flex-shrink-0 items-center gap-28 pr-[14rem] s:gap-[14rem]"
      :style="`animation-duration:${speed}s`"
    >
      <UILogo v-for="item in brands" :data="item.logo" :color="color" />
    </div>
  </div>
</template>

<style scoped>
.ticker-wrap.on .ticker-group {
  animation: ticker 40s linear infinite;
}
@keyframes ticker {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>
