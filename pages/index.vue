<script setup>
import { homeQuery } from "~/assets/graphql/queries/home";

const loaded = ref(false);
const placeholder = ref(true);

const { data } = await useGraphqlQuery({
  query: homeQuery.loc.source.body,
});
const page = data.value.home;

onMounted(() => {
  window.scrollTo(0, 0);

  const theme = useState("theme");
  theme.value = "light";

  setTimeout(() => {
    loaded.value = true;
  }, 500);

  setTimeout(() => {
    placeholder.value = false;
  }, 600);
});
</script>

<template>
  <div class="bg-skyblue">
    <HomeHero
      v-if="page.hero"
      :data="page.hero"
      :mediaSlides="page.mediaSlider.mediaSlides"
    />
    <div v-if="placeholder" class="h-screen w-screen bg-skyblue"></div>
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
