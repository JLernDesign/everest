<script setup>
import gsap from "gsap";

const props = defineProps(["data"]);
const main = ref(null);
const tableData = toRaw(props.data.tableData);
const colIDs = tableData.columns;
const labels = tableData.columns.filter((item, index) => index !== 0);
const isHighlight = (item) => {
  return item.toLowerCase().includes("everest");
};
const formatContent = (item) => {
  if (item.toLowerCase() == "yes") {
    return '<img class="check" src="/ui/table-yes.svg" alt="" />';
  } else if (item.toLowerCase() == "no") {
    return '<img class="check" src="/ui/table-no.svg" alt="" />';
  } else {
    return "<p>" + item + "</p>";
  }
};
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
          <div
            v-for="item in labels"
            class="cell hl-cell h-full w-[24%] px-[.6rem]"
          >
            <div
              class="hl flex h-full w-full items-center justify-between rounded-t-sm px-[2.4rem]"
              :class="
                isHighlight(item)
                  ? 'bg-shadowblue text-white'
                  : 'bg-jaffalt text-black'
              "
            >
              <h4 class="font-barlow-cond uppercase">{{ item }}</h4>
              <div v-if="isHighlight(item)" class="w-[2.5rem]">
                <IconLogoMark color="white" />
              </div>
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
            <div
              v-for="(item, n) in tableData.data"
              class="row w-full divide-x divide-grayline"
            >
              <template v-for="(col, i) in colIDs">
                <!-- label cell -->
                <div v-if="i == 0" class="cell w-[52%] pl-[1.8rem]">
                  <p>{{ item[colIDs[i]] }}</p>
                </div>

                <!-- highlight cell -->
                <div
                  v-else-if="isHighlight(col)"
                  class="cell hl-cell w-[24%] px-12"
                >
                  <div
                    class="hl absolute left-0 top-0 h-full w-full px-[.6rem]"
                    :class="[
                      n == 0 && 'pt-[.6rem]',
                      n == tableData.data.length - 1 && 'pb-[.6rem]',
                    ]"
                  >
                    <div
                      class="h-full w-full bg-white"
                      :class="[
                        n == 0 && 'rounded-t-sm',
                        n == tableData.data.length - 1 && 'rounded-b-sm',
                      ]"
                    ></div>
                  </div>
                  <div class="relative" v-html="formatContent(item[col])"></div>
                </div>

                <!-- compare cells -->
                <div
                  v-else
                  class="cell w-[24%] px-12"
                  v-html="formatContent(item[col])"
                ></div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
