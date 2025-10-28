<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <Section class="pb-section-bot-mob s:pb-section-bot">
    <div
      class="relative mx-auto max-w-base space-y-[2rem] text-center s:space-y-[3.5rem]"
      ref="main"
    >
      <!-- header / intro -->
      <h2
        class="font-barlow-cond text-lg-mob leading-lg s:text-lg"
        v-html="formatText(data.headline)"
      ></h2>

      <!-- brands -->
      <div class="relative left-1/2 w-screen -translate-x-1/2 s:!my-[7rem]">
        <Brands
          theme="light"
          :data="data.logoGroup"
          :scroll="data.logoGroup.logos.length > 7 ? true : false"
          template="centered-text"
        />
      </div>

      <div
        v-if="data.intro"
        class="mx-auto max-w-[100rem] text-body-md-mob s:text-body-md"
      >
        <p v-html="formatText(data.intro)"></p>
      </div>

      <CtaGroup
        v-if="data.cta"
        :data="data.cta.buttons"
        :align="center"
        :theme="light"
      />

      <!-- logo -->
      <div
        v-if="data.logoIcon"
        class="inline-block s:!mt-[5rem] max-s:!mt-[2.5rem]"
      >
        <img
          :src="data.logoIcon.url"
          :alt="data.logoIcon.alt"
          class="h-auto w-full max-w-[16rem] s:max-w-[24rem]"
        />
      </div>
    </div>
  </Section>
</template>
