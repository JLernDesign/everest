<script setup>
const props = defineProps(["type"]);
</script>

<template>
  <div
    class="absolute z-0"
    :class="[
      type == 1 && 'w-[129.3rem]',
      type == 2 && 'w-[111.7rem]',
      type == 3 && 'w-[169.3rem]',
    ]"
  >
    <img :src="`/ui/cloud-type${type}.png`" alt="" />
  </div>
</template>

<style scoped></style>
