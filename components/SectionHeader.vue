<script setup>
const props = defineProps(["data", "align"]);
</script>

<template>
  <header
    v-if="data != undefined"
    class="space-y-header"
    :class="align == 'center' ? 'text-center' : 'text-left'"
  >
    <!-- eyebrow -->
    <div
      v-if="data.eyebrow"
      class="eyebrow flex flex-col items-center justify-center space-y-[1.8rem]"
    >
      <IconEyebrow color="fill-black" />
      <h3 class="text-eyebrow">{{ data.eyebrow }}</h3>
    </div>

    <!-- header / intro -->
    <div class="has-break space-y-[2.5rem]">
      <h2
        class="font-barlow-cond text-lg font-bold leading-lg"
        v-html="data.headline"
      ></h2>
      <p v-html="data.intro"></p>
    </div>

    <!-- cta buttons -->
    <div
      class="flex space-x-btn"
      :class="align == 'center' ? 'items-center justify-center' : 'text-left'"
    >
      <template v-for="item in data.cta">
        <CtaBtn :to="item.url" v-if="item.type == 'button'">{{
          item.title
        }}</CtaBtn>
        <TextBtn :to="item.url" color="black" v-else>{{ item.title }}</TextBtn>
      </template>
    </div>
  </header>
</template>

<style scoped></style>
