<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <Section side="none" class="bg-shadowblue !pt-0 pb-section-bot-lg">
    <UIJagEdge color="fill-shadowblue" />

    <SectionHeader theme="dark" :data="data.header" />

    <!-- buckets -->
    <div class="mt-[8rem] flex flex-nowrap gap-[6rem] px-side-lg">
      <div
        v-for="(item, i) in data.buckets"
        class="bucket w-[45.5rem] shrink-0 rounded-base bg-shadowbluelt p-[3rem]"
      >
        <IconTri color="fill-red" class="mb-4" />
        <div
          class="num mb-12 font-barlow-cond text-xxl font-semibold leading-xxl text-shadowblue"
        >
          {{ "0" + (i + 1) }}
        </div>
        <h3
          class="mb-7 font-barlow-cond text-sm font-bold leading-[.94] text-red"
        >
          {{ item.headline }}
        </h3>
        <p class="text-body-sm leading-sm text-white">
          {{ item.description }}
        </p>
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
