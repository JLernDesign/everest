<script setup>
const props = defineProps(["theme"]);
</script>

<template>
  <Section :theme="theme" :margin="false">
    <SectionHeader
      class="border-b border-[#3D4856] bg-shadowblue px-side-mob pb-[11.5rem] s:px-side"
      :theme="theme"
      :data="{
        eyebrow: 'Product Overview',
        headline:
          'Everything modern SaaS businesses <br/>need in one unified platform.',
        breadcrumb: [
          'Quote to Cash',
          'Record to Report',
          'Revenue Recognition',
          'Quote to Cash',
          'Record to Report',
          'Revenue Recognition',
        ],
      }"
    />

    <div class="overview-wrap">
      <OverviewCard v-for="n in 3" />
    </div>
  </Section>
</template>

<style scoped></style>
