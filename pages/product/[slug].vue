<script setup>
import ProductQuery from "~/assets/graphql/product.graphql";
import { toHead } from "vue-datocms";

const route = useRoute();

const QUERY = ProductQuery.loc.source.body;
const { data } = await useGraphqlQuery({
  query: QUERY,
  variables: {
    slug: route.params.slug,
  },
});
const page = data.value.product;
console.log(toRaw(data.value));

// compile meta tags for head
useHead(() => {
  if (!data.value) return {};
  return toHead(page.seo);
});
</script>

<template>
  <div class="bg-jaffa">
    <ProductHero v-if="page.hero" :data="page.hero" />
    <FlexibleBlocks :data="page.modules" template="product" />
    <FooterLockup :data="page.footerCallout" />
  </div>
</template>

<style scoped></style>
