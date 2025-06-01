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
    <WhyAIContent
      :data="{ headline: 'Why traditional ERP Systems can\'t get AI right' }"
      color="blue"
    />
    <WhyAIContent
      :data="{ headline: 'What You Get When You Choose Everest' }"
      color="red"
    />
    <WhyAIBigText
      :data="{
        headline: 'Innovate Fearlessly with Live Sandbox<sup>™</sup>',
        cta: { buttons: [{ style: 'button', label: 'Try Live Sandbox' }] },
      }"
    />
    <WhyAIContentAlt />
    <WhyAIContentBuckets />
    <WhyAIBigText
      :data="{ headline: 'Modern ERP Reinvented for the AI Era' }"
    />
    <Faq />
  </div>
</template>

<style scoped></style>
