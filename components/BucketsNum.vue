<script setup></script>

<template>
  <Section :margin="false" class="pb-section-bot-lg bg-shadowblue">
    <UIJagEdge color="fill-shadowblue" />

    <SectionHeader
      theme="dark"
      :data="{
        eyebrow: 'The Problem',
        headline: 'Where traditional processes break down',
        intro:
          'Without a unified system, SaaS companies face costly delays, manual errors, and missed revenue opportunities across the quote-to-cash cycle.',
      }"
    />

    <!-- buckets -->
    <div class="px-side-lg mt-[8rem] flex flex-nowrap gap-[6rem]">
      <div
        v-for="n in 3"
        class="bucket w-[45.5rem] space-y-10 rounded-base bg-shadowbluelt p-[3rem]"
      >
        <IconTri color="fill-red" />
        <div
          class="num font-barlow-cond text-xxl font-semibold leading-xxl text-shadowblue"
        >
          01
        </div>
        <h3 class="font-barlow-cond text-sm font-bold leading-[.94] text-red">
          Fragmented sales, billing, and finance systems.
        </h3>
        <p class="text-body-sm leading-sm text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
