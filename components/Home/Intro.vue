<script setup>
const props = defineProps(["data", "logos"]);

const loaded = ref(false);

onMounted(() => {
  setTimeout(() => {
    loaded.value = true;
  }, 500);
});
</script>

<template>
  <Section
    class="z-1 pb-section-bot-mob text-center transition-opacity duration-200 s:!pt-section-top-lg s:pb-section-bot"
    :class="loaded ? 'opacity-100' : 'opacity-0'"
  >
    <SectionHeaderBig align="center" :data="data" />

    <!-- brands -->
    <Brands
      v-if="logos"
      class="mt-[8rem] s:mt-[12rem]"
      theme="light"
      :data="logos"
      :scroll="true"
    />
  </Section>
</template>

<style scoped></style>
