<script setup>
import gsap from "gsap";

const props = defineProps(["data"]);
const main = ref(null);
</script>

<template>
  <Section class="pb-section-bot-mob s:pb-section-bot" ref="main">
    <SectionHeader theme="light" :data="data.header" />

    <!-- desktop table -->
    <div class="compare-table relative">
      <!-- gradient -->
      <div
        class="gradient absolute -top-[31rem] left-1/2 hidden h-[118rem] w-[180rem] -translate-x-1/2 blur-[50px] s:block"
      >
        <img src="/public/ui/big-bg-gradient.svg" alt="" />
      </div>

      <!-- table contents -->
      <div
        class="table-contents w-full rounded-base bg-shadowblue p-[.8rem] text-body-sm"
      >
        <div class="inner rounded-sm bg-jaffa">
          <div class="row">
            <p>G2 reviews</p>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
