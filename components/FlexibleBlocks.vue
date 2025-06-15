<script setup>
const props = defineProps(["data", "template"]);
</script>

<template>
  <template v-for="module in data">
    <Advantage v-if="module.__typename == 'AdvantageRecord'" :data="module" />
    <Faq v-if="module.__typename == 'FaqRecord'" :data="module" />
    <BannerCallout
      v-if="module.__typename == 'BannerCalloutRecord'"
      :data="module"
    />
    <BlogCallout v-if="module.__typename == 'BlogCalloutRecord'" />
    <CalloutQuote v-if="module.__typename == 'BigQuoteRecord'" :data="module" />
    <ClientList
      v-if="module.__typename == 'ClientQuoteListRecord'"
      :data="module"
    />
    <BucketsNum
      v-if="module.__typename == 'NumberBucketGroupRecord'"
      :data="module"
    />
    <ClientSuccess
      v-if="module.__typename == 'ClientSuccessModuleRecord'"
      :data="module"
    />
    <SuccessStack
      v-if="module.__typename == 'ClientCardsModuleRecord'"
      :data="module"
    />
    <Integrations
      v-if="module.__typename == 'IntegrationListRecord'"
      :data="module"
    />
    <OverviewCards
      v-if="module.__typename == 'OverviewRecord'"
      :theme="template == 'product' ? 'light' : 'dark'"
      :nav="template != 'product' && true"
      :header="template != 'product' && true"
      :data="module"
      :template="template"
    />
    <PostsCallout
      v-if="module.__typename == 'PressCalloutRecord'"
      :data="{ headline: 'Everest in the Press' }"
      type="callout"
    />
    <Problem
      v-if="module.__typename == 'ProblemRecord'"
      :layout="module.header.eyebrow == 'The Problem' ? 'img-rt' : 'img-lt'"
      :data="module"
    />
    <SliderAscending
      v-if="module.__typename == 'AscendingSliderRecord'"
      :data="module"
    />
  </template>
</template>

<style scoped></style>
