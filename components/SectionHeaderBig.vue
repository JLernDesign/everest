<script setup>
const props = defineProps(["data", "align"]);

// check for inline image marker
const hl = props.data.headline.split(" []");
let hasBlock = false;
if (hl.length > 1) {
  hasBlock = true;
}
console.log(hl.length);
</script>

<template>
  <header v-if="data != undefined" class="space-y-header-lg">
    <h2 class="font-barlow-cond text-xxl font-semibold leading-xxl">
      <!-- has inline block element -->
      <template v-if="hasBlock">
        <span v-html="hl[0]"></span>
        <span
          class="-mr-10 inline-flex h-[16.8rem] w-[32.1rem] rounded-[.9rem] bg-[url(/ui/callout-gradient@2x.png)] bg-cover"
        ></span>
        <span v-html="hl[1]"></span>
      </template>

      <!-- plain headline -->
      <template v-else>
        {{ data.headline }}
      </template>
    </h2>

    <p class="mx-auto max-w-[96rem] text-body-md leading-md">
      {{ data.intro }}
    </p>

    <CtaGroup
      v-if="data.cta"
      :data="data.cta.buttons"
      :align="align"
      :theme="theme"
    />
  </header>
</template>

<style scoped></style>
