<script setup>
const props = defineProps(["theme", "nav", "data", "num", "template"]);
</script>

<template>
  <div
    class="overview-card dark relative w-full border-b px-side-mob py-[11rem] s:px-side"
    :class="
      theme == 'dark'
        ? 'border-[#3D4856] bg-shadowblue'
        : 'border-grayline bg-jaffa'
    "
  >
    <div class="content relative z-1 flex justify-between">
      <!-- text -->
      <div class="left w-1/2 max-w-[60rem]">
        <div class="num mb-[11rem]">
          <IconTri color="fill-red" />
          <div class="font-barlow-cond text-num font-bold opacity-30">
            {{ num < 10 ? "0" + num : num }}
          </div>
        </div>

        <h3
          class="leading-sm-md mb-5 font-helvb text-md"
          v-html="addLineBreaks(data.headline)"
        ></h3>
        <span v-html="data.body"></span>

        <!-- cta buttons -->
        <CtaGroup
          v-if="data.cta"
          :data="data.cta.buttons"
          :align="align"
          :theme="theme"
          class="mt-8"
        />

        <!-- slide nav -->
        <div
          v-if="nav"
          class="slide-nav absolute bottom-0 left-0 w-[21rem] bg-[url(/public/ui/peak.png)] bg-contain bg-bottom bg-no-repeat"
        >
          <div class="flex w-full flex-col gap-y-6">
            <div
              v-for="n in 7"
              class="nav-line h-[1px] w-full bg-[#3D4856]"
            ></div>
          </div>
        </div>
      </div>

      <!-- image -->
      <div class="right w-1/2">
        <div
          class="image relative grid aspect-[1.0675] w-full place-content-center overflow-hidden rounded-base bg-skyblue"
          :class="template == 'home' ? 'p-[11.5rem]' : 'p-side'"
        >
          <UICloud type="2" class="-left-[16rem] top-[44rem]" />
          <UICloud type="2" class="-top-[25rem] left-[18rem]" />

          <div class="image-ph relative">
            <img :src="data.image?.url" alt="" />
          </div>
        </div>
      </div>
    </div>

    <UIGradientBot :theme="theme" />
  </div>
</template>

<style scoped></style>
