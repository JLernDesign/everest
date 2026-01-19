<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const props = defineProps(["data", "align", "subnav", "anim"]);
const main = ref(null);
const video = ref(null);

if (isSSR()) {
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);
}

// check for inline image marker
const hl = props.data.headline.split("[]");
let hasBlock = false;
if (hl.length > 1) {
  hasBlock = true;
}

// headline animation
let ctx, tl;
const stag = props.anim == "scroll" ? 0.02 : 0.03;

onMounted(() => {
  // split headline into letters
  splitHeadline(main.value.querySelectorAll(".text"), main.value);

  // set rock animation
  const rock = main.value.querySelector(".rock-anim");
  if (rock) {
    gsap.set(rock, {
      opacity: 0,
      yPercent: 100,
    });
  }

  // add animation context
  ctx = gsap.context((self) => {
    // turn on rock animation when in view
    if (hasBlock) {
      playInView(main.value, null, toggleVideo);
    }

    // setup timeline for headline animation
    if (props.anim == "auto") {
      tl = gsap.timeline().pause();
    } else {
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: main.value,
          start: "top 90%",
          end: "bottom 60%",
          scrub: true,
        },
      });
    }

    // get characters and reverse order
    const letters = gsap.utils.toArray(self.selector(".letter")).reverse();
    const rock = self.selector(".rock-anim");

    // animate each character on
    tl.to(letters, {
      duration: props.anim == "scroll" ? 0.5 : 0.75,
      opacity: 1,
      stagger: stag,
      yPercent: 0,
      ease: props.anim == "scroll" ? "power3.inOut" : "power3.out",
    });

    // show rock animation
    tl.to(
      rock,
      {
        duration: props.anim == "scroll" ? 0.5 : 0.75,
        opacity: 1,
        yPercent: 0,
        ease: props.anim == "scroll" ? "power3.inOut" : "power3.out",
      },
      stag * 3,
    );

    // play timeline on mounted
    if (props.anim == "auto") {
      setTimeout(() => {
        tl.play();
      }, 200);
    }
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});

const toggleVideo = (ev) => {
  if (video.value) {
    ev == "enter" ? video.value.playVideo() : video.value.pauseVideo();
  }
};
</script>

<template>
  <header
    v-if="data != undefined"
    class="relative space-y-header-mob s:space-y-header-lg"
  >
    <h2
      class="font-barlow-cond-semibold text-xxl-mob uppercase leading-xxl -tracking-md-mob s:text-xxl s:-tracking-md"
      ref="main"
    >
      <!-- has inline block element -->
      <template v-if="hasBlock">
        <span class="text" v-html="formatText(hl[0])"></span>
        <span
          class="rock-anim -mr-2 inline-flex h-[6rem] w-[10.6rem] overflow-hidden rounded-[.7rem] bg-[url(/ui/callout-gradient@2x.png)] bg-cover s:-mr-10 s:h-[16.8rem] s:w-[32.1rem] s:rounded-[.9rem]"
        >
          <VideoAnim
            file="RevolvingRockLogo1"
            :loop="true"
            size="fill"
            ref="video"
          />
        </span>
        <span class="text" v-html="formatText(hl[1])"></span>
      </template>

      <!-- plain headline -->
      <template v-else>
        <span class="text" v-html="formatText(data.headline)"></span>
      </template>
    </h2>

    <p
      class="mx-auto max-w-[80rem] text-body-md-mob leading-md s:text-body-md"
      v-html="formatText(data.intro)"
    ></p>

    <!-- cta buttons -->
    <CtaGroup v-if="data.cta" :data="data.cta.buttons" :align="align" />

    <!-- subpage nav -->
    <SubNav v-if="subnav" :data="subnav" class="hidden s:block" />
  </header>
</template>

<style scoped></style>
