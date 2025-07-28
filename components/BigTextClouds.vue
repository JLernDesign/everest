<script setup>
import { gsap } from "gsap";
const props = defineProps(["data"]);

let main = ref(null);
let ctx;
const tops = ["-top-[50rem]", "-top-[40rem]", "-top-[20rem]", "-top-[25rem]"];
const delays = [-20, -35, -50, -30];
let m = 0;

onMounted(() => {
  ctx = gsap.context((self) => {
    const clouds = self.selector(".cloud");
    const cloudY = [80, 40, 65, 40];
    cloudParallax(main.value.$el, null, clouds, cloudY, "top bottom");
  }, main.value.$el);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <Section
    class="z-1 overflow-hidden bg-skyblue !pt-section-top pb-section-bot-mob text-center s:pb-section-bot"
    :anim="true"
    ref="main"
  >
    <!-- bg elements -->
    <div
      v-for="n in 2"
      class="absolute left-0 h-[40rem] w-[180rem]"
      :class="n == 1 ? 'top-0' : 'bottom-0'"
    >
      <UICloud
        type="2"
        class="left-0"
        :class="tops[n - 1]"
        :anim="true"
        :speed="60"
        :num="m++"
        :delay="delays[n - 1]"
      />
      <UICloud
        type="3"
        class="left-0"
        :class="tops[n - 1]"
        :anim="true"
        :speed="40"
        :num="m++"
        :delay="delays[n - 1]"
      />
      <UIGlow
        class="glower h-[21.8rem]"
        src="/ui/edge-gradient.svg"
        :class="n == 1 ? '-top-[8rem]' : '-bottom-[5rem]'"
      />
    </div>

    <SectionHeaderBig
      align="center"
      :data="data.header"
      :subnav="data.sections"
      anim="scroll"
    />
  </Section>
</template>

<style scoped></style>
