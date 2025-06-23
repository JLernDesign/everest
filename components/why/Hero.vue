<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <Section :hero="true" class="pb-section-bot-mob s:pb-section-bot-lg">
    <!-- bg elements -->
    <UIGlow class="top-0" src="/why/gradient1.svg" />
    <UIGlow class="bottom-0" src="/why/gradient2.svg" />
    <div
      v-for="n in 2"
      class="ornament absolute top-0 h-full w-[56rem]"
      :class="n == 1 ? 'left-0' : 'right-0 -scale-x-100'"
    >
      <img
        src="/public/why/line-decor.svg"
        alt=""
        class="h-full w-full object-cover"
      />
    </div>

    <SectionHeader
      class="pt-[4rem]"
      align="center"
      :hero="true"
      :data="data"
      :wrap="true"
    />
  </Section>
</template>

<style scoped></style>
