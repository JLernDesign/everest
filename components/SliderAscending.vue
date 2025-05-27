<script setup>
const props = defineProps(["theme"]);

const slides = [
  {
    color: "#8FC8E3",
    headline: "Achieving Real-Time <br/>Financial Visibility",
    description:
      "Compared to a business using multiple, fragmented systems to run their business operations. We provide a fully end to end finance and accounting suite on a scalable, unified platform. ",
  },
  {
    color: "#E3D4C4",
    headline: "Live Sandboxing",
    description:
      "Our novel innovation that we refer to as Live Sandboxing is alleviating one of the biggest challenges in ERP customization which enables businesses to make unlimited, quick, cost-effective changes.",
  },
  {
    color: "#ECDD7B",
    headline: "Managing SaaS <br/>Complexity",
    description:
      "We are built for the Saas industry- these are companies that are typically synonymous with subscription based revenue models and a heavy dependence on cloud infrastructure. ",
  },
  {
    color: "#738B56",
    headline: "Managing SaaS <br/>Complexity",
    description:
      "We are built for the Saas industry- these are companies that are typically synonymous with subscription based revenue models and a heavy dependence on cloud infrastructure. ",
  },
  {
    color: "#FC5161",
    headline: "Managing SaaS Complexity",
    description:
      "We are built for the Saas industry- these are companies that are typically synonymous with subscription based revenue models and a heavy dependence on cloud infrastructure. ",
  },
];
</script>

<template>
  <Section
    :theme="theme"
    class="pb-section-bot pt-section-top-lg"
    :margin="false"
  >
    <SectionHeader
      :theme="theme"
      :data="{
        eyebrow: 'Why Everest',
        headline: 'Solving the challenges that <br/>hold SaaS companies back.',
        intro:
          'At Everest, we don’t just automate your core <br/>business processes—we fortify them.',
        cta: [
          {
            type: 'button',
            title: 'Read More',
            url: '#',
          },
        ],
      }"
    />

    <!-- slider -->
    <Carousel class="slider-wrap mt-[12rem] h-[62.8rem] space-x-[9rem]">
      <div
        v-for="(slide, i) in slides"
        class="item grid h-[62.8rem] w-[45.5rem] shrink-0 cursor-grab rounded-base p-[3.2rem] pt-[3.75rem]"
        :style="`background-color:${slide.color}`"
      >
        <h3 class="relative font-barlow-cond text-sm font-bold leading-[.95]">
          <IconTri color="fill-black" class="mb-[1.35rem]" />
          <span v-html="slide.headline"></span>
        </h3>

        <div
          class="absolute bottom-0 left-0 h-auto w-full p-[3.2rem] text-body-sm leading-sm"
        >
          <p>{{ slide.description }}</p>
        </div>
      </div>
      <div class="item end-spacer w-0 shrink-0"></div>
    </Carousel>
  </Section>
</template>

<style scoped></style>
