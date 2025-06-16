<script setup>
const props = defineProps(["theme", "data"]);
const active = ref(0);
</script>

<template>
  <Section :theme="theme" class="bg-jaffa pb-section-bot">
    <SectionHeader
      :theme="theme"
      :data="data.header"
      :breadcrumb="data.groups"
    />

    <!-- content -->
    <div class="mt-[10rem] flex">
      <!-- logo -->
      <div class="w-1/2">
        <div
          class="grid h-[42rem] w-full place-content-center rounded-base bg-[url(/ui/callout-texture@2x.jpg)] bg-[size:1717px_auto]"
        >
          <div class="flex h-[18rem] w-[28rem] rounded-base bg-jaffa">
            <img
              :src="data.groups[active].items[0].image.url"
              class="h-full w-full object-contain"
              alt=""
            />
          </div>
        </div>
      </div>

      <!-- text -->
      <div class="w-1/2 pl-[14rem] leading-[1]">
        <div
          class="mb-[3rem] flex px-[2rem] font-barlow text-body-xsm uppercase opacity-40"
        >
          <span class="w-[38%]">{{ data.groups[active].headerLeft }}</span>
          <span class="w-[62%]">{{ data.groups[active].headerRight }}</span>
        </div>

        <!-- items -->
        <div class="space-y-1">
          <template v-for="(item, i) in data.groups[active].items">
            <div class="relative cursor-pointer text-body-sm">
              <div
                class="absolute -top-[.2rem] h-full w-full scale-y-0 rounded-base bg-white"
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
  </Section>
</template>

<style scoped></style>
