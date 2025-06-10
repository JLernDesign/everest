<script setup>
const props = defineProps(["data", "theme"]);
</script>

<template>
  <Section :hero="true" side="none">
    <!-- side image -->
    <div class="absolute left-0 top-0 h-full w-[16rem] pt-hero-top">
      <img
        src="/public/why/ai-first-side@2x.png"
        alt=""
        class="h-full w-full object-cover"
      />
    </div>

    <div class="relative flex border-t border-t-whiteline px-side-lg">
      <!-- text -->
      <SectionHeader
        class="w-[57%] border-l border-l-whiteline pl-side pr-[7.5rem]"
        align="left"
        valign="center"
        theme="dark"
        :hero="true"
        :data="data"
      />

      <!-- image -->
      <div class="w-[43%] border-x border-x-whiteline">
        <img src="/public/why/ai-first-hero@2x.png" alt="" />
      </div>
    </div>

    <UIArrowDown theme="dark" />
  </Section>
</template>

<style scoped></style>
