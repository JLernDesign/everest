<script setup>
import { whySubpageQuery } from "~/assets/graphql/queries/why-subpage";
import { toHead } from "vue-datocms";

const route = useRoute();

const { data } = await useGraphqlQuery({
  query: whySubpageQuery.loc.source.body,
  variables: {
    slug: route.params.slug,
  },
});
const page = data.value.whySubpage;
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
    <WhyHero :data="page.hero" />
    <FlexibleBlocks :data="page.flexibleContent.modules" template="why" />
    <FooterLockup :data="page.footerCallout" />
  </div>
</template>

<style scoped></style>
