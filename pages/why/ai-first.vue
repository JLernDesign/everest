<script setup>
import { aiFirstQuery } from "~/assets/graphql/queries/ai-first.js";

const { data } = await useGraphqlQuery({
  query: aiFirstQuery.loc.source.body,
});
const page = data.value.aiFirst;
const loaded = ref(false);
/* console.log(page); */

onMounted(() => {
  const theme = useState("theme");
  theme.value = "dark";

  setTimeout(() => {
    loaded.value = true;
  }, 200);
});
</script>

<template>
  <div class="pt-banner bg-shadowblue text-white">
    <Seo :data="page.seo" />
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
      <template v-if="module.__typename == 'FaqRecord'">
        <hr class="block border-t border-t-whiteline s:hidden" />
        <Faq :data="module" />
      </template>
    </template>

    <FooterLockup :data="page.footerCallout" />

    <!-- cover image for fade in -->
    <LoadCover :loaded="loaded" color="bg-shadowblue" />
  </div>
</template>

<style scoped></style>
