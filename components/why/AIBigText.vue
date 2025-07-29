<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <Section
    class="border-t border-t-whiteline px-side-mob text-center s:!py-[13rem] s:px-[15rem] max-s:pb-section-bot-mob"
  >
    <h2
      class="-tracking-md bg-skyblue bg-[url(/why/bigtextglow.png)] bg-[size:82rem_82rem] bg-clip-text bg-[position:50rem_-40rem] bg-no-repeat font-barlow-cond-semibold text-xxl-mob uppercase leading-xxl text-transparent s:text-xxl"
    >
      <span v-html="data.headline"></span>
    </h2>

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
