<script setup>
const props = defineProps(["data", "theme"]);
</script>

<template>
  <Section :hero="true" side="none">
    <!-- side image -->
    <div
      class="absolute left-0 top-0 hidden h-full w-[16rem] pt-hero-top s:block"
    >
      <img
        src="/public/why/ai-first-side@2x.png"
        alt=""
        class="h-full w-full object-cover"
      />
    </div>

    <div
      class="relative flex flex-col border-t border-t-whiteline px-side-mob s:flex-row s:px-side-lg"
    >
      <!-- text -->
      <SectionHeader
        class="border-l border-l-whiteline p-side-mob s:w-[57%] s:pl-side s:pr-[7.5rem] max-s:border-r max-s:border-r-whiteline max-s:pb-[4rem]"
        align="left"
        valign="center"
        theme="dark"
        :hero="true"
        :data="data"
      />

      <!-- image -->
      <hr
        class="relative left-1/2 w-screen -translate-x-1/2 text-whiteline s:hidden"
      />
      <div class="border-x border-x-whiteline s:aspect-[.76] s:w-[43%]">
        <img src="/public/why/ai-first-hero@2x.png" alt="" />
      </div>
    </div>

    <UIArrowDown class="max-s:hidden" theme="dark" />
  </Section>
</template>

<style scoped></style>
