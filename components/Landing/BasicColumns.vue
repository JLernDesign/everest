<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <Section class="pb-section-bot-mob s:pb-section-bot">
    <div
      class="relative mx-auto flex max-w-base flex-col items-start justify-between pt-6 s:flex-row"
      ref="main"
    >
      <!-- text -->
      <div class="text w-full s:w-1/2 s:pr-[11.5rem] max-s:mt-[5rem]">
        Basic Columns
      </div>

      <!-- image -->
      <div
        class="image w-full max-w-[72rem] overflow-hidden rounded-base-mob s:w-1/2 s:rounded-base"
      >
        Image
      </div>
    </div>
  </Section>
</template>
