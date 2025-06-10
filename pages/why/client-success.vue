<script setup>
import { clientsQuery } from "~/assets/graphql/queries/clients.js";
import { toHead } from "vue-datocms";

const { data } = await useGraphqlQuery({
  query: clientsQuery.loc.source.body,
});
const page = data.value.clientSuccess;

onMounted(() => {
  const theme = useState("theme");
  theme.value = "dark";
});

// compile meta tags for head
useHead(() => {
  if (!data.value) return {};
  return toHead(page.seo);
});
</script>

<template>
  <div class="bg-skyblue">
    <WhyClientsHero :data="page.hero" />
    <ClientSuccessGrid :edge="true" />
    <FlexibleBlocks :data="page.flexibleContent.modules" />
    <FooterLockup :data="page.footerCallout" />
  </div>
</template>

<style scoped></style>
