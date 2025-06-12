<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <div>
    <!-- header -->
    <div class="relative border-t border-t-whiteline px-side-lg">
      <div
        class="w-full border-x border-x-whiteline bg-[url(/why/ai-lines-bgfull.svg)] bg-cover px-side py-[11.2rem]"
      >
        <div
          class="mx-auto w-[81rem] space-y-[2.5rem] rounded-base bg-shadowblue p-[6rem] text-center"
        >
          <h2
            class="font-barlow-cond text-lg font-bold leading-lg"
            v-html="addLineBreaks(data.headline)"
          ></h2>
          <p v-html="addLineBreaks(data.intro)"></p>
        </div>
      </div>
    </div>

    <!-- buckets -->
    <div
      v-if="data.buckets"
      class="relative border-t border-t-whiteline px-side-lg"
    >
      <div class="flex flex-wrap border-x border-x-whiteline">
        <div
          v-for="(bucket, i) in data.buckets"
          class="bucket w-1/2 px-[8rem] py-[5rem]"
          :class="[
            i > 1 && 'border-t border-t-whiteline',
            i % 1 == 0 && 'border-l border-l-whiteline',
          ]"
        >
          <div
            class="icon mb-[2.5rem] size-[3.6rem] rounded-full border-2"
            :class="accentColor(bucket)"
          >
            <img v-if="bucket.icon" :src="bucket.icon.url" alt="" />
          </div>
          <h3
            class="font-barlow-cond text-sm font-bold leading-lg"
            :class="accentColor(bucket)"
            v-html="addLineBreaks(bucket.headline)"
          ></h3>
          <p
            class="mt-[1.8rem] text-body-sm leading-sm"
            v-html="addLineBreaks(bucket.description)"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
