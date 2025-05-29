<script setup>
const props = defineProps({
  data: { default: null },
  align: { default: "center" },
  theme: { default: "light" },
  hero: { default: false },
});
</script>

<template>
  <header
    v-if="data != undefined"
    class="relative z-5 space-y-header"
    :class="[
      align == 'left' ? 'text-left' : 'text-center',
      theme == 'dark' && 'text-white',
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
        class="!mb-12 font-barlow-cond text-xl font-bold leading-lg"
        v-html="data.headline"
      ></h1>
      <h2
        v-else
        class="font-barlow-cond text-lg font-bold leading-lg"
        v-html="data.headline"
      ></h2>
      <p v-html="data.intro"></p>
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
    <Breadcrumb v-if="data.breadcrumb" :data="data.breadcrumb" :theme="theme" />

    <slot />
  </header>
</template>

<style scoped></style>
