<script setup>
const props = defineProps(["data", "logos"]);
</script>

<template>
  <Section
    class="pb-section-bot-mob z-1 text-center s:!pt-section-top-lg s:pb-section-bot"
  >
    <SectionHeaderBig align="center" :data="data" />

    <!-- brands -->
    <Brands
      v-if="logos"
      class="mt-[8rem] s:mt-[12rem]"
      theme="light"
      :data="logos"
    />
  </Section>
</template>

<style scoped></style>
