<script setup>
const props = defineProps({
  theme: { default: null },
  hero: { default: false },
  side: { default: "normal" },
});
</script>

<template>
  <section
    class="relative z-1 w-full"
    :class="[
      theme == 'dark' && 'bg-shadowblue text-white',
      hero
        ? 'pt-hero-top-mob s:pt-hero-top'
        : 'pt-section-top-mob s:pt-section-top',
      side == 'normal' && 'px-side-mob s:px-side',
      side == 'lg' && 'px-side-mob s:px-side-lg',
      side == 'none' && 'px-0',
    ]"
  >
    <slot />
  </section>
</template>

<style scoped></style>
