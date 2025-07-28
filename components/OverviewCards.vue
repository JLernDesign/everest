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
    // Get all OverviewCard elements
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

      // control cloud movement for each card
      ScrollTrigger.create({
        trigger: card,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => {
          card.classList.add("on");
          console.log("start clouds " + index);
        },
        onEnterBack: () => {
          card.classList.add("on");
          console.log("start clouds " + index);
        },
        onLeave: () => {
          card.classList.remove("on");
          console.log("stop clouds " + index);
        },
        onLeaveBack: () => {
          card.classList.remove("on");
          console.log("stop clouds " + index);
        },
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
                start: "top 75%",
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
  <Section :theme="theme" side="none">
    <SectionHeader
      class="border-b border-[#3D4856] bg-shadowblue px-side-mob pb-[6rem] s:px-side s:pb-[11.5rem]"
      :data="data.header"
      theme="dark"
      ><UIGradientBot :theme="theme"
    /></SectionHeader>

    <div class="overview-wrap relative" ref="overviewWrap">
      <OverviewCard
        v-for="(item, i) in data.sections"
        :theme="theme"
        :nav="true"
        :data="item"
        :num="i + 1"
        :cards="data.sections"
        :id="item.id"
      />
    </div>
  </Section>
</template>

<style scoped></style>
