<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <Section class="bg-jaffa pb-section-bot-mob s:mt-[5rem] s:pb-section-bot">
    <!-- columns -->
    <div
      class="relative mx-auto flex max-w-base flex-col items-start justify-between divide-x divide-grayline pt-6 s:flex-row"
      ref="main"
    >
      <!-- left -->
      <div class="text w-full space-y-10 s:w-1/2 s:space-y-14 s:pr-[16.5rem]">
        <h2
          class="font-barlow-cond text-lg-mob leading-lg s:text-lg"
          v-html="formatText(data.headline)"
        ></h2>
        <div v-if="data.intro" class="max-w-[52rem]">
          <p v-html="formatText(data.intro)"></p>
        </div>
        <CtaGroup
          v-if="data.cta"
          :data="data.cta.buttons"
          :align="left"
          :theme="dark"
          class="mt-10"
        />
      </div>

      <!-- right -->
      <div class="text w-full s:w-1/2 s:pl-[6.5rem] max-s:mt-[5rem]">
        <ul class="divide-y divide-grayline">
          <li
            v-for="(item, i) in data.listItems"
            :key="item.id"
            class="space-y-6"
            :class="[
              i == 0 ? 'pt-0' : 'pt-12',
              i == data.listItems.length - 1 ? 'pb-0' : 'pb-12',
            ]"
          >
            <h4
              class="font-barlow-cond text-body-mob uppercase leading-body s:text-body"
            >
              {{ item.headline }}
            </h4>
            <p class="max-w-[52rem] text-body-sm-mob leading-sm s:text-body-sm">
              {{ item.description }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </Section>
</template>
