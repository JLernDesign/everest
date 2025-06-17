<script setup>
const props = defineProps(["data", "stats"]);

const duplicated = [...props.stats, ...props.stats];
</script>

<template>
  <Section
    :hero="true"
    side="none"
    class="bg-skyblue pb-section-bot-lg text-center"
  >
    <!-- bg elements -->
    <UICloud type="1" class="-left-[11.5rem] top-[26.5rem] -scale-x-100" />
    <UICloud type="2" class="-left-[25rem] top-0" />
    <UICloud
      type="2"
      class="left-[22.1rem] top-[43.5rem] !w-[91rem] -rotate-[10deg]"
    />
    <UICloud type="3" class="left-[64rem] top-[45.7rem]" />

    <SectionHeaderBig align="center" :data="{ headline: data }" />

    <!-- slider -->
    <Carousel
      class="slider-wrap ml-[5.65rem] mt-[22.5rem] !h-[50rem] -rotate-[15deg] space-x-[9rem]"
      :drag="true"
      padding="70"
    >
      <div
        v-for="stat in duplicated"
        class="item z-1 -ml-[1.2rem] h-[27.7rem] w-[45.5rem] shrink-0 rotate-[15deg] rounded-base bg-white p-[3.2rem] pt-[3.75rem] text-left"
      >
        <IconTri color="fill-red" class="mb-[2.4rem]" />
        <h3 class="font-barlow-cond text-xl font-bold leading-xl">
          {{ stat.figure }}
        </h3>
        <p class="mt-[2.8rem] text-body-sm">
          {{ stat.label }}
        </p>
      </div>
    </Carousel>
  </Section>
</template>

<style scoped></style>
