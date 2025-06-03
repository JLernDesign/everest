<script setup>
import ProductQuery from "~/assets/graphql/product.graphql";

const route = useRoute();

const QUERY = ProductQuery.loc.source.body;
const { data } = await useGraphqlQuery({
  query: QUERY,
  variables: {
    slug: route.params.slug,
  },
});
const page = data.value.product;
console.log(toRaw(page));
</script>

<template>
  <div class="bg-skyblue">
    <ProductHero v-if="page.hero" :data="page.hero" />
    <!--     <BucketsNum />
    <BigTextClouds /> -->
    <!-- <OverviewCards theme="light" :header="false" :nav="false" /> -->

    <FooterLockup :data="page.footerCallout" />
  </div>
</template>

<style scoped></style>
