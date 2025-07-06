<script setup>
const props = defineProps(["data", "subnav", "template"]);
</script>

<template>
  <Section :hero="true" class="pb-section-bot-mob s:pb-section-bot">
    <SectionHeader
      class="pt-[4rem]"
      align="center"
      :hero="true"
      :data="data"
      :subnav="subnav"
      :template="template"
    />
  </Section>
</template>
