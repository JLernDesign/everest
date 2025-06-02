<script setup>
import HomeQuery from "~/assets/graphql/home.graphql";
const theme = useState("theme");
theme.value = "light";

const QUERY = HomeQuery.loc.source.body;
const { data } = await useGraphqlQuery({
  query: QUERY,
});
const page = data.value.home;
console.log(data.value);
</script>

<template>
  <div class="bg-skyblue">
    <HomeHero v-if="page.hero" :data="page.hero" />
    <HomeIntro v-if="page.intro" :data="page.intro" />

    <template v-for="module in page.modules">
      <OverviewCards
        v-if="module.__typename == 'OverviewRecord'"
        theme="dark"
        :nav="true"
      />
      <SliderAscending v-if="module.__typename == 'AscendingRecord'" />
      <BannerCallout v-if="module.__typename == 'BannerCalloutRecord'" />
      <ClientSuccess v-if="module.__typename == 'ClientSuccessRecord'" />
      <BlogCallout v-if="module.__typename == 'BlogCalloutRecord'" />
      <Integrations v-if="module.__typename == 'IntegrationListRecord'" />
    </template>
  </div>
</template>

<style scoped></style>
