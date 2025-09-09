<script setup>
import { leadershipQuery } from "~/assets/graphql/queries/leadership.js";

const { data } = await useGraphqlQuery({
  query: leadershipQuery.loc.source.body,
});
const page = data.value.leadership;
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
  <div class="pt-banner bg-skyblue">
    <Seo :data="page.seo" />
    <BasicHero :data="{ headline: page.team.header.headline }" />
    <AboutTeam :data="page.team" />
    <FlexibleBlocks :data="page.flexibleContent.modules" />
    <FooterLockup :data="page.footerCallout" />

    <!-- cover image for fade in -->
    <LoadCover :loaded="loaded" color="bg-skyblue" />
  </div>
</template>
