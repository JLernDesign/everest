<script setup>
const props = defineProps(["data", "align"]);
</script>

<template>
  <header v-if="data != undefined" class="space-y-header-lg">
    <h2 class="font-barlow-cond text-xxl font-semibold leading-xxl">
      {{ data.headline }}
      <!-- A COMPLETELY REIMAGINED <br />
      <span
        class="-mr-10 inline-flex h-[16.8rem] w-[32.1rem] rounded-[.9rem] bg-[url(/ui/3dbg.svg)] bg-cover"
      ></span>
      ERP -->
    </h2>

    <p class="mx-auto max-w-[96rem] text-body-md leading-md">
      {{ data.intro }}
    </p>

    <CtaGroup :data="data.cta" :align="align" />
  </header>
</template>

<style scoped></style>
