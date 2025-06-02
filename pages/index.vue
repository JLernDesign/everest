<script setup>
import HomeQuery from "~/assets/graphql/home.graphql";
const theme = useState("theme");
theme.value = "light";

const QUERY = HomeQuery.loc.source.body;
const { data } = await useGraphqlQuery({
  query: QUERY,
});
const page = data.value.home;
console.log(toRaw(page));
</script>

<template>
  <div class="bg-skyblue">
    <HomeHero v-if="page.hero" :data="page.hero" />
    <HomeIntro
      v-if="page.intro"
      :data="page.intro"
      :logos="page.featuredLogos"
    />

    <template v-for="module in page.modules">
      <OverviewCards
        v-if="module.__typename == 'OverviewRecord'"
        theme="dark"
        :nav="true"
        :header="true"
        :data="module"
      />
      <SliderAscending
        v-if="module.__typename == 'AscendingSliderRecord'"
        :data="module"
      />
      <BannerCallout
        v-if="module.__typename == 'BannerCalloutRecord'"
        :data="module"
      />
      <ClientSuccess
        v-if="module.__typename == 'ClientSuccessRecord'"
        :data="module"
      />
      <BlogCallout v-if="module.__typename == 'BlogCalloutRecord'" />
      <Integrations
        v-if="module.__typename == 'IntegrationListRecord'"
        :data="module"
      />
    </template>

    <FooterLockup :data="page.footerCallout" />
  </div>
</template>

<style scoped></style>
