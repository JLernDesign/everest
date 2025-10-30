<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <Section class="bg-jaffa pb-section-bot-mob s:pb-section-bot">
    <!-- columns -->
    <div
      class="relative mx-auto flex max-w-base flex-col items-stretch justify-between s:flex-row"
      ref="main"
    >
      <!-- left -->
      <div
        class="text w-full space-y-10 s:w-1/2 s:space-y-14 s:border-grayline"
        :class="
          data.layout == 'list-rt'
            ? 'order-1 s:border-r s:pr-[16.5rem]'
            : 'order-2 s:border-l s:px-[10rem] max-s:mt-[5rem]'
        "
      >
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
          align="left"
          :theme="dark"
          class="mt-10"
        />

        <!-- brands -->
        <div
          v-if="data.logoGroup"
          class="!mt-[2.5rem] w-full overflow-hidden s:!mt-[5rem] max-s:ml-[-2rem] max-s:w-screen [&_h4]:!text-left"
        >
          <Brands
            theme="light"
            :data="data.logoGroup"
            :scroll="data.logoGroup.logos.length > 4 ? true : false"
            template="list-module"
          />
        </div>
      </div>

      <!-- right -->
      <div
        class="text w-full s:w-1/2"
        :class="
          data.layout == 'list-rt'
            ? 'order-2 s:pl-[6.5rem] max-s:mt-[5rem]'
            : 'order-1 s:pr-[11.5rem]'
        "
      >
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
