<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <div class="relative px-side py-section-bot">
    <!-- content -->
    <div
      class="relative z-1 flex justify-between overflow-hidden rounded-base bg-shadowblue bg-[url(/ui/callout-texture@2x.jpg)] bg-cover p-[7rem] pl-[11.5rem] text-white"
    >
      <!-- text -->
      <div class="text relative w-[50%] space-y-14 pt-4">
        <h2
          v-if="data.headline"
          class="font-barlow-cond text-lg font-bold leading-lg"
          v-html="addLineBreaks(data.headline)"
        ></h2>
        <p v-if="data.intro" v-html="addLineBreaks(data.intro)"></p>

        <CtaGroup
          v-if="data.cta"
          :data="data.cta.buttons"
          :align="left"
          theme="dark"
        />
      </div>

      <!-- image 3D -->
      <div
        class="relative h-[31rem] w-[59rem] overflow-hidden rounded-base bg-[url(/public/ui/callout-gradient@2x.png)] bg-cover"
      ></div>
    </div>
  </div>
</template>

<style scoped></style>
