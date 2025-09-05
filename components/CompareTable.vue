<script setup>
import gsap from "gsap";

const props = defineProps(["data"]);
const main = ref(null);
</script>

<template>
  <Section class="pb-section-bot-mob s:pb-section-bot" ref="main">
    <SectionHeader theme="light" :data="data.header" />

    <!-- desktop -->
    <div class="compare-table relative mx-auto max-w-base">
      <!-- gradient -->
      <div
        class="gradient absolute left-1/2 top-1/2 mt-[4rem] hidden h-[150%] w-[180rem] -translate-x-1/2 -translate-y-1/2 blur-[50px] s:block"
      >
        <img
          src="/public/ui/big-bg-gradient.svg"
          alt=""
          class="h-full w-full object-cover"
        />
      </div>

      <!-- table -->
      <div
        class="table-wrap mt-[5.5rem] [&_.cell]:relative [&_.cell]:flex [&_.cell]:items-center [&_.row]:flex"
      >
        <!-- table head -->
        <div class="table-head row -mb-[.1rem] h-[6rem] w-full px-[.8rem]">
          <div class="cell w-[52%]"></div>

          <div class="cell hl-cell h-full w-[24%] px-[.6rem]">
            <div
              class="hl flex h-full w-full items-center justify-between rounded-t-sm bg-shadowblue px-[2.4rem] text-white"
            >
              <h4 class="font-barlow-cond uppercase">Everest</h4>
              <div class="w-[2.5rem]">
                <IconLogoMark color="white" />
              </div>
            </div>
          </div>
          <div class="cell hl-cell h-full w-[24%] px-[.6rem]">
            <div
              class="hl flex h-full w-full items-center rounded-t-sm bg-jaffalt px-[2.4rem] text-black"
            >
              <h4 class="font-barlow-cond uppercase">Netsuite</h4>
            </div>
          </div>
        </div>

        <!-- table body -->
        <div
          class="table-contents relative w-full rounded-base bg-shadowblue p-[.8rem] text-body-sm [&_.cell]:py-5 [&_.check]:w-[6.6rem] [&_.row]:min-h-[7rem]"
        >
          <div
            class="inner w-full divide-y divide-grayline rounded-sm bg-jaffa"
          >
            <div v-for="n in 2" class="row w-full divide-x divide-grayline">
              <!-- title cell -->
              <div class="cell w-[52%] pl-[1.8rem]"><p>G2 reviews</p></div>

              <!-- highlight cell -->
              <div class="cell hl-cell w-[24%] px-12">
                <div
                  class="hl absolute left-0 top-0 h-full w-full px-[.6rem]"
                  :class="n == 1 && 'pt-[.6rem]'"
                >
                  <div
                    class="h-full w-full bg-white"
                    :class="n == 1 && 'rounded-t-sm'"
                  ></div>
                </div>
                <div class="relative">
                  <p>5.0/5 stars</p>
                </div>
              </div>

              <!-- others cell -->
              <div class="cell w-[24%] px-12"><p>4.0/5 stars</p></div>
            </div>

            <!-- testing -->
            <div v-for="n in 8" class="row w-full divide-x divide-grayline">
              <div class="cell w-[52%] px-[1.8rem]">
                <p>
                  Native integration with CRM, payment processors and many
                  others
                </p>
              </div>
              <div class="cell hl-cell w-[24%] px-12">
                <div
                  class="hl absolute left-0 top-0 h-full w-full px-[.6rem]"
                  :class="n == 8 && 'pb-[.6rem]'"
                >
                  <div
                    class="h-full w-full bg-white"
                    :class="n == 8 && 'rounded-b-sm'"
                  ></div>
                </div>
                <div class="relative">
                  <img class="check" src="/public/ui/table-yes.svg" alt="" />
                </div>
              </div>
              <div class="cell w-[24%] px-12">
                <img class="check" src="/public/ui/table-no.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
