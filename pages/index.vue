<script setup>
import { homeQuery } from "~/assets/graphql/queries/home";

const loaded = ref(false);

const { data } = await useGraphqlQuery({
  query: homeQuery.loc.source.body,
});
const page = data.value.home;

onMounted(() => {
  const theme = useState("theme");
  theme.value = "light";

  setTimeout(() => {
    loaded.value = true;
  }, 1000);
});
</script>

<template>
  <div class="bg-skyblue">
    <HomeHero
      v-if="page.hero"
      :data="page.hero"
      :mediaSlides="page.mediaSlider.mediaSlides"
    />
    <div v-if="!loaded" class="h-screen w-screen bg-skyblue"></div>
    <template v-if="loaded">
      <LazyHomeIntro
        v-if="page.intro"
        :data="page.intro"
        :logos="page.featuredLogos"
      />
      <LazyFlexibleBlocks
        :data="page.flexibleContent.modules"
        template="home"
      />
      <LazyFooterLockup :data="page.footerCallout" />
    </template>
  </div>
</template>

<style scoped></style>
