<script setup>
const props = defineProps(["theme", "data", "template"]);
const active = ref(0);
</script>

<template>
  <Section :theme="theme" class="pb-section-bot-mob bg-jaffa s:pb-section-bot">
    <SectionHeader
      :theme="theme"
      :data="data.header"
      :breadcrumb="data.groups.length > 1 ? data.groups : null"
    />

    <!-- desktop module -->
    <div class="mt-[10rem] hidden flex-col s:flex s:flex-row">
      <!-- logo -->
      <div class="w-full s:w-1/2">
        <div
          class="rounded-base-mob grid h-[42rem] w-full place-content-center bg-[url(/ui/callout-texture@2x.jpg)] bg-[size:1717px_auto] s:rounded-base"
        >
          <div
            class="rounded-base-mob flex h-[18rem] w-[28rem] bg-jaffa s:rounded-base"
          >
            <img
              v-if="data.groups[active].items[0].image"
              :src="data.groups[active].items[0].image.url"
              class="h-full w-full object-contain"
              alt=""
            />
          </div>
        </div>
      </div>

      <!-- text -->
      <div class="w-full pl-[14rem] leading-[1] s:w-1/2">
        <div
          class="text-body-xsm-mob mb-[3rem] flex px-[2rem] font-barlow uppercase opacity-40 s:text-body-xsm"
        >
          <span class="w-[38%]">{{ data.groups[active].headerLeft }}</span>
          <span class="w-[62%]">{{ data.groups[active].headerRight }}</span>
        </div>

        <!-- items -->
        <div class="space-y-1">
          <template v-for="(item, i) in data.groups[active].items">
            <div
              class="relative cursor-pointer text-body-sm-mob s:text-body-sm"
            >
              <div
                class="rounded-base-mob absolute -top-[.2rem] h-full w-full scale-y-0 bg-white s:rounded-base"
              ></div>
              <div class="relative flex px-[2rem] py-[1.2rem]">
                <span class="w-[38%] pr-4">{{ item.name }}</span>
                <span class="w-[62%]">{{ item.description }}</span>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- mobile module -->

    <!-- text list -->
    <template v-if="template == 'about'">
      <div
        class="mt-[4.5rem] block divide-y-1 divide-grayline border-y-1 border-grayline s:hidden"
      >
        <div
          v-for="(item, i) in data.groups[active].items"
          class="py-8 text-body-sm-mob leading-sm"
        >
          <h4 class="mb-2 font-helvb">{{ item.name }}</h4>

          {{ item.description }}
        </div>
      </div>
    </template>

    <!-- logo blocks -->
    <template v-else>
      <div class="mt-[4.5rem] grid w-full grid-cols-2 gap-[2rem] s:hidden">
        <div
          v-for="(item, i) in data.groups[active].items"
          class="rounded-base border border-grayline"
        >
          <img
            v-if="item.image"
            :src="item.image.url"
            class="h-full w-full object-contain"
            alt=""
          />
        </div>
      </div>
    </template>
  </Section>
</template>

<style scoped></style>
