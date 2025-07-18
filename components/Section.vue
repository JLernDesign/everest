<script setup>
const props = defineProps({
  theme: { default: null },
  hero: { default: false },
  side: { default: "normal" },
  anim: { default: false },
});

const main = ref(null);

onMounted(() => {
  if (props.anim) {
    toggleOn(main.value, 0, 500);
  }
});
</script>

<template>
  <section
    class="section-wrap on relative z-1 w-full"
    :class="[
      theme == 'dark' && 'bg-shadowblue text-white',
      hero
        ? 'pt-hero-top-mob s:pt-hero-top'
        : 'pt-section-top-mob s:pt-section-top',
      side == 'normal' && 'px-side-mob s:px-side',
      side == 'lg' && 'px-side-mob s:px-side-lg',
      side == 'none' && 'px-0',
    ]"
    ref="main"
  >
    <slot />
  </section>
</template>

<style scoped></style>
