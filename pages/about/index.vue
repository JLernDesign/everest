<script setup>
import { aboutQuery } from "~/assets/graphql/queries/about.js";

const { data } = await useGraphqlQuery({
  query: aboutQuery.loc.source.body,
});
const page = data.value.about;

onMounted(() => {
  window.scrollTo(0, 0);
  const theme = useState("theme");
  theme.value = "light";
});
</script>

<template>
  <div class="bg-jaffa">
    <Seo :data="page.seo" />
    <AboutHero :data="page.heroHeadline" :stats="page.statsSlider" />
    <FlexibleBlocks :data="page.flexibleContent.modules" template="about" />
    <FooterLockup :data="page.footerCallout" />
  </div>
</template>
