<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <Section
    class="z-1 overflow-hidden bg-skyblue !pt-section-top pb-section-bot-mob text-center s:pb-section-bot"
    :anim="true"
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
      <UIGlow class="glower bottom-0 h-[21.8rem]" src="/ui/edge-gradient.svg" />
    </div>

    <SectionHeaderBig
      align="center"
      :data="data.header"
      :subnav="data.sections"
      anim="scroll"
    />
  </Section>
</template>

<style scoped></style>
