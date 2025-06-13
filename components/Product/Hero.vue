<script setup>
const props = defineProps(["data", "order"]);
</script>

<template>
  <Section :hero="true" side="none" class="overflow-hidden bg-skyblue">
    <!-- bg elements -->
    <UIGlow
      class="bottom-[0rem] left-1/2 h-[36rem] !w-[118rem] -translate-x-1/2"
      src="/ui/edge-gradient-sm.svg"
    />
    <UICloud type="2" class="-top-[30rem] left-[99rem]" />
    <UICloud type="2" class="left-0 top-[68rem]" />
    <UICloud type="3" class="left-[73rem] top-[65rem]" />

    <div class="relative flex border-y border-y-grayline px-side-lg">
      <!-- text -->
      <SectionHeader
        class="w-[57%] border-l border-l-grayline pb-side pl-side pr-[7.5rem] pt-[7.5rem]"
        align="left"
        :hero="true"
        :data="data"
      />

      <!-- image -->
      <div
        class="grid w-[43%] place-content-center border-x border-x-grayline px-[7rem] py-[3.5rem]"
      >
        <img v-if="data.image" :src="data.image.url" alt="" />
      </div>

      <!-- number -->
      <div
        class="absolute right-0 top-0 pr-side pt-[5rem] font-barlow-cond text-num font-bold"
      >
        {{ order < 10 && "0" }}{{ order }}
      </div>
    </div>

    <!-- bottom space -->
    <div class="flex h-[33rem] px-side-lg">
      <div class="w-[57%] border-l border-l-grayline"></div>
      <div class="w-[43%] border-x border-x-grayline"></div>
    </div>

    <UIArrowDown />
  </Section>
</template>

<style scoped></style>
