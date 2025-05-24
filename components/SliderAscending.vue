<script setup>
const props = defineProps(["theme"]);
</script>

<template>
  <Section :theme="theme" class="pb-section-bot">
    <SectionHeader
      :theme="theme"
      :data="{
        eyebrow: 'Why Everest',
        headline: 'Solving the challenges that <br/>hold SaaS companies back.',
        intro:
          'At Everest, we don’t just automate your core <br/>business processes—we fortify them.',
        cta: [
          {
            type: 'button',
            title: 'Read More',
            url: '#',
          },
        ],
      }"
    />
  </Section>
</template>

<style scoped></style>
