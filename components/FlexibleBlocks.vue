<script setup>
const props = defineProps(["data", "template"]);
</script>

<template>
  <template v-for="(module, i) in data">
    <Advantage v-if="module.__typename == 'AdvantageRecord'" :data="module" />
    <BannerCallout
      v-if="module.__typename == 'BannerCalloutRecord'"
      :data="module"
    />
    <BlogCallout v-if="module.__typename == 'BlogCalloutRecord'" />
    <BodyBasic
      v-if="module.__typename == 'BasicContentRecord'"
      :data="module"
    />
    <BucketsNum
      v-if="module.__typename == 'NumberBucketGroupRecord'"
      :data="module"
    />
    <CalloutQuote v-if="module.__typename == 'BigQuoteRecord'" :data="module" />
    <ClientList
      v-if="module.__typename == 'ClientQuoteListRecord'"
      :data="module"
    />
    <ClientSuccess
      v-if="module.__typename == 'ClientSuccessModuleRecord'"
      :data="module"
    />
    <Happenings
      v-if="module.__typename == 'HappeningsSliderRecord'"
      :data="module"
    />
    <Events v-if="module.__typename == 'EventListRecord'" :data="module" />
    <Faq v-if="module.__typename == 'FaqRecord'" :data="module" />
    <FullPhoto v-if="module.__typename == 'FullPhotoRecord'" :data="module" />
    <Integrations
      v-if="module.__typename == 'IntegrationListRecord' && template != 'about'"
      :data="module"
      :template="template"
    />
    <MapModule v-if="module.__typename == 'MapModuleRecord'" :data="module" />
    <OverviewCards
      v-if="module.__typename == 'OverviewRecord' && template != 'product'"
      theme="dark"
      :data="module"
    />
    <SolutionCards
      v-if="module.__typename == 'SolutionModuleRecord'"
      theme="light"
      :data="module"
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
      :class="i == data.length - 1 && 's:!pb-[15rem]'"
    />
    <SuccessStack
      v-if="module.__typename == 'ClientCardsModuleRecord'"
      :data="module"
    />
  </template>
</template>

<style scoped></style>
