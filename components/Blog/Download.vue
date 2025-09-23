<script setup>
const props = defineProps(["data"]);

const formattedUrl = computed(() => {
  return props.data.file.url + "?dl=" + props.data.file.filename;
});
</script>

<template>
  <div class="content-block blog-download w-full [&_*+*]:!mt-0">
    <CtaBtn :to="formattedUrl" download>
      {{ data.text }}
    </CtaBtn>
  </div>
</template>

<style scoped></style>
