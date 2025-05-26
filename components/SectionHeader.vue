<script setup>
const props = defineProps({
  data: { default: null },
  align: { default: "center" },
  theme: { default: "light" },
});
</script>

<template>
  <header
    v-if="data != undefined"
    class="relative z-5 space-y-header"
    :class="align == 'left' ? 'text-left' : 'text-center'"
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
    <div class="has-break mx-auto max-w-[90rem] space-y-[2.5rem]">
      <h2
        class="font-barlow-cond text-lg font-bold leading-lg"
        v-html="data.headline"
      ></h2>
      <p v-html="data.intro"></p>
    </div>

    <!-- cta buttons -->
    <CtaGroup v-if="data.cta" :data="data.cta" :align="align" class="pt-6" />

    <!-- breadcrumb nav -->
    <Breadcrumb v-if="data.breadcrumb" :data="data.breadcrumb" :theme="theme" />
  </header>
</template>

<style scoped></style>
