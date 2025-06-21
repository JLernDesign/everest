<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <div class="relative p-side-mob s:px-side s:py-section-bot">
    <!-- content -->
    <div
      class="rounded-base-mob relative z-1 flex flex-col justify-between overflow-hidden bg-shadowblue bg-[url(/ui/callout-texture-mob@2x.jpg)] bg-cover p-side-mob text-white s:flex-row s:rounded-base s:bg-[url(/ui/callout-texture@2x.jpg)] s:p-[7rem] s:pl-[11.5rem]"
    >
      <!-- text -->
      <div
        class="text relative w-full space-y-10 pt-4 s:w-1/2 s:space-y-14 max-s:order-2 max-s:mt-10 max-s:pb-[3.5rem]"
      >
        <h2
          v-if="data.headline"
          class="font-barlow-cond text-lg-mob font-bold leading-lg s:text-lg"
          v-html="formatText(data.headline)"
        ></h2>
        <p v-if="data.intro" v-html="formatText(data.intro)"></p>

        <CtaGroup
          v-if="data.cta"
          :data="data.cta.buttons"
          :align="left"
          theme="dark"
        />
      </div>

      <!-- image 3D -->
      <div
        class="rounded-base-mob relative h-[16rem] w-full overflow-hidden bg-[url(/public/ui/callout-gradient@2x.png)] bg-cover s:h-[31rem] s:w-[59rem] s:rounded-base max-s:order-1"
      ></div>
    </div>
  </div>
</template>

<style scoped></style>
