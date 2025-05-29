<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <Section :hero="true" class="pb-section-bot-lg">
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
      :data="{
        headline: 'Why SaaS leaders trust Everest',
        intro:
          'SaaS businesses are not one-size-fits-all. They need enterprise <br/>resource planning that keeps up with their unique pace, business <br/>model, and evolving team. That’s what makes Everest stand out.',
        cta: {
          buttons: [
            { label: 'Everest vs. Legacy ERP' },
            { label: 'Everest vs. Legacy ERP' },
          ],
        },
      }"
    />
  </Section>
</template>

<style scoped></style>
