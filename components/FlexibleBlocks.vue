<script setup>
const props = defineProps(["data", "template"]);
</script>

<template>
  <template v-for="(module, i) in data">
    <LazyAdvantage
      v-if="module.__typename == 'AdvantageRecord'"
      :data="module"
    />
    <LazyBannerCallout
      v-if="module.__typename == 'BannerCalloutRecord'"
      :data="module"
    />
    <LazyBlogCallout v-if="module.__typename == 'BlogCalloutRecord'" />
    <LazyBodyBasic
      v-if="module.__typename == 'BasicContentRecord'"
      :data="module"
    />
    <LazyBucketsNum
      v-if="module.__typename == 'NumberBucketGroupRecord'"
      :data="module"
    />
    <LazyCalloutQuote
      v-if="module.__typename == 'BigQuoteRecord'"
      :data="module"
    />
    <LazyClientList
      v-if="module.__typename == 'ClientQuoteListRecord'"
      :data="module"
    />
    <LazyClientSuccess
      v-if="module.__typename == 'ClientSuccessModuleRecord'"
      :data="module"
    />
    <LazyHappenings
      v-if="module.__typename == 'HappeningsSliderRecord'"
      :data="module"
    />
    <LazyEvents v-if="module.__typename == 'EventListRecord'" :data="module" />
    <LazyFaq v-if="module.__typename == 'FaqRecord'" :data="module" />
    <LazyFullPhoto
      v-if="module.__typename == 'FullPhotoRecord'"
      :data="module"
    />
    <LazyIntegrations
      v-if="module.__typename == 'IntegrationListRecord' && template != 'about'"
      :data="module"
      :template="template"
    />
    <LazyMapModule
      v-if="module.__typename == 'MapModuleRecord'"
      :data="module"
    />
    <LazyOverviewCards
      v-if="module.__typename == 'OverviewRecord' && template != 'product'"
      theme="dark"
      :data="module"
    />
    <LazySolutionCards
      v-if="module.__typename == 'SolutionModuleRecord'"
      theme="light"
      :data="module"
    />
    <LazyPostsCallout
      v-if="module.__typename == 'PressCalloutRecord'"
      :data="{ headline: 'Everest in the Press' }"
      type="callout"
    />
    <LazyProblem
      v-if="module.__typename == 'ProblemRecord'"
      :layout="module.header.eyebrow == 'The Problem' ? 'img-rt' : 'img-lt'"
      :data="module"
    />
    <LazySliderAscending
      v-if="module.__typename == 'AscendingSliderRecord'"
      :data="module"
      :class="i == data.length - 1 && 's:!pb-[15rem]'"
      :template="template"
    />
    <LazySuccessStack
      v-if="module.__typename == 'ClientCardsModuleRecord'"
      :data="module"
    />
    <LazyWhyAICallout
      v-if="module.__typename == 'AifirstCalloutRecord'"
      :data="module"
    />
  </template>
</template>

<style scoped></style>
