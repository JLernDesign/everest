<script setup>
import { landingQuery } from "~/assets/graphql/queries/landing.js";

const route = useRoute();
const slug = route.params.slug;
definePageMeta({
  alias: ["/:slug"],
});

const loaded = ref(false);
const hideHeader = useState("hideHeader");
const { data } = await useGraphqlQuery({
  query: landingQuery.loc.source.body,
});
const page = data.value.paidLanding;

console.log(toRaw(page));
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
    <template v-for="module in page.landingFlexible.landingModules">
      <LandingBasicColumns
        v-if="module.__typename == 'LandingBasicRecord'"
        :data="module"
      />
      <Faq v-if="module.__typename == 'FaqRecord'" :data="module" />
    </template>

    <FooterLockup :data="page.footerCallout" />

    <!-- cover image for fade in -->
    <LoadCover :loaded="loaded" color="bg-skyblue" />
  </div>
</template>

<style scoped></style>
