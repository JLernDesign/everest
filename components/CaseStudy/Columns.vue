<script setup>
const props = defineProps(["data"]);
const color = "green";
</script>

<template>
  <Section
    class="cs-columns bg-jaffa pb-section-bot-mob s:pb-section-bot"
    side="lg"
  >
    <!-- columns -->
    <div
      class="mx-auto flex max-w-base flex-col items-start justify-between s:flex-row max-s:gap-[2.5rem]"
    >
      <!-- headline -->
      <div class="w-full s:w-[52rem] s:rounded-base">
        <h2
          class="font-barlow-cond text-lg-mob leading-lg s:text-lg"
          v-html="formatText(data.headline)"
        ></h2>
      </div>

      <!-- contents -->
      <div class="w-full space-y-8 s:w-[79.4rem] s:space-y-[3.6rem]">
        <template v-for="(block, i) in data.contentBlocks">
          <!-- text -->
          <template v-if="block.__typename == 'TextBlockRecord'">
            <div class="content-text bullets [&_ul]:space-y-[1rem]">
              <span
                class="space-y-10 s:space-y-16"
                v-html="block.content"
              ></span>
            </div>
          </template>

          <!-- image -->
          <template v-if="block.__typename == 'ImageBlockRecord'">
            <div
              class="content-image rounded-base-mob bg-cover px-[5rem] py-[8rem] s:rounded-base s:p-[11.5rem]"
              :style="`background-image:url(/ui/mt-${color}@2x.jpg)`"
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
