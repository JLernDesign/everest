<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <li class="has-ul relative px-10 py-8 pb-7">
    <span
      class="ul mb-[.4rem] inline-block font-helvb leading-[1] after:bg-red"
      >{{ data.label }}</span
    >
    <span class="block">{{ data.description }}</span>
    <NuxtLink
      :to="getUrl(data)"
      class="absolute left-0 top-0 z-1 h-full w-full"
    ></NuxtLink>
  </li>
</template>

<style scoped></style>
