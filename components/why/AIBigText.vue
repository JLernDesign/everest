<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <Section
    class="border-t border-t-whiteline !py-[13rem] px-[15pxrem] text-center"
  >
    <h2
      class="font-barlow-cond text-xxl font-semibold uppercase leading-xxl text-skyblue"
    >
      <span v-html="data.headline"></span>
    </h2>
    <!--    <h2
        class="bg-skyblue bg-[url(/home/hero-glow.svg)] bg-clip-text font-barlow-cond text-xxl font-semibold uppercase leading-xxl text-transparent"
      >
        <span v-html="data.headline"></span>
      </h2> -->

    <!-- cta buttons -->
    <CtaGroup
      v-if="data.cta"
      :data="data.cta.buttons"
      align="center"
      :theme="theme"
      class="pt-[5rem]"
    />
  </Section>
</template>

<style scoped></style>
