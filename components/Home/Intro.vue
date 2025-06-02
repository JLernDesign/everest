<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <Section class="z-1 !pt-section-top-lg pb-section-bot text-center">
    <SectionHeaderBig align="center" :data="data" />

    <!-- brands -->
    <Brands
      class="mt-[12rem]"
      theme="light"
      :data="{
        title: 'Used by',
        logos: [
          '/logos/ph-logo.svg',
          '/logos/ph-logo.svg',
          '/logos/ph-logo.svg',
          '/logos/ph-logo.svg',
          '/logos/ph-logo.svg',
        ],
      }"
    />
  </Section>
</template>

<style scoped></style>
