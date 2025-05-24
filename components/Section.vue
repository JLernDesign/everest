<script setup>
const props = defineProps({
  theme: { default: null },
  hero: { default: false },
  margin: { default: true },
});
</script>

<template>
  <section
    class="relative w-full pt-section-top"
    :class="[
      theme == 'dark' && 'bg-shadowblue text-white',
      margin && 'px-side-mob s:px-side',
    ]"
  >
    <slot />
  </section>
</template>

<style scoped></style>
