<script setup>
const props = defineProps(["data"]);
const main = ref(null);
const faqs = ref(null);
let items;

onMounted(() => {
  items = main.value.querySelectorAll(".faq-answer");
});

const toggleMenu = (id) => {
  //const id = e.target.dataset.num;
  console.log(id);
  console.log(items);

  faqs.value.forEach((faq) => {
    faq.open = false;
  });
  toggleExpand(id, items);
};
</script>

<template>
  <Section class="bg-shadowblue !py-side" theme="dark">
    <UITexture />

    <div
      class="relative z-1 rounded-base bg-shadowblue px-[11.5rem] py-[8.5rem]"
    >
      <SectionHeader
        theme="dark"
        :data="{
          eyebrow: 'FAQ',
          headline: 'Frequently Asked Questions',
          intro:
            'Hear how Everest is helping SaaS finance and operations teams streamline their quote-to-cash cycles and drive real financial impact.',
        }"
      />

      <div class="faq-items relative mt-[9.5rem]" ref="main">
        <FaqItem v-for="n in 3" :func="toggleMenu" :num="n - 1" ref="faqs" />
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
