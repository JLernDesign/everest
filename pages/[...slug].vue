<script setup>
import { landingQuery } from "~/assets/graphql/queries/landing.js";
import { removeTrailingSlash } from "~/utils/functions.js";

const route = useRoute();
let slug = route.params.slug;
let raw_slug = route.params.slug;

// catch all for multiple slashes in url
// This handles both:
// - Single slug: /lp-erp-software/ -> slug = ['lp-erp-software']
// - Directory + slug: /directory/slug/ -> slug = ['directory', 'slug']
if (Array.isArray(slug)) {
  slug = raw_slug.join("/");
}

// Remove trailing slash and use as slug query
// The catch-all route already captures the full path, so we just need to clean it
const slug_query = removeTrailingSlash(slug);

const loaded = ref(false);
const hideHeader = useState("hideHeader");
const { data } = await useGraphqlQuery({
  query: landingQuery.loc.source.body,
  variables: {
    slug: slug_query,
  },
});
const page = data.value.paidLanding;
console.log(toRaw(page));

/* no page data, send to page not found */
if (!page) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
  });
}

onMounted(() => {
  hideHeader.value = page.hideHeader;

  setTimeout(() => {
    loaded.value = true;
  }, 200);

  const theme = useState("theme");
  theme.value = "light";
});

// add header back if hidden on leave
onBeforeRouteLeave(() => {
  hideHeader.value = false;
});
</script>

<template>
  <div class="bg-skyblue pt-banner" data-datocms-noindex>
    <Seo :data="page.seo" />

    <!-- hero -->
    <LandingHero :data="page" />

    <!-- flexible content -->
    <template v-for="(module, i) in page.landingFlexible.landingModules">
      <LandingBrands
        v-if="module.__typename == 'LogosBlockRecord'"
        :data="module"
        :order="i"
      />

      <LandingListModule
        v-if="module.__typename == 'ListModuleRecord'"
        :data="module"
        :order="i"
      />

      <LandingBasicColumns
        v-if="module.__typename == 'LandingBasicRecord'"
        :data="module"
        :order="i"
      />

      <LandingImageFull
        v-if="module.__typename == 'ImageFullRecord'"
        :data="module"
        :order="i"
      />

      <LandingCenteredText
        v-if="module.__typename == 'CenteredTextRecord'"
        :data="module"
        :order="i"
      />

      <LandingBasicCenteredText
        v-if="module.__typename == 'BasicCenteredTextRecord'"
        :data="module"
        :order="i"
      />

      <LandingBasicSlider
        v-if="module.__typename == 'BasicSliderRecord'"
        :data="module"
        :order="i"
      />

      <LandingCoauthors
        v-if="module.__typename == 'CoauthorModuleRecord'"
        :data="module"
        :order="i"
      />

      <LandingCtaForm
        v-if="module.__typename == 'CtaFormRecord'"
        :data="module"
        :order="i"
      />

      <Faq v-if="module.__typename == 'FaqRecord'" :data="module" />
    </template>

    <FooterLockup :data="page.footerCallout" />

    <!-- cover image for fade in -->
    <LoadCover :loaded="loaded" color="bg-skyblue" />
  </div>
</template>

<style scoped>
.landing-columns + .landing-columns {
  padding-top: 0;
}
</style>
