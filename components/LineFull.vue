<script setup>
const props = defineProps(["fit"]);
</script>

<template>
  <hr
    class="absolute left-1/2 -translate-x-1/2 text-grayline"
    :class="fit == 'contain' ? 'w-full' : 'w-screen'"
  />
</template>

<style scoped></style>
