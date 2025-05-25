<script setup></script>

<template>
  <div class="relative p-side">
    <!-- content -->
    <div
      class="relative z-1 flex justify-between overflow-hidden rounded-base bg-shadowblue bg-[url(/ui/callout-texture@2x.jpg)] bg-cover p-[7rem] pl-[11.5rem] text-white"
    >
      <!-- text -->
      <div class="text relative w-[50%]">
        <h2 class="font-barlow-cond text-lg font-bold leading-lg">
          See how Everest can transform your SaaS operations.
        </h2>
        <p class="mt-[4.75rem]">
          Discover how Everest empowers finance and operations leaders to drive
          <br />
          faster growth, smarter decisions, and stronger margins.
        </p>
        <div class="btn-group mt-side space-x-nav">
          <CtaBtn to="#">Try Everest</CtaBtn>
          <TextBtn to="#" color="white">Contact Us</TextBtn>
        </div>
      </div>

      <!-- image -->
      <div
        class="h-[31rem] w-[59rem] rounded-[.9rem] bg-[url(/ui/3dbg.svg)] bg-cover"
      ></div>
    </div>

    <!-- gradient -->
    <div
      class="glow absolute left-1/2 top-[39rem] z-0 w-[118.1rem] -translate-x-1/2 blur-[50px]"
    >
      <img src="/public/ui/callout-bot-gradient.svg" alt="" />
    </div>
  </div>
</template>

<style scoped></style>
