<script setup>
const props = defineProps(["data"]);
//130, 290
</script>

<template>
  <Section>
    <header class="relative z-1 space-y-header-lg text-center">
      <h2
        class="font-barlow-cond text-xxl font-semibold uppercase leading-xxl"
        v-html="formatText(data.headline)"
      ></h2>
      <p
        class="mx-auto max-w-[80rem] text-body-md leading-md"
        v-html="formatText(data.intro)"
      ></p>
    </header>

    <!-- map area -->
    <div class="map relative mx-auto mt-[7.5rem] w-[138.2rem]">
      <!-- gradient -->
      <div
        class="gradient absolute -top-[31rem] left-1/2 h-[118rem] w-[180rem] -translate-x-1/2 blur-[50px]"
      >
        <img src="/public/ui/big-bg-gradient.svg" alt="" />
      </div>

      <!-- map -->
      <img src="/public/about/map@2x.png" alt="" class="relative" />

      <!-- pins -->

      <div
        class="pin absolute left-[13rem] top-[29rem] z-2 h-[6.6rem] w-[7.1rem]"
      >
        <img src="/public/about/map-pin.svg" alt="" />
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
