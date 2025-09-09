<script setup>
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

if (isSSR()) {
  gsap.registerPlugin(Draggable, InertiaPlugin);
}

const props = defineProps(["data"]);
const main = ref(null);
const tableData = toRaw(props.data.tableData);
const colIDs = tableData.columns;
const labels = tableData.columns.filter((item, index) => index !== 0);

let mm, boundsX;
const maxw = 650;
const dragEl = ref();
const dragWrap = ref();

onMounted(() => {
  // draggable for mobile (below 650px)
  mm = gsap.matchMedia();

  mm.add("(max-width: " + maxw + "px)", () => {
    // create draggable instance
    let winWidth = window.innerWidth;
    boundsX = dragEl.value.offsetWidth - winWidth;

    Draggable.create(dragEl.value, {
      type: "x",
      zIndexBoost: false,
      edgeResistance: 0.65,
      allowNativeTouchScrolling: true,

      inertia: true,
    });
  });
});

onUnmounted(() => {
  mm.revert();
});

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

const getMinWidth = () => {
  let colW = 15;
  let minW = colW * colIDs.length;
  return minW;
};
</script>

<template>
  <Section class="pb-section-bot-mob s:pb-section-bot max-s:!px-0" ref="main">
    <SectionHeader
      theme="light"
      :data="data.header"
      class="max-s:px-side-mob"
    />

    <!-- desktop -->
    <div class="compare-table relative mx-auto max-w-base" ref="dragWrap">
      <!-- gradient -->
      <div
        class="gradient absolute left-1/2 top-1/2 mt-[4rem] h-[120%] w-[50rem] -translate-x-1/2 -translate-y-1/2 blur-[50px] s:h-[130%] s:w-[180rem]"
      >
        <img
          src="/public/ui/big-bg-gradient.svg"
          alt=""
          class="h-full w-full object-cover"
        />
      </div>

      <!-- table -->
      <div
        class="table-wrap mt-[3.5rem] s:mt-[5.5rem] max-s:px-side-mob [&_.cell]:relative [&_.cell]:flex [&_.cell]:items-center [&_.row]:flex"
        :style="{ minWidth: getMinWidth() + 'rem' }"
        ref="dragEl"
      >
        <!-- table head -->
        <div
          class="table-head row pointer-events-none -mb-[.1rem] h-[3.5rem] w-full px-[.8rem] s:h-[6rem]"
        >
          <div
            class="cell"
            :class="labels.length > 2 ? 'w-[44.5%]' : 'w-[48%] s:w-[52%]'"
          ></div>
          <div
            v-for="item in labels"
            class="cell hl-cell h-full px-2 s:px-[.6rem]"
            :class="labels.length > 2 ? 'w-[18.5%]' : 'w-[26%] s:w-[24%]'"
          >
            <div
              class="hl flex h-full w-full items-center justify-center rounded-t-sm px-[2.4rem] s:justify-between max-s:text-center"
              :class="
                isHighlight(item)
                  ? 'bg-shadowblue text-white'
                  : 'bg-jaffalt text-black'
              "
            >
              <h4
                class="font-barlow-cond uppercase"
                :class="
                  labels.length > 2 && 'max-s:text-body-xsm max-s:leading-[.9]'
                "
              >
                {{ item }}
              </h4>
              <div v-if="isHighlight(item)" class="hidden w-[2.5rem] s:block">
                <IconLogoMark color="white" />
              </div>
            </div>
          </div>
        </div>

        <!-- table body -->
        <div
          class="table-contents relative w-full rounded-base bg-shadowblue p-[.8rem] text-body-xsm-mob s:text-body-sm [&_.cell]:py-3 [&_.cell]:s:py-5 [&_.check]:w-[5.2rem] [&_.check]:s:w-[6.6rem] [&_.row]:min-h-[5.6rem] [&_.row]:s:min-h-[7rem]"
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
                <div
                  v-if="i == 0"
                  class="cell pl-6 s:pl-[1.8rem] max-s:pr-8"
                  :class="labels.length > 2 ? 'w-[44.5%]' : 'w-[48%] s:w-[52%]'"
                >
                  <p>{{ item[colIDs[i]] }}</p>
                </div>

                <!-- highlight cell -->
                <div
                  v-else-if="isHighlight(col)"
                  class="cell hl-cell px-6 s:px-12"
                  :class="labels.length > 2 ? 'w-[18.5%]' : 'w-[26%] s:w-[24%]'"
                >
                  <div
                    class="hl absolute left-0 top-0 h-full w-full s:px-[.6rem]"
                    :class="[
                      n == 0 && 's:pt-[.6rem]',
                      n == tableData.data.length - 1 && 's:pb-[.6rem]',
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
                  class="cell px-6 s:px-12"
                  :class="labels.length > 2 ? 'w-[18.5%]' : 'w-[26%] s:w-[24%]'"
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
