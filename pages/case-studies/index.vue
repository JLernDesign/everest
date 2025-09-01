<script setup>
import { casestudyLandingQuery } from "~/assets/graphql/queries/case-study";

const { data } = await useGraphqlQuery({
  query: casestudyLandingQuery.loc.source.body,
});
const page = data.value.casestudyLanding;
const caseStudies = data.value.allCaseStudies;
console.log(page);

const loaded = ref(false);

onMounted(() => {
  const theme = useState("theme");
  theme.value = "dark";

  setTimeout(() => {
    loaded.value = true;
  }, 200);
});
</script>

<template>
  <div class="bg-jaffa">
    <Seo :data="page.seo" />

    <div class="relative">
      <UITexture />

      <!-- basic hero -->
      <BasicHero :data="page.hero" theme="dark" />

      <!-- grid -->
      <div
        class="mx-auto grid max-w-[131.5rem] s:mt-[6rem] s:grid-cols-2 s:gap-[13.2rem] s:pb-12"
      >
        <!-- case study thumb -->
        <CaseStudyThumb
          v-for="item in caseStudies"
          :key="item.slug"
          :data="item"
        />
      </div>
    </div>

    <FooterLockup :data="page.footerCallout" />

    <!-- cover image for fade in -->
    <LoadCover :loaded="loaded" color="bg-jaffa" />
  </div>
</template>

<style scoped></style>
