<script setup>
/* import HomeQuery from "~/assets/graphql/home.graphql";

const QUERY = HomeQuery.loc.source.body;
const { data } = await useGraphqlQuery({
  query: QUERY,
});
const page = data.value.home; */

onMounted(() => {
  const theme = useState("theme");
  theme.value = "dark";
});
onUnmounted(() => {});
</script>

<template>
  <div class="bg-jaffa">
    <WhyClientsHero />
    <ClientSuccessGrid :edge="true" />
    <CalloutQuote />
    <ClientList class="!pb-[30rem]" />
    <PressCallout />
  </div>
</template>

<style scoped></style>
