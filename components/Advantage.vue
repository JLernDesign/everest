<script setup>
const props = defineProps(["data"]);
console.log(props.data);

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
      <div class="relative z-1 bg-jaffa px-5 text-body-sm">
        {{ data.eyebrow }}
      </div>
      <div class="relative z-1 -translate-y-1 bg-jaffa px-5">
        <IconEyebrow color="fill-black" />
      </div>
    </header>

    <!-- columns -->
    <div class="flex items-start justify-between pt-section-top">
      <!-- headline -->
      <div class="w-[52rem] rounded-base bg-shadowblue p-side">
        <h2
          class="font-barlow-cond text-lg font-bold leading-lg"
          :class="color"
          v-html="addLineBreaks(data.headline)"
        ></h2>
      </div>

      <!-- contents -->
      <div class="w-[79.4rem] space-y-[3.6rem]">
        <template v-for="(block, i) in data.contentBlocks">
          <!-- text -->
          <template v-if="block.__typename == 'AdvantageTextRecord'">
            <div
              class="content-text bullets lines rounded-base bg-cover p-[2rem] pb-[2.5rem] [&_ul]:divide-y-1 [&_ul]:divide-grayline [&_ul]:border-y-1 [&_ul]:border-grayline"
              :style="`background-image:url(/ui/mt-${data.color}@2x.jpg)`"
            >
              <div class="space-y-16 rounded-sm bg-jaffa p-[3.2rem]">
                <span class="space-y-16" v-html="block.content"></span>

                <!-- stats -->
                <div v-if="block.stats" class="stats flex">
                  <div
                    v-for="item in block.stats.stats"
                    class="stat w-1/2 space-y-5"
                  >
                    <h3 class="font-barlow-cond text-xl font-bold leading-xl">
                      {{ item.figure }}
                    </h3>
                    <p class="text-body-xsm">{{ item.label }}</p>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <!-- image -->
          <template v-if="block.__typename == 'AdvantageImageRecord'">
            <div
              class="content-image rounded-base bg-cover p-[11.5rem]"
              :style="`background-image:url(/ui/mt-${data.color}@2x.jpg)`"
            >
              <div class="rounded-base bg-white p-4">
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
