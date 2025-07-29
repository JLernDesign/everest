<script setup>
import { clientsQuery } from "~/assets/graphql/queries/clients.js";

definePageMeta({
  alias: ["/client-success"],
});

const { data } = await useGraphqlQuery({
  query: clientsQuery.loc.source.body,
});
const page = data.value.clientSuccess;

onMounted(() => {
  const theme = useState("theme");
  theme.value = "dark";
});
</script>

<template>
  <div class="bg-skyblue">
    <Seo :data="page.seo" />
    <WhyClientsHero :data="page.hero" :items="page.clientSlider" />
    <ClientSuccessGrid
      v-if="page.clientGrid"
      :edge="true"
      :data="page.clientGrid"
    />
    <FlexibleBlocks :data="page.flexibleContent.modules" />
    <FooterLockup :data="page.footerCallout" />
  </div>
</template>

<style scoped></style>
