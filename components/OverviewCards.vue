<script setup>
const props = defineProps(["theme", "header", "nav", "data"]);
</script>

<template>
  <Section :theme="theme" side="none" :class="!header && '!pt-0'">
    <SectionHeader
      v-if="header"
      class="border-b px-side-mob pb-[11.5rem] s:px-side"
      :class="theme == 'dark' ? 'border-[#3D4856] bg-shadowblue' : null"
      :theme="theme"
      :data="data.header"
      ><UIGradientBot :theme="theme"
    /></SectionHeader>

    <div class="overview-wrap">
      <OverviewCard
        v-for="(item, i) in data.sections"
        :theme="theme"
        :nav="true"
        :data="item"
        :num="i + 1"
      />
    </div>
  </Section>
</template>

<style scoped></style>
