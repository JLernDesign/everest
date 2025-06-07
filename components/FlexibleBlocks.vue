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

    <BucketsNum
      v-if="module.__typename == 'NumberBucketGroupRecord'"
      :data="module"
    />
    <ClientSuccess
      v-if="module.__typename == 'ClientSuccessRecord'"
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
    <SliderAscending
      v-if="module.__typename == 'AscendingSliderRecord'"
      :data="module"
      :template="template"
    />
  </template>
</template>

<style scoped></style>
