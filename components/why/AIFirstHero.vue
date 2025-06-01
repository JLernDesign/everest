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

    <div class="px-side-lg relative flex border-t border-t-whiteline">
      <!-- text -->
      <SectionHeader
        class="w-[57%] border-l border-l-whiteline pl-side pr-[7.5rem]"
        align="left"
        valign="center"
        theme="dark"
        :hero="true"
        :data="{
          headline: 'AI-First <br/>Architecture',
          intro:
            'With Everest, AI isn’t a feature. It’s the foundation. Prebuilt and customizable AI agents, safe experimentation environments, and vendor-agnostic model support give you flexibility, control, and speed that legacy ERPs can’t match.',
          cta: { buttons: [{ label: 'Book A Demo' }] },
        }"
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
