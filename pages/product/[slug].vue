<script setup>
import { productQuery } from "~/assets/graphql/queries/product";
import { toHead } from "vue-datocms";

const route = useRoute();

const { data } = await useGraphqlQuery({
  query: productQuery.loc.source.body,
  variables: {
    slug: route.params.slug,
  },
});
const page = data.value.product;
console.log(toRaw(data.value));

onMounted(() => {
  const theme = useState("theme");
  theme.value = "light";
});

// compile meta tags for head
useHead(() => {
  if (!data.value) return {};
  return toHead(page.seo);
});
</script>

<template>
  <div class="bg-jaffa">
    <ProductHero v-if="page.hero" :data="page.hero" :order="page.order" />
    <FlexibleBlocks :data="page.flexibleContent.modules" template="product" />
    <FooterLockup :data="page.footerCallout" />
  </div>
</template>

<style scoped></style>
