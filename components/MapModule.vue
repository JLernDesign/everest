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
  {
    x: "59rem",
    y: "20.8rem",
  },
  {
    x: "65rem",
    y: "25.2rem",
  },
];
</script>

<template>
  <Section>
    <header
      class="space-y-header-mob relative z-1 text-center s:space-y-header-lg"
    >
      <h2
        class="font-barlow-cond text-xxl-mob font-semibold uppercase leading-xxl s:text-xxl"
        v-html="formatText(data.headline)"
      ></h2>
      <p
        class="text-body-md-mob mx-auto max-w-[80rem] leading-md s:text-body-md"
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
          class="pin-label rounded-base-mob absolute -top-[13rem] left-1/2 w-[26rem] -translate-x-1/2 bg-jaffa p-[2.5rem] text-body-sm-mob leading-sm shadow-submenu s:rounded-base s:text-body-sm"
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
