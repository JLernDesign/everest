<script setup>
const props = defineProps(["data"]);

// if more than 3 items, init slider
let slider = false;
const total = props.data.buckets.length;
total > 3 ? (slider = true) : null;

// duplicate for seamless looping
const duplicated = computed(() => {
  if (props.data.buckets.length <= 3) {
    return props.data.buckets;
  }

  const duplicates = [...props.data.buckets];
  const min = props.data.buckets.length * 2;

  for (let i = 0; i < min; i++) {
    duplicates.push({ ...props.data.buckets[i % props.data.buckets.length] });
  }

  return duplicates;
});

// set numbers for duplicates
let n = 0;
const getNum = () => {
  n++;
  n > total ? (n = 1) : null;
  return "0" + n;
};
</script>

<template>
  <Section side="none" class="bg-shadowblue !pt-0 pb-section-bot-lg">
    <UIJagEdge color="fill-shadowblue" />

    <SectionHeader theme="dark" :data="data.header" />

    <!-- buckets -->
    <div class="mt-[8rem]" :class="!slider && 'px-side-lg'">
      <Carousel
        :drag="slider ? true : false"
        :center="slider ? true : false"
        :start="slider && 1"
      >
        <div v-for="(item, i) in duplicated" class="item px-[3rem]">
          <div
            class="bucket h-full w-[45.5rem] rounded-base bg-shadowbluelt p-[3rem]"
          >
            <IconTri color="fill-red" class="mb-4" />
            <div
              class="num mb-12 font-barlow-cond text-xxl font-semibold leading-xxl text-shadowblue"
            >
              {{ getNum(i) }}
            </div>
            <h3
              class="mb-7 font-barlow-cond text-sm font-bold leading-[.94] text-red"
            >
              {{ item.headline }}
            </h3>
            <p
              class="text-body-sm leading-sm text-white"
              v-html="formatText(item.description)"
            ></p>
          </div>
        </div>
      </Carousel>
    </div>
  </Section>
</template>

<style scoped></style>
