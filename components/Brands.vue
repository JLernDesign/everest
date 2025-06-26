<script setup>
import { gsap } from "gsap";
const props = defineProps(["data", "theme"]);

const main = ref();
let mm;

onMounted(() => {
  mm = gsap.matchMedia();
  mm.add("(max-width: 649px)", () => {
    setTimeout(() => {
      playInView(main.value, null, toggle);
    }, 200);
  });
});

onUnmounted(() => {
  mm && mm.revert();
});

const toggle = (state) => {
  if (main.value) {
    state == "enter" && main.value.classList.add("on");
    state == "leave" && main.value.classList.remove("on");
  }
};
</script>

<template>
  <div>
    <h4
      class="text-tag-mob mb-4 text-center s:mb-6 s:text-tag"
      :class="theme == 'dark' ? 'text-white' : 'text-black'"
    >
      {{ data.title }}
    </h4>

    <!-- desktop -->
    <div class="hidden justify-center space-x-[4rem] s:flex s:space-x-[9rem]">
      <UILogo
        v-for="item in data.logos"
        :src="item.url ? item.url : item"
        class="max-s:shrink-0"
      />
    </div>

    <!-- mobile -->
    <div ref="main" class="brands-wrap flex s:hidden">
      <div
        v-for="n in 2"
        class="brands-group flex justify-center space-x-[6rem] s:space-x-[9rem]"
      >
        <UILogo
          v-for="item in data.logos"
          :src="item.url ? item.url : item"
          class="max-s:h-[5rem] max-s:w-[10rem] max-s:shrink-0"
        />
        <div class="brands-group-spacer" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.brands-wrap.on .brands-group {
  animation: ticker 20s linear infinite;
}
</style>
