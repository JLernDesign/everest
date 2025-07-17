<script setup>
import gsap from "gsap";
const props = defineProps(["theme", "data", "template"]);
const groupNum = ref(0);
const active = ref(0);
const main = ref(null);
const sidebar = ref(null);
let mm, ctx;
const min = 650;

onMounted(() => {
  //items = main.value.querySelectorAll(".item");

  mm = gsap.matchMedia();
  ctx = gsap.context((self) => {
    setTimeout(() => {
      // pin menu for duration of article
      mm.add("(min-width: " + min + "px)", () => {
        pinMenu(
          sidebar.value,
          self.selector(".start-pin"),
          self.selector(".end-pin"),
        );
      });
    }, 200);
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
  mm.revert();
});

const handleMouseEnter = (i) => {
  active.value = i;
};

const handleClick = (link) => {
  if (link) {
    window.open(link, "_blank");
  }
};

const changeGroup = (group) => {
  groupNum.value = group;
};
</script>

<template>
  <Section :theme="theme" class="bg-jaffa pb-section-bot-mob s:pb-section-bot">
    <SectionHeader :theme="theme" :data="data.header" />

    <!-- subnav -->
    <SubNav
      v-if="data.groups.length > 1"
      :data="data.groups"
      :changeContent="changeGroup"
      class="max-s:mt-8"
    />

    <!-- desktop module -->
    <div class="mt-[10rem] hidden flex-col s:flex s:flex-row" ref="main">
      <!-- logo -->
      <div class="w-full s:w-1/2" ref="sidebar">
        <div
          class="menu grid h-[42rem] w-full place-content-center rounded-base-mob bg-[url(/ui/callout-texture@2x.jpg)] bg-[size:1717px_auto] s:rounded-base"
        >
          <div
            class="flex h-[18rem] w-[28rem] rounded-base-mob bg-jaffa s:rounded-base"
          >
            <img
              v-if="data.groups[groupNum].items[active].image"
              :src="data.groups[groupNum].items[active].image.url"
              class="h-full w-full object-contain"
              alt=""
            />
          </div>
        </div>
      </div>

      <!-- text -->
      <div class="w-full pl-[14rem] leading-[1] s:w-1/2">
        <div class="start-pin"></div>
        <div
          class="mb-[3rem] flex px-[2rem] font-barlow text-body-xsm-mob uppercase opacity-40 s:text-body-xsm"
        >
          <span class="w-[38%]">{{ data.groups[groupNum].headerLeft }}</span>
          <span class="w-[62%]">{{ data.groups[groupNum].headerRight }}</span>
        </div>

        <!-- items -->
        <div class="space-y-1">
          <template v-for="(item, i) in data.groups[groupNum].items">
            <div
              class="item group relative cursor-pointer text-body-sm-mob leading-sm s:text-body-sm"
              @mouseenter="handleMouseEnter(i)"
              @click="handleClick(item.link)"
            >
              <div
                class="absolute -top-[.2rem] h-full w-full scale-y-0 rounded-base-mob bg-white transition-all duration-300 ease-in-out group-hover:scale-y-100 s:rounded-base"
              ></div>
              <div class="relative flex px-[2rem] py-[1.2rem]">
                <span class="w-[38%] pr-4">{{ item.name }}</span>
                <span class="w-[62%]">{{ item.description }}</span>
              </div>
            </div>
          </template>
        </div>
        <div class="end-pin"></div>
      </div>
    </div>

    <!-- mobile module -->

    <!-- text list -->
    <template v-if="template == 'about'">
      <div
        class="mt-[4.5rem] block divide-y-1 divide-grayline border-y-1 border-grayline s:hidden"
      >
        <div
          v-for="(item, i) in data.groups[groupNum].items"
          class="py-8 text-body-sm-mob leading-sm"
        >
          <h4 class="mb-2 font-helvb">{{ item.name }}</h4>

          {{ item.description }}
        </div>
      </div>
    </template>

    <!-- logo blocks -->
    <template v-else>
      <div class="mt-[4.5rem] grid w-full grid-cols-2 gap-[2rem] s:hidden">
        <div
          v-for="(item, i) in data.groups[groupNum].items"
          class="rounded-base border border-grayline"
        >
          <img
            v-if="item.image"
            :src="item.image.url"
            class="h-full w-full object-contain"
            alt=""
          />
        </div>
      </div>
    </template>
  </Section>
</template>

<style scoped></style>
