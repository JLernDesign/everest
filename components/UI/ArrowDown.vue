<script setup>
const props = defineProps(["theme"]);
const arrow = ref(null);

onMounted(() => {
  // hide/show arrow
  useEventListener(window, "scroll", () => {
    if (window.scrollY > 0) {
      arrow.value.classList.add("off");
    } else {
      arrow.value.classList.remove("off");
    }
  });
});
</script>

<template>
  <!-- arrow down -->
  <div
    class="arrow-down fixed left-0 top-[100vh] z-5 -mt-[8.2rem] w-[1.5rem] pl-side"
    ref="arrow"
  >
    <IconArrow
      :color="theme == 'dark' ? 'stroke-white' : 'stroke-black'"
      class="rotate-90 -scale-y-100"
    />
  </div>
</template>

<style scoped>
.arrow-down {
  transition: var(--ease-out);
  &.off {
    transition-timing-function: cubic-bezier(1, 0, 0.5, 1);
    transform: translateX(-8rem);
  }
}
</style>
