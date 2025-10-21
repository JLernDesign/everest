<script setup>
import { homeQuery } from "~/assets/graphql/queries/home";

const loaded = ref(false);
const intro = ref(null);

const { data } = await useGraphqlQuery({
  query: homeQuery.loc.source.body,
});
const page = data.value.home;
const title = page.seo.find((meta) => meta.tag === "title");

onMounted(() => {
  window.scrollTo(0, 0);

  const theme = useState("theme");
  theme.value = "light";

  setTimeout(() => {
    loaded.value = true;
  }, 1000);
});
</script>

<template>
  <div class="pt-banner bg-skyblue">
    <Seo :data="page.seo" :title="title.content" />
    <HomeHero
      v-if="page.hero"
      :data="page.hero"
      :mediaSlides="page.mediaSlider.mediaSlides"
    />
    <LazyHomeIntro
      v-if="page.intro"
      :data="page.intro"
      :logos="page.featuredLogos"
      ref="intro"
    />
    <template v-if="loaded">
      <LazyFlexibleBlocks
        :data="page.flexibleContent.modules"
        template="home"
      />
      <LazyFooterLockup :data="page.footerCallout" />
    </template>
  </div>
</template>

<style scoped></style>
