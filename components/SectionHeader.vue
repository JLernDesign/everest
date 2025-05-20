<script setup>
const props = defineProps(['data']);
</script>

<template>
  <header v-if="data != undefined" class="text-center space-y-header">
    <!-- eyebrow -->
    <div
      class="eyebrow flex flex-col items-center justify-center space-y-[1.8rem]"
    >
      <IconEyebrow color="fill-black" />
      <h3 class="text-eyebrow">{{ data.eyebrow }}</h3>
    </div>

    <!-- header / intro -->
    <div class="space-y-[2.5rem] has-break">
      <h2
        class="text-lg font-barlow-cond font-bold leading-lg"
        v-html="data.headline"
      ></h2>
      <p v-html="data.intro"></p>
    </div>

    <!-- cta buttons -->
    <div class="flex justify-center items-center space-x-btn">
      <template v-for="item in data.cta">
        <CtaBtn :to="item.url" v-if="item.type == 'button'">{{
          item.title
        }}</CtaBtn>
        <TextBtn :to="item.url" v-else>{{ item.title }}</TextBtn>
      </template>
    </div>
  </header>
</template>

<style scoped></style>
