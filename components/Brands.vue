<script setup>
import { gsap } from "gsap";
const props = defineProps(["data", "theme", "scroll"]);

const main = ref();
let mm, ctx;

onMounted(() => {
  // desktop scroll

  if (props.scroll) {
    ctx = gsap.context(() => {
      setTimeout(() => {
        playInView(main.value, null, toggle);
      }, 200);
    }, main.value);
  }

  // mobile scroll only
  else {
    mm = gsap.matchMedia();
    mm.add("(max-width: 649px)", () => {
      setTimeout(() => {
        playInView(main.value, null, toggle);
      }, 200);
    });
  }
});

onUnmounted(() => {
  ctx && ctx.revert();
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
      class="mb-4 text-center text-tag-mob s:mb-6 s:text-tag"
      :class="theme == 'dark' ? 'text-white' : 'text-black'"
    >
      {{ data.title }}
    </h4>

    <!-- desktop no scroll -->
    <div
      class="hidden justify-center space-x-[4rem] s:flex s:space-x-[9rem]"
      :class="scroll ? 's:hidden' : ''"
    >
      <UILogo
        v-for="item in data.logos"
        :src="item.url ? item.url : item"
        class="max-s:shrink-0"
      />
    </div>

    <!-- desktop scroll / mobile -->
    <div
      ref="main"
      class="brands-wrap"
      :class="scroll ? 'flex' : 'flex s:hidden'"
    >
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
