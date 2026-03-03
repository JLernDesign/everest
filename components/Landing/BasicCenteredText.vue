<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <Section class="pb-[5rem] s:pb-section-bot">
    <SectionHeader :data="data.header" template="landing" />
  </Section>
</template>
