<script setup>
import { whyQuery } from "~/assets/graphql/queries/why.js";

const { data } = await useGraphqlQuery({
  query: whyQuery.loc.source.body,
});
const page = data.value.whyMain;
console.log(data.value);
</script>

<template>
  <div class="bg-jaffa">
    <WhyHero :data="page.hero" />
    <FlexibleBlocks :data="page.flexibleContent.modules" template="home" />
    <FooterLockup :data="page.footerCallout" />
  </div>
</template>

<style scoped></style>
