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
  <header
    v-if="data != undefined"
    class="space-y-header-mob relative s:space-y-header-lg"
  >
    <h2
      class="font-barlow-cond text-xxl-mob font-semibold uppercase leading-xxl s:text-xxl"
    >
      <!-- has inline block element -->
      <template v-if="hasBlock">
        <span v-html="formatText(hl[0])"></span>
        <span
          class="-mr-4 inline-flex h-[5.5rem] w-[10.6rem] rounded-[.7rem] bg-[url(/ui/callout-gradient@2x.png)] bg-cover s:-mr-10 s:h-[16.8rem] s:w-[32.1rem] s:rounded-[.9rem]"
        ></span>
        <span v-html="formatText(hl[1])"></span>
      </template>

      <!-- plain headline -->
      <template v-else>
        <span v-html="formatText(data.headline)"></span>
      </template>
    </h2>

    <p
      class="text-body-md-mob mx-auto max-w-[80rem] leading-md s:text-body-md"
      v-html="formatText(data.intro)"
    ></p>

    <!-- cta buttons -->
    <CtaGroup
      v-if="data.cta"
      :data="data.cta.buttons"
      :align="align"
      :theme="theme"
    />

    <!-- breadcrumb nav -->
    <Breadcrumb
      v-if="breadcrumb"
      :data="breadcrumb"
      :theme="theme"
      class="hidden s:block"
    />
  </header>
</template>

<style scoped></style>
