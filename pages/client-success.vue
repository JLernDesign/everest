<script setup>
import { clientsQuery } from "~/assets/graphql/queries/clients.js";

const { data } = await useGraphqlQuery({
  query: clientsQuery.loc.source.body,
});
const page = data.value.clientSuccess;
const loaded = ref(false);

onMounted(() => {
  const theme = useState("theme");
  theme.value = "dark";

  setTimeout(() => {
    loaded.value = true;
  }, 200);
});
</script>

<template>
  <div class="bg-shadowblue">
    <Seo :data="page.seo" />
    <WhyClientsHero :data="page.hero" :items="page.clientSlider" />
    <ClientSuccessGrid
      v-if="page.clientGrid"
      :edge="true"
      :data="page.clientGrid"
    />
    <FlexibleBlocks :data="page.flexibleContent.modules" />
    <FooterLockup :data="page.footerCallout" />

    <!-- cover image for fade in -->
    <LoadCover :loaded="loaded" color="bg-shadowblue" />
  </div>
</template>

<style scoped></style>
