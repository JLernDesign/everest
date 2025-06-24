<script setup>
const props = defineProps(["data", "stats"]);

let slider = true;
let duplicated = [];
if (props.stats.length <= 3) {
  duplicated = props.stats;
} else {
  duplicated = [...props.stats, ...props.stats];
  slider = true;
}
</script>

<template>
  <Section
    :hero="true"
    side="none"
    class="max-s:pt-hero-mob-lg bg-skyblue pb-[16rem] text-center s:pb-section-bot-lg"
  >
    <!-- bg elements -->
    <UICloud type="1" class="-left-[11.5rem] top-[26.5rem] -scale-x-100" />
    <UICloud type="2" class="-left-[25rem] top-0" />
    <UICloud
      type="2"
      class="left-[22.1rem] top-[43.5rem] !w-[91rem] -rotate-[10deg]"
    />
    <UICloud type="3" class="left-[64rem] top-[45.7rem]" />

    <SectionHeaderBig
      align="center"
      :data="{ headline: data }"
      class="px-side-mob s:px-side"
    />

    <!-- slider -->
    <Carousel
      class="slider-wrap mt-[7.5rem] -rotate-[15deg] s:mt-[22.5rem] s:!h-[50rem] s:space-x-[10rem]"
      :class="
        slider ? 'ml-[1.6rem] s:ml-[5.65rem]' : 'justify-center s:ml-[3.5rem]'
      "
      :drag="slider && true"
      :center="slider && true"
      :start="slider && 1"
    >
      <div
        v-for="stat in duplicated"
        class="item h-full shrink-0 rotate-[15deg] px-[1.6rem] max-s:w-[35.2rem]"
      >
        <div
          class="rounded-base-mob z-1 bg-white p-[2rem] text-left s:-ml-[1.2rem] s:h-[27.7rem] s:w-[40rem] s:rounded-base s:p-[3.2rem] s:pt-[3.75rem]"
        >
          <IconTri color="fill-red" class="mb-[2.4rem]" />
          <h3
            class="text-xl-mob font-barlow-cond font-bold leading-xl s:text-xl"
          >
            {{ stat.figure }}
          </h3>
          <p class="mt-[2.8rem] text-body-sm-mob s:text-body-sm">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </Carousel>
  </Section>
</template>

<style scoped></style>
