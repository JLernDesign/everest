<script setup></script>

<template>
  <Section class="z-1 !pt-section-top-lg pb-section-bot text-center">
    <SectionHeaderBig
      align="center"
      :data="{
        headline: 'A COMPLETELY REIMAGINED<br/> [] ERP',
        intro:
          'Why SaaS Leaders Choose Everest: Purpose-built for complex SaaS needs, powered by AI automation. Gain global visibility, ensure compliance, and access real-time metrics—faster and safer.',
        cta: {
          buttons: [
            {
              style: 'button',
              label: 'Try Everest',
              internal: '#',
            },
            {
              style: 'text',
              label: 'About',
              internal: '#',
            },
          ],
        },
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
