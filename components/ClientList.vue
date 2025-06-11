<script setup>
const props = defineProps(["data"]);
const clients = ref(null);

onMounted(() => {
  clients.value[0].openItem();
});
onUnmounted(() => {});
</script>

<template>
  <Section class="bg-skyblue pb-section-bot" side="lg">
    <!-- bg elements -->
    <UICloud
      type="3"
      class="-left-[59rem] top-[73rem] -scale-x-100 opacity-50"
    />
    <UICloud
      type="3"
      class="left-[88rem] top-[28rem] -scale-x-100 opacity-50"
    />

    <!-- filter -->
    <div class="mb-[4rem] w-full text-center filter">
      <button class="inline-flex items-center gap-2">
        <span class="font-barlow-cond text-h5 font-bold uppercase"
          >filter by industry</span
        >
        <IconArrowFill color="fill-black" class="rotate-90" />
      </button>
    </div>

    <!-- list -->
    <div class="list">
      <ClientListItem
        v-for="(item, i) in data.slides"
        :data="item"
        :key="i"
        ref="clients"
      />
    </div>
  </Section>
</template>

<style scoped></style>
