<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps(["theme", "header", "nav", "data"]);
const overviewWrap = ref(null);
let mm;
const min = 650;

onMounted(() => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  mm = gsap.matchMedia();
  // Only apply ScrollTrigger effects on screens above 650px
  mm.add("(min-width: " + min + "px)", () => {
    // Get all SolutionCard elements
    const cards = overviewWrap.value.querySelectorAll(".overview-card");

    // Create pinning for each card with proper stacking
    cards.forEach((card, index) => {
      // Set z-index for stacking order (later cards have higher z-index)
      card.style.zIndex = index + 1;

      // Pin each card to the top of the viewport
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      });

      // Create scrub animation for cover opacity
      if (index > 0) {
        const previousCard = cards[index - 1];
        const coverElement = previousCard.querySelector(".cover");
        if (coverElement) {
          gsap.fromTo(
            coverElement,
            { opacity: 0 },
            {
              opacity: 1,
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "top top",
                scrub: true,
              },
            },
          );
        }
      }
    });
  });
});

onUnmounted(() => {
  mm && mm.revert();
});
</script>

<template>
  <BigTextClouds :data="data" />
  <Section :theme="theme" side="none" :class="!header && '!pt-0'">
    <SectionHeader
      v-if="header"
      class="border-b px-side-mob pb-[11.5rem] s:px-side"
      :class="theme == 'dark' ? 'border-[#3D4856] bg-shadowblue' : null"
      :theme="theme"
      :data="data.header"
      :subnav="data.sections"
      ><UIGradientBot :theme="theme"
    /></SectionHeader>

    <div class="overview-wrap relative" ref="overviewWrap">
      <SolutionCard
        v-for="(item, i) in data.sections"
        :theme="theme"
        :nav="nav"
        :data="item"
        :num="i + 1"
        :id="item.id"
      />
    </div>
  </Section>
</template>

<style scoped></style>
