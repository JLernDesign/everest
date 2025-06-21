<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <Section
    class="border-t border-t-whiteline !py-[13rem] px-[15pxrem] text-center"
  >
    <!--     <h2
      class="font-barlow-cond text-xxl-mob s:text-xxl-mob s:text-xxl-mob s:text-xxl font-semibold uppercase leading-xxl text-skyblue"
    >
      <span v-html="data.headline"></span>
    </h2> -->
    <h2
      class="bg-skyblue bg-[url(/why/bigtextglow.png)] bg-[size:82rem_82rem] bg-clip-text bg-[position:50rem_-40rem] bg-no-repeat font-barlow-cond text-xxl-mob font-semibold uppercase leading-xxl text-transparent s:text-xxl"
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
