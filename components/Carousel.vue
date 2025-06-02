<script setup>
import gsap from "gsap";
import horizontalLoop from "~/assets/js/horizontalLoop.js";

let ctx;
const main = ref();

onMounted(() => {
  let el;
  ctx = gsap.context((self) => {
    const items = gsap.utils.toArray(".item");

    let activeElement;
    const loop = horizontalLoop(items, {
      paused: true,
      draggable: true, // make it draggable
      center: true, // active element is the one in the center of the container rather than th left edge
      onChange: (element, index) => {
        // when the active element changes, this function gets called.
        activeElement && activeElement.classList.remove("active");
        element.classList.add("active");
        activeElement = element;
      },
    });

    items.forEach((item, i) =>
      item.addEventListener("click", () =>
        loop.toIndex(i, { duration: 1, ease: "power3.inOut" }),
      ),
    );

    // start on 1st slide
    loop.toIndex(0, { duration: 0 });
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <div class="flex h-[40rem] w-full overflow-hidden" ref="main">
    <slot />
  </div>
</template>

<style scoped></style>
