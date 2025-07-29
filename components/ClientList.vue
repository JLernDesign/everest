<script setup>
import gsap from "gsap";

const props = defineProps(["data"]);
const clients = ref(null);
const section = ref(null);
let ctx;

onMounted(() => {
  // open first item
  setTimeout(() => {
    clients.value[0].openItem();
  }, 200);

  // parallax clouds
  ctx = gsap.context((self) => {
    const clouds = self.selector(".cloud");
    const cloudY = [40, 70];
    cloudParallax(section.value.$el, null, clouds, cloudY, "top bottom");
  }, section.value.$el);
});
onUnmounted(() => {
  ctx.revert();
});

const handleClick = (i) => {
  // close all items
  clients.value.forEach((client, index) => {
    if (index !== i) {
      client.closeItem();
    }
  });

  // open the clicked item
  if (!clients.value[i].open) {
    clients.value[i].openItem();
  }
};
</script>

<template>
  <Section
    class="bg-skyblue pb-section-bot-mob s:pb-section-bot"
    side="lg"
    :anim="true"
    ref="section"
  >
    <!-- bg elements -->
    <UICloud
      type="3"
      class="-top-[5rem] left-0 opacity-50"
      :flip="true"
      :anim="true"
      :speed="80"
      :delay="-70"
    />
    <UICloud
      type="3"
      class="left-0 top-[20rem] opacity-[.6]"
      :flip="true"
      :anim="true"
      :speed="65"
      :delay="-30"
    />

    <!-- filter -->
    <!-- <UIFilter :data="{ label: 'filter by industry' }" /> -->

    <!-- list -->
    <div class="list">
      <ClientListItem
        v-for="(item, i) in data.slides"
        :data="item"
        :key="i"
        ref="clients"
        @click="handleClick(i)"
      />
    </div>
  </Section>
</template>

<style scoped></style>
