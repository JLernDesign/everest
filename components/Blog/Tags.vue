<script setup>
const props = defineProps(['tags']);
/* :to="`/blog/category/${item.slug}`" */
</script>

<template>
  <ul class="tags relative z-10">
    <li
      v-for="(item, key) in tags"
      class="rounded-sm border-black border-1 uppercase font-medium px-[1.4rem] py-[.4rem]"
    >
      <NuxtLink to="/style" :data-id="item.tag" class="tag">{{
        item.tag
      }}</NuxtLink>
    </li>
  </ul>
</template>

<style scoped></style>
