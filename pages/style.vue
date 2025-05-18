<script setup></script>

<template>
  <div class="px-side space-y-10">
    <div class="text-eyebrowb uppercase font-barlow font-bold">
      Quote to Cash
    </div>

    <div class="max-w-[80rem]">
      <h1 class="font-barlow font-bold text-xl leading-xl">
        Streamline every step from quote to cash.
      </h1>
      <p class="text-body">
        Accelerate revenue recognition, billing, and cash flow management with a
        fully unified SaaS-first process.
      </p>
    </div>

    <h2 class="font-barlow font-semibold text-xxl leading-xxl text-center">
      A COMPLETELY REIMAGINED <br />
      <span
        class="inline-flex w-[32.1rem] h-[16.8rem] bg-[#9DBEE3] rounded-[.9rem] -mr-10"
      ></span>
      ERP
    </h2>
    <p class="text-md leading-md">
      Why SaaS Leaders Choose Everest: Purpose-built for complex SaaS needs,
      powered by AI automation. Gain global visibility, ensure compliance, and
      access real-time metrics—faster and safer.
    </p>

    <div class="space-x-btn">
      <a
        href="#"
        class="text-body-sm font-helvh relative after:h-[1px] after:w-full after:bottom-[2px] after:absolute after:left-0 after:bg-black border-black font-extrabold text-black"
        >Product</a
      >
      <a
        href="#"
        class="text-body-sm font-helvh relative after:h-[1px] after:w-full after:bottom-[2px] after:absolute after:left-0 after:bg-black border-black font-extrabold text-black"
        >Product</a
      >
      <CtaBtn to="#">Try Everest</CtaBtn>
    </div>

    <!-- <a
      href="#"
      class="text-body-sm font-helvh relative underline border-black font-extrabold text-black"
      >Product</a
    > -->
    <CtaBtn to="#">Try Everest</CtaBtn>

    <div class="diamond-btn size-[5.4rem] grid place-content-center relative">
      <div
        class="absolute bg-red w-full h-full rounded-diamond rotate-45 outline outline-1 outline-skyblue -outline-offset-[.8rem]"
      ></div>
      <img src="/public/ui/arrow-fill.svg" class="relative ml-1" alt="" />
    </div>

    <div class="arrow-down rotate-90 -scale-y-100 inline-block">
      <IconArrow color="stroke-black" />
    </div>

    <IconChevron color="stroke-red" />

    <div>
      <div
        v-for="n in 2"
        class="overview dark bg-shadowblue w-full h-[50rem] relative border-b border-[#3D4856]"
      >
        <div
          class="from-[#21272F] to-shadowblue bg-gradient-to-t w-full h-[6.2rem] absolute bottom-0 left-0 opacity-[.6]"
        ></div>
      </div>
    </div>

    <div class="has-jag">
      <div class="w-full bg-red h-[30rem]"></div>
      <div class="relative w-full bg-peach pb-20">
        <div class="absolute w-full h-[26.8rem] -top-[26.8rem]">
          <UIJagEdge color="fill-peach" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
