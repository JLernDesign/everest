<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <li class="grid content-center px-10 py-8 pb-7">
    <span class="relative flex gap-[1.8rem]">
      <span
        class="icon block size-[3.8rem] shrink-0 rounded-full border-2 border-red"
      ></span>
      <span>
        <span class="mb-[.1rem] block font-helvb">Everest vs. Legacy ERP</span>
        Automate financial consolidations and reporting.
      </span>
    </span>
    <NuxtLink
      href="/"
      class="absolute left-0 top-0 z-1 h-full w-full"
    ></NuxtLink>
  </li>
</template>

<style scoped></style>
