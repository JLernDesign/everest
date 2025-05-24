<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <div class="w-full pt-[4rem] text-center">
    <ul class="inline-flex space-x-nav">
      <li v-for="(item, i) in data">
        <BreadcrumbLink :data="item" :num="i" />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
