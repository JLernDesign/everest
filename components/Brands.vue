<script setup>
import { gsap } from "gsap";
const props = defineProps(["data", "theme", "scroll", "template"]);

const main = ref();
let mm, ctx;
const total = props.data.logos.length;
/* const speed = 150 / total; */
const speed = total * 10;
const dup = props.template == "home" ? 3 : 2;

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
  <div id="brands">
    <h4
      class="title mb-4 text-center text-tag-mob s:mb-6 s:text-tag"
      :class="[
        theme == 'dark' ? 'text-white' : 'text-black',
        template == 'landing' &&
          '!mb-[4rem] font-barlow-cond !text-body uppercase',
      ]"
    >
      {{ data.title }}
    </h4>

    <!-- desktop no scroll -->
    <div
      class="hidden justify-center space-x-[4rem] s:flex s:space-x-[9rem]"
      :class="[
        scroll ? 's:hidden' : '',
        template == 'list-module' && 'justify-between !space-x-0',
      ]"
    >
      <div
        v-for="item in data.logos"
        :class="[
          template == 'landing'
            ? 'flex h-[13.2rem] w-[31rem] items-center justify-center rounded-base bg-white'
            : '',
          template == 'list-module' && 'inline-block w-auto',
        ]"
      >
        <UILogo
          :src="item.url ? item.url : item"
          class="max-s:shrink-0"
          :class="
            template == 'list-module' &&
            'inline-block !w-auto [&_img]:!max-w-[12rem]'
          "
          :small="
            template == 'list-module' || template == 'centered-text'
              ? true
              : false
          "
        />
      </div>
    </div>

    <!-- desktop scroll / mobile -->
    <div
      ref="main"
      class="brands-wrap"
      :class="scroll ? 'flex' : 'flex s:hidden'"
    >
      <div
        v-for="n in dup"
        class="brands-group flex justify-center space-x-[6rem] s:space-x-[9rem]"
        :class="[
          template == 'landing' || template == 'list-module'
            ? 'max-s:!space-x-[4rem]'
            : '',
        ]"
        :style="{ animationDuration: `${speed}s` }"
      >
        <UILogo
          v-for="item in data.logos"
          :src="item.url ? item.url : item"
          :class="[
            template == 'landing'
              ? 'flex h-[8rem] items-center justify-center rounded-base bg-white s:!h-[13.2rem] s:!w-[31rem] s:px-20 s:py-12 max-s:p-8'
              : 's:!w-[13rem] max-s:h-[5rem] max-s:w-[10rem] max-s:shrink-0',
            template == 'list-module' && '[&_img]:!max-w-[12rem]',
          ]"
          :small="
            template == 'list-module' || template == 'centered-text'
              ? true
              : false
          "
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
