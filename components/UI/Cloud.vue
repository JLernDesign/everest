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
    <NuxtImg
      :src="`/ui/cloud-type${type}@2x.png`"
      alt=""
      :width="type == 1 ? 1046 : type == 2 ? 1117 : 1693"
      format="webp"
    />
  </div>
</template>

<style scoped></style>
