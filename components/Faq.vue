<script setup>
const props = defineProps(["data"]);
const main = ref(null);
const faqs = ref(null);
let items;

onMounted(() => {
  items = main.value.querySelectorAll(".faq-answer");
});

const toggleMenu = (id) => {
  faqs.value.forEach((faq) => {
    if (faq.num != id) {
      faq.open = false;
    }
  });
  toggleExpand(id, items);
};
</script>

<template>
  <Section class="bg-shadowblue !py-side" theme="dark">
    <UITexture />

    <div class="relative z-1 rounded-base bg-shadowblue px-[12rem] py-[8.5rem]">
      <SectionHeader theme="dark" :data="data.header" />

      <div class="faq-items relative mt-[9.5rem]" ref="main">
        <FaqItem
          v-for="(item, i) in data.items"
          :func="toggleMenu"
          :data="item"
          :num="i"
          ref="faqs"
        />
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
