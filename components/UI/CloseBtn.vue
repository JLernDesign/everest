<script setup>
const props = defineProps({
  close: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <button class="group absolute size-[3rem]" @click="props.close">
    <div
      v-for="n in 2"
      class="absolute left-1/2 top-1/2 h-0 w-[2rem] -translate-x-1/2 -translate-y-1/2 border-t-2 border-skyblue transition-colors duration-300 group-hover:border-red"
      :class="n == 1 ? 'rotate-45' : '-rotate-45'"
    ></div>
  </button>
</template>
