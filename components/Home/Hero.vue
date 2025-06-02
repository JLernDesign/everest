<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <Section :hero="true" class="!pt-[24.5rem] pb-[10rem]">
    <SectionHeader class="max-w-[60rem]" align="left" :data="data" />

    <!-- video -->
    <div class="relative z-5 mt-[14rem] grid justify-end">
      <UIVideoThumb />
    </div>

    <!-- image -->
    <UIGlow
      class="bottom-0 left-[36.2rem] top-[19.7rem] w-[118.1rem]"
      src="/home/hero-glow.svg"
    />
    <div
      class="bg-image absolute left-[31.4rem] top-[11.4rem] z-1 w-[104.6rem]"
    >
      <div class="computer absolute left-0 top-0 z-0">
        <img src="/public/home/ph-home-hero@2x.png" alt="" />
      </div>
    </div>

    <!-- clouds -->
    <UICloud type="2" class="-right-[32.4rem] -top-[30.5rem]" />
    <div class="cloud-group absolute left-0 top-[45.8rem] z-1">
      <UICloud type="3" class="left-[64.7rem] top-[23rem]" />
      <UICloud type="1" class="-left-[9rem] top-[27rem] -scale-x-100" />
      <UICloud
        type="1"
        class="left-[24.6rem] top-[44rem] !w-[91rem] -rotate-[10deg]"
      />
      <UICloud type="2" class="-left-[22.9rem] top-0" />
    </div>

    <UIArrowDown />
  </Section>
</template>

<style scoped></style>
