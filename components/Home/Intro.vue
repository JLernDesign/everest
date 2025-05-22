<script setup></script>

<template>
  <Section :hero="true" class="!pt-section-top-lg pb-section-bot text-center">
    <!-- headline -->
    <div class="space-y-header-lg">
      <h2 class="font-barlow-cond text-xxl font-semibold leading-xxl">
        A COMPLETELY REIMAGINED <br />
        <span
          class="-mr-10 inline-flex h-[16.8rem] w-[32.1rem] rounded-[.9rem] bg-[#9DBEE3]"
        ></span>
        ERP
      </h2>
      <p class="mx-auto max-w-[96rem] text-body-md leading-md">
        Why SaaS Leaders Choose Everest: Purpose-built for complex SaaS needs,
        powered by AI automation. Gain global visibility, ensure compliance, and
        access real-time metrics—faster and safer.
      </p>

      <div class="space-x-btn">
        <CtaBtn to="#">Try Everest</CtaBtn>
        <TextBtn to="#" color="black">About</TextBtn>
      </div>
    </div>

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
