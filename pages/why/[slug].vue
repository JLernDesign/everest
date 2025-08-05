<script setup>
import { whySubpageQuery } from "~/assets/graphql/queries/why-subpage";

const route = useRoute();

const { data } = await useGraphqlQuery({
  query: whySubpageQuery.loc.source.body,
  variables: {
    slug: route.params.slug,
  },
});
const page = data.value.whySubpage;
const loaded = ref(false);

onMounted(() => {
  const theme = useState("theme");
  theme.value = "light";

  setTimeout(() => {
    loaded.value = true;
  }, 200);
});
</script>

<template>
  <div class="bg-jaffa">
    <Seo :data="page.seo" />
    <WhyHero :data="page.hero" />
    <FlexibleBlocks :data="page.flexibleContent.modules" template="why" />
    <FooterLockup :data="page.footerCallout" />

    <!-- cover image for fade in -->
    <LoadCover :loaded="loaded" color="bg-jaffa" />
  </div>
</template>

<style scoped></style>
