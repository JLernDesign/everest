<script setup>
const on = ref(false);

const hoverOn = () => {
  on.value = true;
};

const hoverOff = () => {
  on.value = false;
};

defineExpose({
  hoverOn,
  hoverOff,
});
</script>

<template>
  <div class="diamond-btn relative size-[5.4rem] max-s:scale-75">
    <div class="absolute h-full w-full rotate-45 rounded-diamond bg-red p-sm">
      <div
        class="grid h-full w-full place-content-center rounded-base-mob border-1 border-skyblue transition-colors duration-500 s:rounded-base"
        :class="on ? 'bg-skyblue' : null"
      >
        <IconArrowFill
          class="relative ml-1 -rotate-45 transition-[fill] duration-500"
          :color="on ? 'fill-red' : 'fill-skyblue'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
