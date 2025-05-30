<script setup>
const props = defineProps(["data"]);
const clients = ref(null);

const items = [
  {
    name: "Ryann Hart",
    title: "CPA and Revenue Accounting Sr. Manager",
    industry: "Saas",
    quote:
      "Everest has leveraged the deep industry expertise of its team to get the details right! From handling complex contract modifications and delivering actionable deferred revenue analytics to managing multi-entity and multi-currency journal entries, Everest simplifies the most intricate accounting processes.",
    image: "/clients/ph-success-photo.jpg",
  },
  {
    name: "Ryann Hart",
    title: "CPA and Revenue Accounting Sr. Manager",
    industry: "Saas",
    quote:
      "Everest has leveraged the deep industry expertise of its team to get the details right! From handling complex contract modifications and delivering actionable deferred revenue analytics to managing multi-entity and multi-currency journal entries, Everest simplifies the most intricate accounting processes.",
    image: "/clients/ph-success-photo.jpg",
  },
  {
    name: "Ryann Hart",
    title: "CPA and Revenue Accounting Sr. Manager",
    industry: "Saas",
    quote:
      "Everest has leveraged the deep industry expertise of its team to get the details right! From handling complex contract modifications and delivering actionable deferred revenue analytics to managing multi-entity and multi-currency journal entries, Everest simplifies the most intricate accounting processes.",
    image: "/clients/ph-success-photo.jpg",
  },
];

onMounted(() => {
  clients.value[0].openItem();
});
onUnmounted(() => {});
</script>

<template>
  <Section class="bg-skyblue pb-section-bot" side="lg">
    <!-- filter -->
    <div class="mb-[4rem] w-full text-center filter">
      <button class="inline-flex items-center gap-2">
        <span class="text-h5 font-barlow-cond font-bold uppercase"
          >filter by industry</span
        >
        <IconArrowFill color="fill-black" class="rotate-90" />
      </button>
    </div>

    <!-- list -->
    <div class="list">
      <ClientListItem
        v-for="(item, i) in items"
        :data="item"
        :key="i"
        ref="clients"
      />
    </div>
  </Section>
</template>

<style scoped></style>
