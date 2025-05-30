<script setup>
import HomeQuery from "~/assets/graphql/home.graphql";
const theme = useState("theme");
theme.value = "light";

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
    <OverviewCards theme="dark" :nav="true" />
    <SliderAscending />
    <BannerCallout />
    <ClientSuccess />
    <BlogCallout />
    <Integrations />
  </div>
</template>

<style scoped></style>
