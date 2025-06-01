<script setup></script>

<template>
  <div>
    <!-- header -->
    <div class="px-side-lg relative flex border-t border-t-whiteline">
      <!-- side images -->
      <div
        v-for="n in 2"
        class="absolute top-0 h-full w-[16rem]"
        :class="n == 1 ? 'left-0' : 'right-0'"
      >
        <img
          src="/public/why/ai-corner-blue@2x.png"
          alt=""
          class="h-full w-full object-cover"
        />
      </div>

      <div class="w-full border-x border-x-whiteline px-side py-[5rem]">
        <h2 class="font-barlow-cond text-lg font-bold leading-lg">
          Why traditional ERP Systems can't get AI right
        </h2>
      </div>
    </div>

    <!-- content -->
    <div class="px-side-lg relative flex border-t border-t-whiteline">
      <!-- image -->
      <div class="w-[57%] border-l border-l-whiteline pl-side">
        <div class="ph-image aspect-[1.44]"></div>
      </div>

      <!-- text -->
      <div
        class="flex w-[43%] flex-col justify-end border-x border-x-whiteline p-[5rem]"
      >
        <p>
          Traditional ERP systems were built for a different era of business.
          They were designed to support stable, linear workflows in industries
          like manufacturing, not the fast-moving, subscription-driven models of
          today’s SaaS companies. As a result, they struggle to keep up with the
          pace of change, the need for automation, and the demand for real-time
          insights
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
