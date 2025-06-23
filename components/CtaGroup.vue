<script setup>
const props = defineProps(["data", "align", "theme", "wrap"]);
</script>

<template>
  <div
    class="buttons flex items-center space-x-btn-mob s:space-x-btn"
    :class="[
      align == 'center' ? 'items-center justify-center' : 'text-left',
      wrap &&
        'max-s:mx-side-mob max-s:flex-wrap max-s:space-x-0 max-s:space-y-8',
    ]"
  >
    <template v-for="item in data">
      <CtaBtn :data="item" v-if="item.style == 'button'">{{
        item.label
      }}</CtaBtn>
      <TextBtn
        :data="item"
        :color="theme == 'dark' ? 'white' : 'black'"
        v-else
        >{{ item.label }}</TextBtn
      >
    </template>
  </div>
</template>

<style scoped></style>
