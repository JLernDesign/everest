<script setup>
const props = defineProps(["data"]);
const clients = ref(null);

onMounted(() => {
  clients.value[0].openItem();
});
onUnmounted(() => {});
</script>

<template>
  <Section class="pb-section-bot-mob bg-skyblue s:pb-section-bot" side="lg">
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
    <UIFilter :data="{ label: 'filter by industry' }" />

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
