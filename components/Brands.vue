<script setup>
const props = defineProps(["data", "theme"]);
</script>

<template>
  <div>
    <h4
      class="text-tag-mob mb-3 text-center s:mb-6 s:text-tag"
      :class="theme == 'dark' ? 'text-white' : 'text-black'"
    >
      {{ data.title }}
    </h4>
    <div class="flex justify-center space-x-[4rem] s:space-x-[9rem]">
      <UILogo
        v-for="item in data.logos"
        :src="item.url ? item.url : item"
        class="max-s:shrink-0"
      />
    </div>
  </div>
</template>

<style scoped></style>
