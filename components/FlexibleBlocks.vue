<script setup>
const props = defineProps(["data", "template"]);
</script>

<template>
  <template v-for="module in data">
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
    <BannerCallout
      v-if="module.__typename == 'BannerCalloutRecord'"
      :data="module"
    />
    <ClientSuccess
      v-if="module.__typename == 'ClientSuccessRecord'"
      :data="module"
    />
    <BlogCallout v-if="module.__typename == 'BlogCalloutRecord'" />
    <Integrations
      v-if="module.__typename == 'IntegrationListRecord'"
      :data="module"
    />
    <BucketsNum
      v-if="module.__typename == 'NumberBucketGroupRecord'"
      :data="module"
    />
  </template>
</template>

<style scoped></style>
