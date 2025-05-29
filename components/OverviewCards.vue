<script setup>
const props = defineProps(["theme", "header", "nav"]);
</script>

<template>
  <Section :theme="theme" side="none" class="!pt-0">
    <SectionHeader
      v-if="header"
      class="border-b px-side-mob pb-[11.5rem] s:px-side"
      :class="theme == 'dark' ? 'border-[#3D4856] bg-shadowblue' : null"
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
      ><UIGradientBot
    /></SectionHeader>

    <div class="overview-wrap">
      <OverviewCard v-for="n in 3" :theme="theme" :nav="nav" />
    </div>
  </Section>
</template>

<style scoped></style>
