<script setup>
const props = defineProps(["color", "data", "left"]);
const image = ref(null);
let logo = props.data;

// format data for image
if (props.data) {
  if (props.color == "dark") {
    if (props.data.dark) {
      logo = props.data.dark.url;
    }
  } else {
    if (props.data.light) {
      logo = props.data.light.url;
    }
  }

  if (props.data.url) {
    logo = props.data.url;
  }
}
</script>

<template>
  <figure class="relative h-20 w-40 text-left s:h-20 s:w-40">
    <img
      :src="logo"
      alt=""
      class="h-full w-full object-contain"
      :class="left && 'object-left'"
      ref="image"
    />
  </figure>
</template>

<style scoped></style>
