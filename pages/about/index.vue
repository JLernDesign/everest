<script setup>
import { aboutQuery } from "~/assets/graphql/queries/about.js";
import { toHead } from "vue-datocms";

const { data } = await useGraphqlQuery({
  query: aboutQuery.loc.source.body,
});
const page = data.value.about;
console.log(data.value);

onMounted(() => {
  const theme = useState("theme");
  theme.value = "light";
});

// compile meta tags for head
useHead(() => {
  if (!data.value) return {};
  return toHead(page.seo);
});
</script>

<template>
  <div class="bg-jaffa">
    <AboutHero :data="page.heroHeadline" :stats="page.statsSlider" />
    <FlexibleBlocks :data="page.flexibleContent.modules" />
    <FooterLockup :data="page.footerCallout" />
  </div>
</template>
