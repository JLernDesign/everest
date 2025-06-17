<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <Section :hero="true" class="bg-skyblue pb-section-bot-lg text-center">
    <!-- bg elements -->
    <UICloud type="1" class="-left-[11.5rem] top-[26.5rem] -scale-x-100" />
    <UICloud type="2" class="-left-[25rem] top-0" />
    <UICloud type="3" class="left-[64rem] top-[45.7rem]" />

    <SectionHeaderBig align="center" :data="{ headline: data }" />

    <!-- slider -->
    <Carousel
      class="slider-wrap ml-[9.65rem] mt-[22.5rem] !h-[50rem] -rotate-[15deg] space-x-[9rem]"
      :drag="true"
    >
      <div
        v-for="n in 6"
        class="item z-1 h-[27.7rem] w-[45.5rem] shrink-0 rotate-[15deg] rounded-base bg-white p-[3.2rem] pt-[3.75rem]"
      ></div>
    </Carousel>
  </Section>
</template>

<style scoped></style>
