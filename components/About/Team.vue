<script setup>
import gsap from "gsap";
const props = defineProps(["data"]);

const main = ref(null);
const sidebar = ref(null);
let mm, ctx;
const min = 650;
const people = ref(null);

onMounted(() => {
  // open first item
  people.value[0].openItem();
  //items = main.value.querySelectorAll(".item");

  mm = gsap.matchMedia();
  ctx = gsap.context((self) => {
    setTimeout(() => {
      // pin menu for duration of article
      mm.add("(min-width: " + min + "px)", () => {
        pinMenu(
          sidebar.value,
          self.selector(".start-pin"),
          self.selector(".end-pin"),
        );
      });
    }, 200);
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
  mm.revert();
});

const handleClick = (i) => {
  // close all
  people.value.forEach((person) => {
    person.open = false;
  });

  // open new
  people.value[i].open = true;
};
</script>

<template>
  <Section
    class="bg-skyblue pb-section-bot-mob s:!pt-0 s:pb-section-bot max-s:pt-0"
    side="lg"
  >
    <!-- bg elements -->
    <UICloud
      type="3"
      class="-left-[59rem] top-[73rem] -scale-x-100 opacity-50"
    />
    <UICloud
      type="3"
      class="left-[88rem] top-[28rem] -scale-x-100 opacity-50"
    />

    <div class="flex-col s:flex s:flex-row s:justify-between" ref="main">
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
            @mouseenter="handleClick(i)"
            @mousedown="handleClick(i)"
          />
        </div>
        <div class="end-pin"></div>
      </div>
    </div>
  </Section>
</template>
