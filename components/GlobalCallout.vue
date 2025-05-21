<script setup></script>

<template>
  <div class="relative p-side">
    <!-- content -->
    <div
      class="relative overflow-hidden rounded-base bg-[#FFD0B9] px-[11.5rem] py-[7rem]"
    >
      <!-- gradient -->
      <div
        class="circle-gradient absolute -right-[6rem] -top-[44rem] h-[121.6rem] w-[77rem] -rotate-90 rounded-[121.6rem] opacity-[.6] blur-[100px]"
        style="
          background: radial-gradient(
            80.43% 67.96% at 27.01% 46.13%,
            #ff9dda 0%,
            #f7ff9d 55.77%
          );
        "
      ></div>

      <!-- text -->
      <div class="text relative w-[65%]">
        <h2 class="font-barlow-cond text-xl font-bold leading-xl">
          See how Everest can transform your SaaS operations.
        </h2>
        <p class="mt-[4.75rem]">
          Discover how Everest empowers finance and operations leaders to drive
          <br />
          faster growth, smarter decisions, and stronger margins.
        </p>
        <div class="btn-group mt-side space-x-nav">
          <CtaBtn to="#">Try Everest</CtaBtn>
          <TextBtn to="#" color="black">Contact Us</TextBtn>
        </div>
      </div>

      <!-- image -->
      <div class="absolute right-0 top-0 flex h-full items-center pr-[12rem]">
        <!-- <div class="w-[54rem]">
          <img src="/public/ui/ph-footer-callout@2x.png" alt="" />
        </div> -->
      </div>

      <!-- seal -->
      <div class="absolute right-0 top-0 p-side">
        <img src="/public/ui/tri-erp.svg" alt="" class="w-[12.2rem]" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
