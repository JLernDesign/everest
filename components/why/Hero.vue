<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <Section :hero="true" class="pb-[12rem] s:pb-section-bot-lg">
    <!-- bg elements -->
    <UIGlow class="top-0 hidden s:block" src="/why/gradient1.svg" />
    <UIGlow class="bottom-0 hidden s:block" src="/why/gradient2.svg" />
    <UIGlow
      class="left-0 top-0 block h-full w-full !blur-0 s:hidden [&_img]:h-full [&_img]:w-full"
      src="/why/gradient-mob.svg"
    />
    <div
      v-for="n in 2"
      class="ornament absolute top-0 hidden h-full w-[56rem] s:block"
      :class="n == 1 ? 'left-0' : 'right-0 -scale-x-100'"
    >
      <img
        src="/public/why/line-decor.svg"
        alt=""
        class="h-full w-full object-cover"
      />
    </div>
    <div class="ornament absolute bottom-0 left-0 block w-full s:hidden">
      <img
        src="/public/why/line-decor-mob.svg"
        alt=""
        class="h-full w-full object-cover"
      />
    </div>

    <SectionHeader
      class="pt-[2rem] s:pt-[4rem]"
      align="center"
      :hero="true"
      :data="data"
      :wrap="true"
      :anim="true"
    />
  </Section>
</template>

<style scoped></style>
