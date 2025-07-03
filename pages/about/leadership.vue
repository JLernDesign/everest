<script setup>
import { leadershipQuery } from "~/assets/graphql/queries/leadership.js";
import { toHead } from "vue-datocms";

const { data } = await useGraphqlQuery({
  query: leadershipQuery.loc.source.body,
});
const page = data.value.leadership;

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
  <div class="bg-skyblue">
    <!-- basic hero -->
    <Section
      :hero="true"
      class="pb-[2.5rem] text-center s:pb-section-bot max-s:pt-[11rem]"
    >
      <div class="has-break mx-auto max-w-[100rem]">
        <h1
          class="font-barlow-cond text-xl-mob font-bold leading-xl s:text-xl"
          v-html="formatText(page.team.header.headline)"
        ></h1>
      </div>
    </Section>

    <!-- team -->
    <AboutTeam :data="page.team" />

    <FlexibleBlocks :data="page.flexibleContent.modules" />
    <FooterLockup :data="page.footerCallout" />
  </div>
</template>
