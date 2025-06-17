<script setup>
const props = defineProps(["data", "edge"]);
</script>

<template>
  <Section class="bg-jaffa pb-[20rem]" :class="edge && '!pt-0'">
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
        class="gradient absolute left-1/2 top-[24rem] h-[178rem] w-[118rem] -translate-x-1/2 blur-[50px]"
      >
        <img src="/public/ui/big-bg-gradient.svg" alt="" />
      </div>

      <div class="relative mt-[8rem] grid grid-cols-3 gap-[5.8rem] px-[12rem]">
        <!-- block -->
        <ClientBlock v-for="(item, i) in data.blocks" :data="item" :key="i" />
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
