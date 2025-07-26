<script setup>
import { leadershipQuery } from "~/assets/graphql/queries/leadership.js";

const { data } = await useGraphqlQuery({
  query: leadershipQuery.loc.source.body,
});
const page = data.value.leadership;

onMounted(() => {
  const theme = useState("theme");
  theme.value = "light";
});
</script>

<template>
  <div class="bg-skyblue">
    <Seo :data="page.seo" />
    <BasicHero :data="{ headline: page.team.header.headline }" />
    <AboutTeam :data="page.team" />
    <FlexibleBlocks :data="page.flexibleContent.modules" />
    <FooterLockup :data="page.footerCallout" />
  </div>
</template>
