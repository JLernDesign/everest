<script setup></script>

<template>
  <div
    class="overview-card dark relative w-full border-b border-[#3D4856] bg-shadowblue px-side-mob py-[11rem] s:px-side"
  >
    <div class="content relative z-1 flex justify-between">
      <!-- text -->
      <div class="left w-1/2 max-w-[60rem]">
        <div class="num mb-[11rem]">
          <IconTri color="fill-red" />
          <div class="font-barlow-cond text-num font-bold opacity-30">01</div>
        </div>

        <h3 class="mb-5 font-helvb text-md">Quote to Cash</h3>
        <p>
          From order creation and activation to invoicing and revenue
          recognition, every step is integrated within a single platform. By
          linking Order to Cash directly to the core General Ledger, Everest ERP
          ensures that financial records are always up-to-date, enabling precise
          revenue forecasts and ensuring compliance.
        </p>

        <CtaBtn to="#" class="mt-8">Learn More</CtaBtn>

        <div
          class="slide-nav absolute bottom-0 left-0 w-[21rem] bg-[url(/public/ui/peak.png)] bg-contain bg-bottom bg-no-repeat"
        >
          <div class="flex w-full flex-col gap-y-6">
            <div
              v-for="n in 7"
              class="nav-line h-[1px] w-full bg-[#3D4856]"
            ></div>
          </div>
        </div>
      </div>

      <!-- image -->
      <div class="right w-1/2">
        <div
          class="image relative grid aspect-[1.0675] w-full place-content-center overflow-hidden rounded-base bg-skyblue p-[15rem]"
        >
          <UIGridlines />
          <div class="image-ph">
            <img src="/public/home/ph-product-illus.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <UIGradientBot />
  </div>
</template>

<style scoped></style>
