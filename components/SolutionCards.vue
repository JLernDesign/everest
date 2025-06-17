<script setup>
const props = defineProps(["theme", "header", "nav", "data"]);
</script>

<template>
  <BigTextClouds :data="data" />
  <Section :theme="theme" side="none" :class="!header && '!pt-0'">
    <SectionHeader
      v-if="header"
      class="border-b px-side-mob pb-[11.5rem] s:px-side"
      :class="theme == 'dark' ? 'border-[#3D4856] bg-shadowblue' : null"
      :theme="theme"
      :data="data.header"
      :breadcrumb="data.sections"
      ><UIGradientBot :theme="theme"
    /></SectionHeader>

    <div class="overview-wrap">
      <SolutionCard
        v-for="(item, i) in data.sections"
        :theme="theme"
        :nav="nav"
        :data="item"
        :num="i + 1"
      />
    </div>
  </Section>
</template>

<style scoped></style>
