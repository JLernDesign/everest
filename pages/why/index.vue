<script setup>
import { whyQuery } from "~/assets/graphql/queries/why.js";

const { data } = await useGraphqlQuery({
  query: whyQuery.loc.source.body,
});
const page = data.value.whyMain;

onMounted(() => {
  const theme = useState("theme");
  theme.value = "light";
});
</script>

<template>
  <div class="bg-jaffa">
    <Seo :data="page.seo" />
    <WhyHero :data="page.hero" />
    <FlexibleBlocks :data="page.flexibleContent.modules" />
    <FooterLockup :data="page.footerCallout" />
  </div>
</template>

<style scoped></style>
