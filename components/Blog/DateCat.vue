<script setup>
const props = defineProps(['data', 'tags']);
</script>

<template>
  <div
    class="date absolute left-3 top-3 z-2 flex h-[1.875rem] items-center justify-center gap-6 rounded-btn bg-white px-3 pt-[.3rem] text-sm uppercase leading-normal s:left-4 s:top-4 s:h-10 s:pt-[.3rem]"
  >
    <time>{{ formatDateThumb(props.data.date) }}</time>
    <div class="category whitespace-pre text-[.8rem]">
      {{ cat }}
    </div>
  </div>
</template>

<style scoped></style>
