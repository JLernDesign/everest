<script setup></script>

<template>
  <Section :hero="true" class="!pt-[24.5rem] pb-[10rem]">
    <SectionHeader
      class="max-w-[42rem]"
      align="left"
      :data="{
        headline: 'Reinventing ERP for SaaS Growth',
        intro:
          'The only enterprise-grade ERP purpose-built for SaaS companies. AI-driven, future-ready, and built to scale.',
        cta: [
          {
            type: 'text',
            title: 'Product',
            url: '#',
          },
          {
            type: 'text',
            title: 'Why Everest',
            url: '#',
          },
        ],
      }"
    />

    <!-- video -->
    <div class="mt-[23rem] grid justify-end">
      <UIVideoThumb />
    </div>

    <!-- image -->
    <div class="bg-image absolute left-[31.4rem] top-[11.4rem] w-[104.6rem]">
      <div class="glow absolute left-[5rem] top-[8rem] w-[118.1rem]">
        <img src="/public/home/hero-glow.svg" alt="" />
      </div>
      <div class="computer absolute left-0 top-0">
        <img src="/public/home/ph-home-hero@2x.png" alt="" />
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
