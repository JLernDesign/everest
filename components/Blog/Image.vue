<script setup>
const props = defineProps(["data"]);

const linkTo = computed(() => {
  return getUrl(props.data.link);
});

const linkTarget = computed(() => {
  return props.data.link.external ? "_blank" : null;
});
</script>

<template>
  <figure class="content-block image">
    <NuxtLink v-if="data.link" :to="linkTo" :target="linkTarget">
      <img :src="data.image.url" :alt="data.image.alt" />
    </NuxtLink>
    <img v-else :src="data.image.url" :alt="data.image.alt" />
    <figcaption
      v-if="data.caption"
      class="!mt-6 block text-left text-body-sm-mob s:text-body-sm"
    >
      {{ data.caption }}
    </figcaption>
  </figure>
</template>

<style scoped></style>
