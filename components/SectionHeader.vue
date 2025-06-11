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
    class="relative z-5 space-y-header"
    :class="[
      align == 'left' ? 'text-left' : 'text-center',
      theme == 'dark' && 'text-white',
      valign == 'center' && 'flex flex-col justify-center',
    ]"
  >
    <!-- eyebrow -->
    <div
      v-if="data.eyebrow"
      class="eyebrow flex flex-col items-center justify-center space-y-[1.8rem]"
    >
      <IconEyebrow :color="theme == 'dark' ? 'fill-white' : 'fill-black'" />
      <h3 class="text-eyebrow">{{ data.eyebrow }}</h3>
    </div>

    <!-- header / intro -->
    <div
      class="has-break space-y-[2.5rem]"
      :class="align == 'center' && 'mx-auto max-w-[100rem]'"
    >
      <h1
        v-if="hero"
        class="!mb-12 font-barlow-cond text-xl font-bold leading-xl"
        v-html="addLineBreaks(data.headline)"
      ></h1>
      <h2
        v-else
        class="font-barlow-cond text-lg font-bold leading-lg"
        v-html="addLineBreaks(data.headline)"
      ></h2>
      <div class="max-w-[62rem]">
        <p v-html="addLineBreaks(data.intro)"></p>
      </div>
    </div>

    <!-- cta buttons -->
    <CtaGroup
      v-if="data.cta"
      :data="data.cta.buttons"
      :align="align"
      :theme="theme"
      class="pt-6"
    />

    <!-- breadcrumb nav -->
    <Breadcrumb v-if="breadcrumb" :data="breadcrumb" :theme="theme" />

    <slot />
  </header>
</template>

<style scoped></style>
