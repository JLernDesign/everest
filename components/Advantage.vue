<script setup>
const props = defineProps(["data"]);

// format text color for tailwind
let color;
props.data.color == "green" ? (color = "text-green") : null;
props.data.color == "blue" ? (color = "text-lightblue") : null;
props.data.color == "red" ? (color = "text-red") : null;
props.data.color == "yellow" ? (color = "text-yellow") : null;
props.data.color == "brown" ? (color = "text-tan") : null;
props.data.color == "gray" ? (color = "text-white") : null;
</script>

<template>
  <Section class="bg-jaffa pb-section-bot" side="lg">
    <!-- header -->
    <header class="relative flex h-[1.8rem] justify-between">
      <LineFull class="top-1/2" />
      <div class="relative z-1 bg-jaffa px-5 text-body-sm-mob s:text-body-sm">
        {{ data.eyebrow }}
      </div>
      <div class="relative z-1 -translate-y-1 bg-jaffa px-5">
        <IconEyebrow color="fill-black" />
      </div>
    </header>

    <!-- columns -->
    <div class="flex items-start justify-between pt-section-top">
      <!-- headline -->
      <div
        class="rounded-base-mob w-[52rem] bg-shadowblue p-side-mob s:rounded-base s:p-side"
      >
        <h2
          class="font-barlow-cond text-lg-mob font-bold leading-lg s:text-lg"
          :class="color"
          v-html="formatText(data.headline)"
        ></h2>
      </div>

      <!-- contents -->
      <div class="w-[79.4rem] space-y-[3.6rem]">
        <template v-for="(block, i) in data.contentBlocks">
          <!-- text -->
          <template v-if="block.__typename == 'AdvantageTextRecord'">
            <div
              class="content-text bullets lines rounded-base-mob bg-cover p-[2rem] pb-[2.5rem] s:rounded-base [&_ul]:divide-y-1 [&_ul]:divide-grayline [&_ul]:border-y-1 [&_ul]:border-grayline [&_ul]:text-body-sm-mob [&_ul]:s:text-body-sm"
              :style="`background-image:url(/ui/mt-${data.color}@2x.jpg)`"
            >
              <div class="space-y-16 rounded-sm bg-jaffa p-[3.2rem]">
                <span class="space-y-16" v-html="block.content"></span>

                <!-- stats -->
                <div v-if="block.stats" class="stats flex flex-col s:flex-row">
                  <div
                    v-for="item in block.stats.stats"
                    class="stat w-full space-y-5 s:w-1/2"
                  >
                    <h3
                      class="text-xl-mob font-barlow-cond font-bold leading-xl s:text-xl"
                    >
                      {{ item.figure }}
                    </h3>
                    <p class="text-body-xsm-mob s:text-body-xsm">
                      {{ item.label }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <!-- image -->
          <template v-if="block.__typename == 'AdvantageImageRecord'">
            <div
              class="content-image rounded-base-mob bg-cover p-[11.5rem] s:rounded-base"
              :style="`background-image:url(/ui/mt-${data.color}@2x.jpg)`"
            >
              <div class="rounded-base-mob bg-white p-4 s:rounded-base">
                <img v-if="block.image" :src="block.image.url" alt="" />
              </div>
            </div>
          </template>
        </template>
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
