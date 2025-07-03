<script setup>
import gsap from "gsap";

const main = ref(null);
const sidebar = ref(null);
let mm, ctx;
const min = 650;

onMounted(() => {
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
</script>

<template>
  <Section class="bg-skyblue pb-section-bot-mob s:pb-section-bot" side="lg">
    <!-- bg elements -->
    <UICloud
      type="3"
      class="-left-[59rem] top-[73rem] -scale-x-100 opacity-50"
    />
    <UICloud
      type="3"
      class="left-[88rem] top-[28rem] -scale-x-100 opacity-50"
    />

    <div class="mt-[10rem] hidden flex-col s:flex s:flex-row" ref="main">
      <!-- intro text -->
      <div class="w-full s:w-[33%]" ref="sidebar">
        <div class="menu">
          <p>
            Our team is comprised of technology executives, business domain
            experts, software engineers, and designers from the world’s leading
            companies and brands.
          </p>
        </div>
      </div>

      <!-- list -->
      <div class="w-full pl-[14rem] leading-[1] s:w-[55%]">
        <div class="start-pin"></div>
        <div class="list">
          <ClientListItem
            v-for="i in 10"
            :data="{ title: 'Person Name' }"
            :key="i"
            ref="clients"
          />
        </div>
        <div class="end-pin"></div>
      </div>
    </div>
  </Section>
</template>
