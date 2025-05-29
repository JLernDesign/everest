<script setup></script>

<template>
  <Section
    class="z-1 overflow-hidden !pt-section-top-lg pb-section-bot text-center"
  >
    <!-- bg elements -->
    <div
      v-for="n in 2"
      class="absolute left-0 w-[180rem]"
      :class="n == 1 ? 'bottom-0' : 'top-0 rotate-180'"
    >
      <UICloud
        type="2"
        class="-bottom-[26.5rem] -left-[23.6rem]"
        :class="n == 2 && 'rotate-180'"
      />
      <UICloud type="3" class="-bottom-[72.7rem] -right-[53.4rem]" />
      <UIGlow class="bottom-0 h-[21.8rem]" src="/product/gradient1.svg" />
    </div>

    <SectionHeaderBig
      align="center"
      :data="{
        headline: 'THE <br/>Everest <br/>Solution',
        intro:
          'Why SaaS Leaders Choose Everest: Purpose-built for complex SaaS needs, powered by AI automation. Gain global visibility, ensure compliance, and access real-time metrics—faster and safer.',
        breadcrumb: [
          'Unified Sales',
          'Native CRM integration',
          'Automated revenue contract ',
        ],
      }"
    />
  </Section>
</template>

<style scoped></style>
