<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const props = defineProps(["data", "logos"]);

if (isSSR()) {
  gsap.registerPlugin(ScrollTrigger);
}

const loaded = ref(false);
const brands = ref(null);
let ctx, tl;

onMounted(() => {
  setTimeout(() => {
    loaded.value = true;

    nextTick(() => {
      ctx = gsap.context((self) => {
        let brands_wrap = document.getElementById("brands");
        let logos = self.selector(".logo");
        let title = self.selector(".title");

        tl = gsap.timeline({
          scrollTrigger: {
            trigger: brands_wrap,
            start: "top 65%",
            end: "+=100%",
            scrub: true,
          },
        });

        tl.to(
          title,
          {
            opacity: 0,
            y: "-5rem",
            duration: 3,
            ease: "power3.in",
          },
          4.5,
        );

        tl.to(
          logos,
          {
            y: "-10rem",
            duration: 3,
            opacity: 0,
            ease: "power3.in",
            stagger: 0.5,
          },
          0,
        );
      }, brands.value.$el);
    });
  }, 500);
});

onUnmounted(() => {
  ctx && ctx.revert();
});
</script>

<template>
  <Section
    class="z-1 pb-section-bot-mob text-center transition-opacity duration-200 s:!pt-section-top-lg s:pb-section-bot"
    :class="loaded ? 'opacity-100' : 'opacity-0'"
    id="intro"
    ref="main"
  >
    <SectionHeaderBig align="center" :data="data" />

    <!-- brands -->
    <template v-if="loaded">
      <Brands
        v-if="logos"
        class="mt-[8rem] s:mt-[12rem]"
        theme="light"
        :data="logos"
        :scroll="true"
        template="home"
        ref="brands"
      />
    </template>
  </Section>
</template>

<style scoped></style>
