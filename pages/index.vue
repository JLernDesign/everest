<script setup>
import HomeQuery from "~/assets/graphql/home.graphql";

const QUERY = HomeQuery.loc.source.body;
const { data } = await useGraphqlQuery({
  query: QUERY,
});
const page = data.value.home;
</script>

<template>
  <div class="bg-skyblue">
    <HomeHero :data="page.hero" />
    <HomeIntro />
    <OverviewCards theme="dark" />
    <SliderAscending />
    <BannerCallout />
    <ClientSuccess />
    <BlogCallout />
    <Integrations />
  </div>
</template>

<style scoped></style>
