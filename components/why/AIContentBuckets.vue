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
          class="rounded-base-mob mx-auto w-[81rem] space-y-[2.5rem] bg-shadowblue p-[6rem] text-center s:rounded-base"
        >
          <h2
            class="font-barlow-cond text-lg-mob font-bold leading-lg s:text-lg"
            v-html="formatText(data.headline)"
          ></h2>
          <p v-html="formatText(data.intro)"></p>
        </div>
      </div>
    </div>

    <!-- buckets -->
    <div
      v-if="data.buckets"
      class="relative border-t border-t-whiteline px-side-lg"
    >
      <div
        class="flex flex-col flex-wrap border-x border-x-whiteline s:flex-row"
      >
        <div
          v-for="(bucket, i) in data.buckets"
          class="bucket w-full px-[8rem] py-[5rem] s:w-1/2"
          :class="[
            i > 1 && 'border-t border-t-whiteline',
            i % 1 == 0 && 'border-l border-l-whiteline',
          ]"
        >
          <div
            class="icon mb-[2.5rem] size-[3.6rem]"
            :class="accentColor(bucket)"
          >
            <img v-if="bucket.icon" :src="bucket.icon.url" alt="" />
          </div>
          <h3
            class="text-sm-mob font-barlow-cond font-bold leading-lg s:text-sm"
            :class="accentColor(bucket)"
            v-html="formatText(bucket.headline)"
          ></h3>
          <p
            class="mt-[1.8rem] text-body-sm-mob leading-sm s:text-body-sm"
            v-html="formatText(bucket.description)"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
