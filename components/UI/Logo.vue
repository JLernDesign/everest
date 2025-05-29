<script setup>
const props = defineProps(["src", "align", "small"]);
</script>

<template>
  <figure
    class="relative h-20 w-40 text-left"
    :class="!small ? 's:h-[8rem] s:w-[16rem]' : 's:h-[4rem] s:w-[13rem]'"
  >
    <img
      :src="src"
      alt=""
      class="h-full w-full object-contain"
      :class="align"
    />
  </figure>
</template>

<style scoped></style>
