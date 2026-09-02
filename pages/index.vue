<script setup lang="ts">
import { print } from "graphql";
import type { SeoMetaTagType } from "vue-datocms";
import { homeQuery } from "~/assets/graphql/queries/home";
import type { HomePage, HomeQueryData } from "~/types/home";

const loaded = ref(false);
const intro = ref(null);

const { data } = await useGraphqlQuery<HomeQueryData>({
  query: print(homeQuery),
});

const page = data.value?.home as HomePage | null;
if (!page) {
  throw new Error("Failed to load home page");
}

const title = page.seo.find((meta: SeoMetaTagType) => meta.tag === "title");

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
  <div class="bg-skyblue pt-banner">
    <Seo :data="page.seo" :title="title?.content" />
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
