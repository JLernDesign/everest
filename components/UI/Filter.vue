<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <div class="mb-[2.5rem] w-full text-center filter s:mb-[4rem]">
    <button class="inline-flex items-center gap-2">
      <span class="font-barlow-cond text-h5 font-bold uppercase">{{
        data.label
      }}</span>
      <IconArrowFill color="fill-black" class="rotate-90" />
    </button>
  </div>
</template>

<style scoped></style>
