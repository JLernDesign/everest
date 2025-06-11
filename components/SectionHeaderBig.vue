<script setup>
const props = defineProps(["data", "align", "breadcrumb"]);

// check for inline image marker
const hl = props.data.headline.split("[]");
let hasBlock = false;
if (hl.length > 1) {
  hasBlock = true;
}
</script>

<template>
  <header v-if="data != undefined" class="relative space-y-header-lg">
    <h2 class="font-barlow-cond text-xxl font-semibold uppercase leading-xxl">
      <!-- has inline block element -->
      <template v-if="hasBlock">
        <span v-html="addLineBreaks(hl[0])"></span>
        <span
          class="-mr-10 inline-flex h-[16.8rem] w-[32.1rem] rounded-[.9rem] bg-[url(/ui/callout-gradient@2x.png)] bg-cover"
        ></span>
        <span v-html="addLineBreaks(hl[1])"></span>
      </template>

      <!-- plain headline -->
      <template v-else>
        <span v-html="addLineBreaks(data.headline)"></span>
      </template>
    </h2>

    <p
      class="mx-auto max-w-[80rem] text-body-md leading-md"
      v-html="addLineBreaks(data.intro)"
    ></p>

    <!-- cta buttons -->
    <CtaGroup
      v-if="data.cta"
      :data="data.cta.buttons"
      :align="align"
      :theme="theme"
    />

    <!-- breadcrumb nav -->
    <Breadcrumb v-if="breadcrumb" :data="breadcrumb" :theme="theme" />
  </header>
</template>

<style scoped></style>
