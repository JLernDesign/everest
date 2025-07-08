<script setup>
const props = defineProps(["data"]);
console.log(props.data);
</script>

<template>
  <Section class="bg-jaffa">
    <SectionHeader :data="data.header" />

    <!--  -->
    <div class="mt-[10rem] flex-col s:flex s:flex-row">
      <div class="w-full">
        <!-- headers -->
        <div
          class="flex border-b-1 border-grayline px-side-mob pb-[2.5rem] font-barlow text-body-xsm-mob uppercase s:px-side s:text-body-xsm [&_span]:opacity-40"
        >
          <span class="w-[24.7rem]">Date</span>
          <span class="w-[26.4rem]">Location</span>
          <span class="w-[64.5rem]">Event/Webinar Name</span>
        </div>

        <!-- list items -->
        <div
          v-for="(item, i) in data.events"
          class="item group relative border-b-1 border-grayline px-side-mob py-[5rem] text-body-sm-mob leading-sm s:px-side s:text-body-sm"
        >
          <div class="relative flex">
            <span class="w-[24.7rem] pr-4">{{
              useDateFormat(item.startDate, "MM/DD/YY")
            }}</span>
            <span class="w-[26.4rem]">{{ item.location }}</span>
            <span class="w-[64.5rem]">
              <a
                :href="item.link"
                target="_blank"
                class="ul single relative font-helvh after:bg-red"
                >{{ item.title }}</a
              >
              <p v-if="item.description" class="mt-2">{{ item.description }}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
