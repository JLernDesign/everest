<script setup>
import { gsap } from "gsap";

const props = defineProps(["anim"]);
const main = ref(null);
let ctx, tl;

onMounted(() => {
  if (props.anim) {
    // split headline into letters
    splitHeadline(main.value.querySelectorAll(".text"), main.value);

    // add animation context
    ctx = gsap.context((self) => {
      tl = gsap
        .timeline({
          onComplete: () => {
            fixOverflow();
          },
        })
        .pause();

      // get characters and reverse order
      const letters = gsap.utils.toArray(self.selector(".letter")).reverse();

      // animate each character on
      tl.to(letters, {
        duration: 0.65,
        opacity: 1,
        stagger: 0.03,
        yPercent: 0,
        ease: "power3.out",
      });

      setTimeout(() => {
        tl.play();
      }, 200);
    }, main.value);
  }
});

const fixOverflow = () => {
  const words = main.value.querySelectorAll(".word");
  words.forEach((word) => {
    word.classList.add("show");
  });
};
</script>

<template>
  <div ref="main">
    <slot />
  </div>
</template>

<style scoped></style>
