<script setup>
const props = defineProps(["data", "edge"]);
</script>

<template>
  <Section
    class="pb-section-bot-mob bg-jaffa s:pb-[20rem]"
    :class="edge && 'pt-8 s:!pt-0'"
  >
    <UIJagEdge v-if="edge" color="fill-jaffa" />

    <SectionHeader
      :data="{
        eyebrow: 'Client Success',
        headline:
          'The ascent speaks volumes. So do the companies we\'ve helped get there.',
      }"
    />

    <!-- grid -->
    <div class="relative">
      <!-- gradient -->
      <div
        class="gradient absolute left-1/2 top-[24rem] hidden h-[178rem] w-[118rem] -translate-x-1/2 blur-[50px] s:block"
      >
        <img src="/public/ui/big-bg-gradient.svg" alt="" />
      </div>

      <div
        class="relative mt-[5rem] gap-[5.8rem] s:mt-[8rem] s:grid s:grid-cols-3 s:px-[12rem] max-s:space-y-[2rem]"
      >
        <!-- block -->
        <ClientBlock v-for="(item, i) in data.blocks" :data="item" :key="i" />
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
