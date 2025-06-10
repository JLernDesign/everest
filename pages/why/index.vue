<script setup>
import { whyQuery } from "~/assets/graphql/queries/why.js";
import { toHead } from "vue-datocms";

const { data } = await useGraphqlQuery({
  query: whyQuery.loc.source.body,
});
const page = data.value.whyMain;

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
    <FlexibleBlocks :data="page.flexibleContent.modules" />
    <FooterLockup :data="page.footerCallout" />
  </div>
</template>

<style scoped></style>
