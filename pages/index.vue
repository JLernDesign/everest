<script setup>
import { homeQuery } from "~/assets/graphql/queries/home";

const { data } = await useGraphqlQuery({
  query: homeQuery.loc.source.body,
});
const page = data.value.home;

onMounted(() => {
  const theme = useState("theme");
  theme.value = "light";
});
</script>

<template>
  <div class="bg-skyblue">
    <LazyHomeHero
      v-if="page.hero"
      :data="page.hero"
      :mediaSlides="page.mediaSlider.mediaSlides"
    />
    <LazyHomeIntro
      v-if="page.intro"
      :data="page.intro"
      :logos="page.featuredLogos"
    />
    <LazyFlexibleBlocks :data="page.flexibleContent.modules" template="home" />
    <LazyFooterLockup :data="page.footerCallout" />
  </div>
</template>

<style scoped></style>
