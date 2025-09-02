<script setup>
import { casestudyLandingQuery } from "~/assets/graphql/queries/case-study";

const { data } = await useGraphqlQuery({
  query: casestudyLandingQuery.loc.source.body,
});
const page = data.value.casestudyLanding;
const caseStudies = data.value.allCaseStudies;

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
  <div class="bg-shadowblue">
    <Seo :data="page.seo" />

    <div class="relative">
      <UITexture />

      <!-- basic hero -->
      <BasicHero :data="page.hero" theme="dark" class="!bg-transparent" />

      <!-- grid -->
      <Section class="!pt-[2rem] pb-section-bot-mob s:pb-section-bot">
        <div
          class="mx-auto grid max-w-[131.5rem] grid-cols-1 gap-[2rem] s:grid-cols-2 s:gap-[13.2rem]"
        >
          <!-- case study thumb -->
          <CaseStudyThumb
            v-for="item in caseStudies"
            :key="item.slug"
            :data="item"
          />
        </div>
      </Section>
    </div>

    <FooterLockup :data="page.footerCallout" />

    <!-- cover image for fade in -->
    <LoadCover :loaded="loaded" color="bg-shadowblue" />
  </div>
</template>

<style scoped></style>
