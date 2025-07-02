<script setup>
import gsap from "gsap";
import horizontalLoop from "~/assets/js/horizontalLoop.js";

const props = defineProps({
  drag: { default: true },
  center: { default: true },
  click: { default: false },
  start: { default: 0 },
  padding: { default: 0 },
});

let ctx;
const main = ref();
let loop;

const next = () => {
  if (loop) {
    loop.next({ duration: 1, ease: "power3.inOut" });
  }
};

const back = () => {
  if (loop) {
    loop.previous({ duration: 1, ease: "power3.inOut" });
  }
};

const goto = (n) => {
  if (loop) {
    loop.toIndex(n, { duration: 1, ease: "power3.inOut" });
  }
};

onMounted(() => {
  let el;
  ctx = gsap.context((self) => {
    const items = gsap.utils.toArray(".item");

    let activeElement;
    loop = horizontalLoop(items, {
      paused: true,
      paddingRight: props.padding,
      speed: 0.5,
      draggable: props.drag, // make it draggable
      center: props.center, // active element is the one in the center of the container rather than th left edge
      onChange: (element, index) => {
        // when the active element changes, this function gets called.
        activeElement && activeElement.classList.remove("active");
        element.classList.add("active");
        activeElement = element;
      },
    });

    if (props.click) {
      items.forEach((item, i) =>
        item.addEventListener("click", () =>
          loop.toIndex(i, { duration: 1, ease: "power3.inOut" }),
        ),
      );
    }

    // start on 1st or specified slide
    loop.toIndex(props.start, { duration: 0 });
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});

defineExpose({
  next,
  back,
  goto,
});
</script>

<template>
  <div class="flex w-full" ref="main">
    <slot />
  </div>
</template>

<style scoped></style>
