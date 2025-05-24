<script setup>
const props = defineProps(["theme"]);
</script>

<template>
  <Section :theme="theme" class="bg-jaffa pb-section-bot">
    <SectionHeader
      :theme="theme"
      :data="{
        eyebrow: 'Integrations',
        headline: 'Go live faster with less effort',
        intro:
          'Accelerate time-to-market by launching new processes in weeks, not months, with pre-built business processes and integrations tailored for the SaaS industry.',
        breadcrumb: ['Integrations', 'Cloud Cost Integrations'],
      }"
    />
  </Section>
</template>

<style scoped></style>
