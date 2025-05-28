<script setup>
const props = defineProps({
  theme: { default: null },
  hero: { default: false },
  margin: { default: true },
  side: { default: "normal" },
});
</script>

<template>
  <section
    class="relative w-full"
    :class="[
      theme == 'dark' && 'bg-shadowblue text-white',
      hero ? 'pt-hero-top' : 'pt-section-top',
      margin && side == 'normal' ? 'px-side-mob s:px-side' : null,
      side == 'lg' && 'px-side-lg',
    ]"
  >
    <slot />
  </section>
</template>

<style scoped></style>
