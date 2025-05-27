<script setup>
const props = defineProps({
  theme: { default: null },
  hero: { default: false },
  margin: { default: true },
});
</script>

<template>
  <section
    class="relative w-full"
    :class="[
      theme == 'dark' && 'bg-shadowblue text-white',
      hero ? 'pt-hero-top' : 'pt-section-top',
      margin && 'px-side-mob s:px-side',
    ]"
  >
    <slot />
  </section>
</template>

<style scoped></style>
