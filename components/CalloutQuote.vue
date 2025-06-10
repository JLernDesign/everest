<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <Section class="bg-skyblue !py-side text-center text-white">
    <div
      class="rounded-base bg-[url(/ui/quote-bg@2x.jpg)] bg-cover pb-[11.5rem] pt-[7.6rem]"
    >
      <div
        v-if="data.image"
        class="quote-person mx-auto mb-[8rem] w-[19.5rem] overflow-hidden rounded-sm"
      >
        <img :src="data.image.url" alt="" />
      </div>

      <blockquote
        class="relative mx-auto max-w-[1250px] font-barlow-cond text-xl font-bold leading-xl"
      >
        <div class="quote lt absolute -left-[3.5rem] -top-[5.5rem]">“</div>
        <div class="quote rt absolute -bottom-[18rem] right-0">”</div>
        {{ data.quote }}
      </blockquote>

      <!-- byline -->
      <div v-if="data.name" class="byline mt-[5rem] text-body-xsm">
        <strong class="block font-helvb">{{ data.name }}</strong>
        {{ data.title }}
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
