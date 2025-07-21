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
      class="absolute left-0 h-[40rem] w-[180rem]"
      :class="n == 1 ? 'bottom-0' : 'top-0 scale-y-[-1]'"
    >
      <UICloud
        type="2"
        class="-left-[23.6rem] top-0"
        :anim="true"
        :speed="60"
      />
      <UICloud
        type="3"
        class="-right-[53.4rem] top-[5rem]"
        :anim="true"
        :speed="40"
      />
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
