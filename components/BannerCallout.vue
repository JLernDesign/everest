<script setup></script>

<template>
  <div class="relative p-side pb-section-bot">
    <!-- content -->
    <div
      class="relative z-1 flex justify-between overflow-hidden rounded-base bg-shadowblue bg-[url(/ui/callout-texture@2x.jpg)] bg-cover p-[7rem] pl-[11.5rem] pt-[8rem] text-white"
    >
      <!-- text -->
      <div class="text relative w-[50%] space-y-14">
        <h2 class="font-barlow-cond text-lg font-bold leading-lg">
          See how Everest can transform your SaaS operations.
        </h2>
        <p>
          Discover how Everest empowers finance and operations leaders to drive
          <br />
          faster growth, smarter decisions, and stronger margins.
        </p>
        <div class="btn-group space-x-nav">
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
      class="glow absolute left-1/2 top-[39rem] z-0 w-[203.7rem] -translate-x-1/2 blur-[50px]"
    >
      <img src="/public/ui/callout-bot-gradient.svg" alt="" />
    </div>
  </div>
</template>

<style scoped></style>
