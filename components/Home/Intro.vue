<script setup></script>

<template>
  <Section class="!pt-section-top-lg pb-section-bot z-1 text-center">
    <SectionHeaderBig
      align="center"
      :data="{
        headline: 'A COMPLETELY REIMAGINED ERP',
        intro:
          'Why SaaS Leaders Choose Everest: Purpose-built for complex SaaS needs, powered by AI automation. Gain global visibility, ensure compliance, and access real-time metrics—faster and safer.',
        cta: [
          {
            type: 'button',
            title: 'Try Everest',
            url: '#',
          },
          {
            type: 'text',
            title: 'About',
            url: '#',
          },
        ],
      }"
    />

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
