<script setup>
const props = defineProps(["data", "order"]);
const min = 4;
</script>

<template>
  <Section
    class="pb-section-bot-mob s:pb-section-bot"
    :class="order == 0 && 's:!pt-0'"
  >
    <div
      class="relative left-1/2 w-screen -translate-x-1/2"
      :class="data.logos.length <= min ? 'max-w-base' : ''"
      ref="main"
    >
      <Brands
        theme="light"
        :data="data"
        :scroll="data.logos.length > min ? true : false"
        template="landing"
      />
    </div>
  </Section>
</template>
