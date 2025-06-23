<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <Section
    class="pb-section-bot-mob z-1 overflow-hidden bg-skyblue !pt-section-top text-center s:pb-section-bot"
  >
    <!-- bg elements -->
    <div
      v-for="n in 2"
      class="absolute left-0 w-[180rem]"
      :class="n == 1 ? 'bottom-0' : 'top-0 rotate-180'"
    >
      <UICloud
        type="2"
        class="-bottom-[26.5rem] -left-[23.6rem]"
        :class="n == 2 && 'rotate-180'"
      />
      <UICloud type="3" class="-bottom-[72.7rem] -right-[53.4rem]" />
      <UIGlow class="bottom-0 h-[21.8rem]" src="/ui/edge-gradient.svg" />
    </div>

    <SectionHeaderBig
      align="center"
      :data="data.header"
      :breadcrumb="data.sections"
    />
  </Section>
</template>

<style scoped></style>
