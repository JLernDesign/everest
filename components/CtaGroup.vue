<script setup>
const props = defineProps(["data", "align"]);
</script>

<template>
  <div
    class="buttons flex items-center space-x-btn"
    :class="align == 'center' ? 'items-center justify-center' : 'text-left'"
  >
    <template v-for="item in data">
      <CtaBtn :to="item.url" v-if="item.type == 'button'">{{
        item.title
      }}</CtaBtn>
      <TextBtn :to="item.url" color="black" v-else>{{ item.title }}</TextBtn>
    </template>
  </div>
</template>

<style scoped></style>
