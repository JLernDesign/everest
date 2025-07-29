<script setup>
import gsap from "gsap";
const props = defineProps(["data"]);

const main = ref(null);
const sidebar = ref(null);
const people = ref(null);
const section = ref(null);
let ctx;

onMounted(() => {
  // open first item
  setTimeout(() => {
    people.value[0].openItem();
  }, 200);

  // parallax clouds
  ctx = gsap.context((self) => {
    const clouds = self.selector(".cloud");
    const cloudY = [30, 70];
    cloudParallax(
      section.value.$el,
      null,
      clouds,
      cloudY,
      "top bottom",
      "bottom top-=100",
    );
  }, section.value.$el);
});

onUnmounted(() => {
  ctx.revert();
});

const handleClick = (i) => {
  // close all items
  people.value.forEach((person, index) => {
    if (index !== i) {
      person.closeItem();
    }
  });

  // open the clicked item
  if (!people.value[i].open) {
    people.value[i].openItem();
  }
};
</script>

<template>
  <Section
    class="bg-skyblue pb-section-bot-mob s:!pt-0 s:pb-section-bot max-s:pt-0"
    side="lg"
    :anim="true"
    ref="section"
  >
    <!-- bg elements -->
    <UICloud
      type="3"
      class="left-0 top-[0rem] opacity-[.6]"
      :flip="true"
      :anim="true"
      :speed="80"
      :delay="-70"
    />
    <UICloud
      type="3"
      class="left-0 top-[20rem] opacity-[.7]"
      :flip="true"
      :anim="true"
      :speed="65"
      :delay="-30"
    />

    <div
      class="relative flex-col s:flex s:flex-row s:justify-between"
      ref="main"
    >
      <!-- intro text -->
      <div class="w-full s:w-[33%] max-s:text-center" ref="sidebar">
        <div class="menu">
          <span v-html="formatText(data.header.intro)"></span>

          <!-- cta buttons -->
          <CtaGroup
            v-if="data.header.cta"
            :data="data.header.cta.buttons"
            theme="light"
            class="pt-6 max-s:justify-center"
          />
        </div>
      </div>

      <!-- list -->
      <div class="w-full leading-[1] s:w-[55%] max-s:mt-[4rem]">
        <div class="start-pin"></div>
        <div class="list">
          <AboutTeamCard
            v-for="(person, i) in data.people"
            :data="person"
            :key="person.name"
            ref="people"
            @click="handleClick(i)"
          />
        </div>
        <div class="end-pin"></div>
      </div>
    </div>
  </Section>
</template>
