<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <div class="relative p-side-mob s:p-side">
    <!-- content -->
    <div
      class="rounded-base-mob relative overflow-hidden bg-[#FFD0B9] px-side-mob py-side-mob s:rounded-base s:px-[11.5rem] s:py-[7rem]"
    >
      <!-- gradient -->
      <div
        class="circle-gradient absolute h-[60.8rem] w-[38.5rem] -rotate-90 rounded-[121.6rem] opacity-[.6] blur-[50px] s:-right-[6rem] s:-top-[44rem] s:h-[121.6rem] s:w-[77rem] max-s:-bottom-[20rem] max-s:left-1/2 max-s:translate-x-[-50%]"
        style="
          background: radial-gradient(
            80.43% 67.96% at 27.01% 46.13%,
            #ff9dda 0%,
            #f7ff9d 55.77%
          );
        "
      ></div>

      <!-- text -->
      <div class="text has-break relative w-full s:w-[65%]">
        <h2
          v-if="data.headline"
          class="text-xl-mob font-barlow-cond font-bold leading-xl s:text-xl max-s:pr-[2rem]"
          v-html="formatText(data.headline)"
        ></h2>
        <p
          v-if="data.intro"
          class="mt-[3rem] s:mt-[4.75rem]"
          v-html="formatText(data.intro)"
        ></p>

        <CtaGroup
          v-if="data.cta"
          :data="data.cta.buttons"
          :align="left"
          theme="light"
          class="mt-side-mob s:mt-side"
        />
      </div>

      <!-- image -->
      <div
        class="right-0 top-0 flex h-full items-center pr-[12rem] s:absolute max-s:h-[32.5rem]"
      >
        <!-- <div class="w-[54rem]">
          <img src="/public/ui/ph-footer-callout@2x.png" alt="" />
        </div> -->
      </div>

      <!-- seal -->
      <div class="absolute right-0 top-0 hidden p-side-mob s:block s:p-side">
        <img src="/public/ui/tri-erp.svg" alt="" class="w-[12.2rem]" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
