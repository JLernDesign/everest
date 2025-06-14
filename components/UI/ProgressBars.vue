<script setup></script>

<template>
  <div class="thumb-nav mt-[1.5rem] inline-flex space-x-2">
    <div
      v-for="n in 3"
      class="item size-[1rem] rounded-[.5rem] border-1 border-red"
      :class="n == 1 && 'w-[2.5rem] bg-red'"
    ></div>
  </div>
</template>
