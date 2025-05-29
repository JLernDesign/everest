<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <Section :hero="true" side="none">
    <div class="px-side-lg flex border-y border-y-grayline">
      <!-- text -->
      <SectionHeader
        class="w-[57%] border-l border-l-grayline pl-side pr-[7.5rem] pt-[11rem]"
        align="left"
        :hero="true"
        :data="{
          headline: 'Quote to Cash',
          intro:
            'Everest brings structure and speed to every stage of the quote-to-cash cycle with a system built specifically for SaaS. From configuring complex contracts to managing billing, revenue recognition, and collections, everything happens in one platform. ',
          cta: { buttons: [{ label: 'Book A Demo' }] },
        }"
      />

      <!-- image -->
      <div class="w-[43%] border-x border-x-grayline">
        <img src="/public/product/ph-large-img@2x.png" alt="" />
      </div>
    </div>

    <!-- bottom space -->
    <div class="px-side-lg flex h-[33rem]">
      <div class="w-[57%] border-l border-l-grayline"></div>
      <div class="w-[43%] border-x border-x-grayline"></div>
    </div>

    <UIArrowDown />
  </Section>
</template>

<style scoped></style>
