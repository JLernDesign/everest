<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <Section :hero="true" side="none">
    <!-- bg elements -->
    <UIGlow
      class="bottom-[0rem] left-1/2 h-[36rem] !w-[118rem] -translate-x-1/2"
      src="/ui/edge-gradient-sm.svg"
    />
    <UICloud type="2" class="-top-[30rem] left-[99rem]" />
    <UICloud type="2" class="left-0 top-[68rem]" />
    <UICloud type="3" class="left-[73rem] top-[65rem]" />

    <div class="px-side-lg relative flex border-y border-y-grayline">
      <!-- text -->
      <SectionHeader
        class="w-[57%] border-l border-l-grayline pl-side pr-[7.5rem] pt-[7.5rem]"
        align="left"
        :hero="true"
        :data="{
          headline: 'Quote <br/>to Cash',
          intro:
            'Everest brings structure and speed to every stage of the quote-to-cash cycle with a system built specifically for SaaS. From configuring complex contracts to managing billing, revenue recognition, and collections, everything happens in one platform. ',
          cta: { buttons: [{ label: 'Book A Demo' }] },
        }"
      />

      <!-- image -->
      <div class="w-[43%] border-x border-x-grayline">
        <img src="/public/product/ph-large-img@2x.png" alt="" />
      </div>

      <!-- number -->
      <div
        class="absolute right-0 top-0 pr-side pt-[5rem] font-barlow-cond text-num font-bold"
      >
        01
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
