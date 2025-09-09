<script setup>
import { caseStudyQuery } from "~/assets/graphql/queries/case-study";

const route = useRoute();

const { data } = await useGraphqlQuery({
  query: caseStudyQuery.loc.source.body,
  variables: {
    slug: route.params.slug,
  },
});
const page = data.value.caseStudy;
const loaded = ref(false);

// get results slider data for lockup
const results_slider = page.casestudyFlexible.casestudyModules.find(
  (module) => module.__typename == "ResultsSliderRecord",
);

onMounted(() => {
  const theme = useState("theme");
  theme.value = "light";

  setTimeout(() => {
    loaded.value = true;
  }, 200);
});
</script>

<template>
  <div class="pt-banner bg-jaffa">
    <Seo :data="page.seo" />

    <CaseStudyHero
      :data="{
        headline: page.headline,
        image: page.image,
        details: page.details,
      }"
    />

    <template v-for="(module, i) in page.casestudyFlexible.casestudyModules">
      <CaseStudyResultsSlider
        v-if="module.__typename == 'ResultsSliderRecord'"
        :data="module"
      />
      <CaseStudyColumns
        v-if="module.__typename == 'CasestudyBasicRecord'"
        :data="module"
      />
      <CaseStudyClientQuote
        v-if="module.__typename == 'ClientQuoteRecord'"
        :data="module"
        :last="i == page.casestudyFlexible.casestudyModules.length - 1"
      />
    </template>

    <CaseStudyResults
      v-if="page.casestudyResults"
      :data="page.casestudyResults"
      :slider="results_slider"
    />

    <CaseStudyMoreStories />

    <FooterLockup :data="page.footerCallout" />

    <!-- cover image for fade in -->
    <LoadCover :loaded="loaded" color="bg-jaffa" />
  </div>
</template>

<style>
.cs-columns + .cs-columns,
.results + .cs-columns {
  border-top: 1px solid theme("colors.grayline");
}
</style>
