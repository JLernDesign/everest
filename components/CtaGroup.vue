<script setup>
const props = defineProps(["data", "align", "theme"]);
</script>

<template>
  <div
    class="buttons space-x-btn-mob flex items-center s:space-x-btn"
    :class="align == 'center' ? 'items-center justify-center' : 'text-left'"
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
