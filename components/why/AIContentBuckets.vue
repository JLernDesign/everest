<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <div>
    <!-- header -->
    <div class="relative border-t border-t-whiteline px-side-mob s:px-side-lg">
      <div
        class="w-full border-x border-x-whiteline bg-[url(/why/ai-lines-bgfull.svg)] bg-cover px-side-mob py-[4rem] s:px-side s:py-[11.2rem]"
      >
        <div
          class="rounded-base-mob mx-auto space-y-[2.5rem] bg-shadowblue p-side-mob text-center s:w-[81rem] s:rounded-base s:p-[6rem]"
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
      class="relative border-t border-t-whiteline px-side-mob s:px-side-lg"
    >
      <div
        class="flex flex-col flex-wrap border-x border-x-whiteline s:flex-row"
      >
        <div
          v-for="(bucket, i) in data.buckets"
          class="bucket w-full px-side-mob py-[3rem] s:w-1/2 s:px-[8rem] s:py-[5rem]"
          :class="[
            i > 1 && 'border-t border-t-whiteline',
            i % 1 == 0 &&
              's:border-l s:border-l-whiteline max-s:border-t max-s:border-t-whiteline',
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
