<script setup>
const props = defineProps(["data"]);

const coords = [
  {
    x: "13rem",
    y: "29rem",
  },
  {
    x: "38.4rem",
    y: "63.6rem",
  },
];
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
        v-for="(coord, i) in coords"
        class="pin absolute z-2 h-[6.6rem] w-[7.1rem]"
        :style="`left: ${coord.x}; top: ${coord.y};`"
      >
        <div
          v-if="i < 1 && 'hidden'"
          class="pin-label absolute -top-[13rem] left-1/2 w-[26rem] -translate-x-1/2 rounded-base bg-jaffa p-[2.5rem] text-body-sm leading-sm shadow-submenu"
        >
          <span class="font-helvh">North America</span>
          <br />
          280 Hope Street <br />
          Mountain View, CA 94041
        </div>
        <img src="/public/about/map-pin.svg" alt="" />
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
