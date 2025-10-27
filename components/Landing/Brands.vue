<script setup>
const props = defineProps(["data", "order"]);
</script>

<template>
  <Section
    class="pb-section-bot-mob s:pb-section-bot"
    :class="order == 0 && 's:!pt-0'"
  >
    <div class="relative mx-auto max-w-base" ref="main">
      <Brands theme="light" :data="data" :scroll="false" template="landing" />
    </div>
  </Section>
</template>
