<script setup>
/* import HomeQuery from "~/assets/graphql/home.graphql";

const QUERY = HomeQuery.loc.source.body;
const { data } = await useGraphqlQuery({
  query: QUERY,
});
const page = data.value.home; */
</script>

<template>
  <div class="bg-jaffa">
    <WhyHero />
    <Advantage />
  </div>
</template>

<style scoped></style>
