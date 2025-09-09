<script setup>
import { whyQuery } from "~/assets/graphql/queries/why.js";

const { data } = await useGraphqlQuery({
  query: whyQuery.loc.source.body,
});
const page = data.value.whyMain;
const loaded = ref(false);

onMounted(() => {
  const theme = useState("theme");
  theme.value = "light";

  setTimeout(() => {
    loaded.value = true;
  }, 200);
});
</script>

<template>
  <div class="pt-banner bg-jaffa">
    <Seo :data="page.seo" />
    <WhyHero :data="page.hero" />
    <FlexibleBlocks :data="page.flexibleContent.modules" />
    <FooterLockup :data="page.footerCallout" />

    <!-- cover image for fade in -->
    <LoadCover :loaded="loaded" color="bg-jaffa" />
  </div>
</template>

<style scoped></style>
