<script setup></script>

<template>
  <div
    v-for="n in 2"
    class="line absolute left-0 h-0 w-full border-t border-t-grayline"
    :class="n == 1 ? 'top-[15rem]' : 'bottom-[15rem]'"
  ></div>
  <div
    v-for="n in 2"
    class="line absolute top-0 h-full w-0 border-l border-l-grayline"
    :class="n == 1 ? 'left-[15rem]' : 'right-[15rem]'"
  ></div>
</template>

<style scoped></style>
