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
  <div class="text-white">
    <WhyAIFirstHero />
    <WhyAIContent />
    <WhyAIContent />
    <Faq />
  </div>
</template>

<style scoped></style>
