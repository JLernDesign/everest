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
    <FlexibleBlocks :data="page.modules" template="home" />
    <FooterLockup :data="page.footerCallout" />
  </div>
</template>

<style scoped></style>
