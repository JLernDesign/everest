<script setup>
const props = defineProps({
  data: { default: null },
  align: { default: "center" },
  valign: { default: "top" },
  theme: { default: "light" },
  hero: { default: false },
  breadcrumb: { default: null },
});
</script>

<template>
  <header
    v-if="data"
    class="space-y-header-mob relative z-5 s:space-y-header"
    :class="[
      align == 'left' ? 'text-left' : 'text-center',
      theme == 'dark' && 'text-white',
      valign == 'center' && 'flex flex-col justify-center',
    ]"
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
      class="has-break space-y-[2rem] s:space-y-[2.5rem]"
      :class="align == 'center' && 'mx-auto max-w-[100rem]'"
    >
      <h1
        v-if="hero"
        class="text-xl-mob !mb-12 font-barlow-cond font-bold leading-xl s:text-xl"
        v-html="formatText(data.headline)"
      ></h1>
      <h2
        v-else
        class="font-barlow-cond text-lg-mob font-bold leading-lg s:text-lg"
        v-html="formatText(data.headline)"
      ></h2>
      <div class="max-w-[62rem]" :class="align == 'center' && 'mx-auto'">
        <p v-html="formatText(data.intro)"></p>
      </div>
    </div>

    <!-- cta buttons -->
    <CtaGroup
      v-if="data.cta"
      :data="data.cta.buttons"
      :align="align"
      :theme="theme"
      class="s:pt-6"
    />

    <!-- breadcrumb nav -->
    <Breadcrumb v-if="breadcrumb" :data="breadcrumb" :theme="theme" />

    <slot />
  </header>
</template>

<style scoped></style>
