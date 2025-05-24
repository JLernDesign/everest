<script setup>
import ResourceQuery from "~/assets/graphql/resource.graphql";

const route = useRoute();

const QUERY = ResourceQuery.loc.source.body;
const { data } = await useGraphqlQuery({
  query: QUERY,
  variables: {
    slug: route.params.slug,
  },
});
console.log(data.value);

// SEO
useHead({
  title: data.value.post.title,
});
</script>

<template>
  <div>
    {{ data.post.title }}
  </div>
</template>

<style scoped></style>
