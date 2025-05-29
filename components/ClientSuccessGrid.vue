<script setup>
const props = defineProps(["data", "edge"]);

const items = [
  {
    image: "/clients/ph-success-photo.jpg",
    quote:
      "Everest enables accounting teams to make huge productivity strides by streamlining table-stakes accounting work and giving them tools to become better business partners to the operational side of the house.",
    byline: {
      name: "Clark Hall (They/Them)",
      title: "2X Controller, Former Controller at Tegus",
    },
    color: "#ffffff",
    layout: "image-quote",
  },
  {
    image: null,
    quote:
      "Everest has leveraged the deep industry expertise of its team to get the details right! From handling complex contract modifications and delivering actionable deferred revenue analytics to managing multi-entity and multi-currency journal entries, Everest simplifies the most intricate accounting processes.",
    byline: {
      name: "Clark Hall (They/Them)",
      title: "2X Controller, Former Controller at Tegus",
    },
    color: "#ffffff",
    layout: "image-quote",
  },
  {
    image: null,
    logo: null,
    quote:
      "Everest carefully incorporated feedback from accounting professionals across industries, creating an exciting new ERP option for mid-level businesses.",
    byline: {
      name: "Clark Hall (They/Them)",
      title: "2X Controller, Former Controller at Tegus",
    },
    color: "#ECDD7B",
    layout: "big-quote",
  },
  {
    image: "/clients/ph-client-success@2x.png",
    logo: "/logos/ph-logo.svg",
    quote:
      "Everest has leveraged the deep industry expertise of its team to get the details right! From handling complex contract modifications and delivering actionable deferred revenue analytics to managing multi-entity and multi-currency journal entries, Everest simplifies the most intricate accounting processes.",
    byline: {
      name: "Clark Hall (They/Them)",
      title: "2X Controller, Former Controller at Tegus",
    },
    color: "#ffffff",
    layout: "two-col",
  },
  {
    image: null,
    logo: "/logos/ph-logo.svg",
    quote:
      "Everest enables accounting teams to make huge productivity strides by streamlining table-stakes accounting work and giving them tools to become better business partners to the operational side of the house.",
    byline: {
      name: "Clark Hall (They/Them)",
      title: "2X Controller, Former Controller at Tegus",
    },
    color: "#ffffff",
    layout: "image-quote",
  },
  {
    image: null,
    logo: null,
    quote:
      "Everest carefully incorporated feedback from accounting professionals across industries, creating an exciting new ERP option for mid-level businesses.",
    byline: {
      name: "Clark Hall (They/Them)",
      title: "2X Controller, Former Controller at Tegus",
    },
    color: "#ECDD7B",
    layout: "big-quote",
  },
];
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
        <img src="/public/clients/grid-gradient.svg" alt="" />
      </div>

      <div class="relative mt-[8rem] grid grid-cols-3 gap-[5.8rem] px-[12rem]">
        <!-- block -->
        <ClientBlock v-for="(item, i) in items" :data="item" :key="i" />
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
