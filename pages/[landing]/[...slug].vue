<script setup>
import { landingQuery } from "~/assets/graphql/queries/landing.js";

const route = useRoute();
const directory = route.params.landing;
let slug = route.params.slug;
let raw_slug = route.params.slug;
let slug_query = "";

// catch all for multiple slashes in url
if (Array.isArray(slug)) {
  slug = raw_slug.join("/");
}

// if no directory, use the slug
if (!directory) {
  slug_query = slug;
  definePageMeta({
    alias: ["/:slug"],
  });
} else {
  // if directory, add it to the slug
  slug_query = directory + "/" + removeTrailingSlash(slug);
}

const loaded = ref(false);
const hideHeader = useState("hideHeader");
const { data } = await useGraphqlQuery({
  query: landingQuery.loc.source.body,
  variables: {
    slug: slug_query,
  },
});
const page = data.value.paidLanding;
/* console.log(toRaw(page)); */

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
