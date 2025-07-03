<script setup>
import { mediaQuery } from "~/assets/graphql/queries/media.js";
import { toHead } from "vue-datocms";

const { data } = await useGraphqlQuery({
  query: mediaQuery.loc.source.body,
});
const page = data.value.mediaPage;
const media = data.value.allMediaCollections;

console.log(media);

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
    <!-- basic hero -->
    <BasicHero :data="page.hero" />

    <!-- media grid -->
    Grid

    <FooterLockup :data="page.footerCallout" />
  </div>
</template>
