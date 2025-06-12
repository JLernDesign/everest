<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <li class="has-ul relative grid content-center px-14 py-8 pb-7">
    <template v-if="data != ''">
      <span class="relative flex gap-[3rem]">
        <!-- icon -->
        <span v-if="data.icon" class="icon block size-[4rem] shrink-0"
          ><img :src="data.icon.url" alt=""
        /></span>
        <span
          v-else
          class="icon block size-[3.8rem] shrink-0 rounded-full border-2 border-red"
        ></span>

        <!-- text -->
        <span class="max-w-[24rem]">
          <span
            class="ul mb-[.4rem] inline-block font-helvb leading-[1] after:bg-red"
            >{{ data.label }}</span
          >
          <span class="block">{{ data.description }}</span>
        </span>
      </span>
      <NuxtLink
        :to="getUrl(data)"
        class="absolute left-0 top-0 z-1 h-full w-full"
      ></NuxtLink>
    </template>
  </li>
</template>

<style scoped></style>
