<script setup>
import { aiFirstQuery } from "~/assets/graphql/queries/ai-first.js";
import { toHead } from "vue-datocms";

const { data } = await useGraphqlQuery({
  query: aiFirstQuery.loc.source.body,
});
const page = data.value.aiFirst;
/* console.log(page); */

onMounted(() => {
  const theme = useState("theme");
  theme.value = "dark";
});

// compile meta tags for head
useHead(() => {
  if (!data.value) return {};
  return toHead(page.seo);
});
</script>

<template>
  <div class="text-white">
    <WhyAIFirstHero :data="page.hero" />

    <template v-for="module in page.aiFirstFlexible.aiFirstModules">
      <WhyAIContent
        v-if="module.__typename == 'AiFirstBasicRecord'"
        :data="module"
        :color="module.accentColor"
      />
      <WhyAIBigText
        v-if="module.__typename == 'AiFirstBigtextRecord'"
        :data="module"
      />
      <WhyAIContentAlt
        v-if="module.__typename == 'AiFirstSlideModuleRecord'"
        :data="module"
      />
      <WhyAIContentBuckets
        v-if="module.__typename == 'AiFirstBucketGroupRecord'"
        :data="module"
      />
      <Faq v-if="module.__typename == 'FaqRecord'" :data="module" />
    </template>

    <FooterLockup :data="page.footerCallout" />
  </div>
</template>

<style scoped></style>
