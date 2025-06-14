<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <div class="mb-[4rem] w-full text-center filter">
    <button class="inline-flex items-center gap-2">
      <span class="font-barlow-cond text-h5 font-bold uppercase">{{
        data.label
      }}</span>
      <IconArrowFill color="fill-black" class="rotate-90" />
    </button>
  </div>
</template>

<style scoped></style>
