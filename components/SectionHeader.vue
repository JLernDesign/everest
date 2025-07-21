<script setup>
import { gsap } from "gsap";

const props = defineProps({
  data: { default: null },
  align: { default: "center" },
  valign: { default: "top" },
  theme: { default: "light" },
  hero: { default: false },
  subnav: { default: null },
  wrap: { default: false },
  loc: { default: null },
  template: { default: null },
  anim: { default: false },
});

const main = ref(null);

onMounted(() => {
  if (props.anim) {
    setTimeout(() => {
      // get all anim items
      const items = main.value.querySelectorAll(".anim-item");

      // animate items into place
      gsap.fromTo(
        items,
        { y: "2rem" },
        {
          duration: 1.25,
          opacity: 1,
          y: 0,
          stagger: 0.2,
          ease: "power3.out",
        },
      );
    }, 1000);
  }
});
</script>

<template>
  <header
    v-if="data"
    class="relative z-5 space-y-header-mob s:space-y-header"
    :class="[
      align == 'left' ? 'text-left' : 'text-center',
      theme == 'dark' && 'text-white',
      valign == 'center' && 'flex flex-col justify-center',
      loc == 'home-hero' && 's:!space-y-[1.8rem]',
    ]"
    ref="main"
  >
    <!-- eyebrow -->
    <div
      v-if="data.eyebrow"
      class="eyebrow flex flex-col items-center justify-center space-y-[1.8rem] max-s:mb-[4.5rem]"
    >
      <IconEyebrow :color="theme == 'dark' ? 'fill-white' : 'fill-black'" />
      <h3 class="text-eyebrow-mob s:text-eyebrow">{{ data.eyebrow }}</h3>
    </div>

    <!-- header / intro -->
    <div
      class="has-break space-y-[2rem] s:space-y-[2.5rem] s:pb-4"
      :class="[
        align == 'center' && 'mx-auto max-w-[70rem]',
        loc == 'home-hero' && 's:!space-y-[1.8rem] s:!pb-0',
        template == 'news' && 'max-w-[80rem]',
      ]"
    >
      <AnimHeadline :anim="anim">
        <h1
          v-if="hero"
          class="text !mb-6 font-barlow-cond text-xl-mob leading-xl s:!mb-12 s:text-xl"
          v-html="formatText(data.headline)"
        ></h1>
        <h2
          v-else
          class="text font-barlow-cond text-lg-mob leading-lg s:text-lg"
          :class="!data.intro && 's:pb-[.5rem]'"
          v-html="formatText(data.headline)"
        ></h2>
      </AnimHeadline>

      <div
        v-if="data.intro"
        class="max-w-[62rem]"
        :class="[align == 'center' && 'mx-auto', anim && 'anim-item']"
      >
        <p v-html="formatText(data.intro)"></p>
      </div>
    </div>

    <!-- cta buttons -->
    <CtaGroup
      v-if="data.cta"
      :data="data.cta.buttons"
      :align="align"
      :theme="theme"
      :wrap="wrap"
      :class="[loc == 'home-hero' && 's:!pt-0', anim && 'anim-item']"
    />

    <!-- subpage nav -->
    <SubNav v-if="subnav" :data="subnav" :theme="theme" :template="template" />

    <slot />
  </header>
</template>

<style scoped></style>
