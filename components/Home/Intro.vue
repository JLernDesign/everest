<script setup>
const props = defineProps(["data", "logos"]);
</script>

<template>
  <Section class="z-1 !pt-section-top-lg pb-section-bot text-center">
    <SectionHeaderBig align="center" :data="data" />

    <!-- brands -->
    <Brands v-if="logos" class="mt-[12rem]" theme="light" :data="logos" />
  </Section>
</template>

<style scoped></style>
