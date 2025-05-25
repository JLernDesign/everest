<script setup>
const props = defineProps(["theme"]);
</script>

<template>
  <Section :theme="theme" class="mt-[26.8rem] bg-jaffa !pt-0 pb-section-bot">
    <UIJagEdge color="fill-jaffa" />

    <SectionHeader
      :theme="theme"
      :data="{
        eyebrow: 'Client Success',
        headline: 'Trusted by Innovative SaaS Companies',
        cta: [
          {
            type: 'button',
            title: 'Client Success',
            url: '#',
          },
        ],
      }"
    />
  </Section>
</template>

<style scoped></style>
