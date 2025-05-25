<script setup>
const props = defineProps(["theme"]);
</script>

<template>
  <Section :theme="theme" class="bg-jaffa pb-section-bot">
    <SectionHeader
      :theme="theme"
      :data="{
        eyebrow: 'Integrations',
        headline: 'Go live faster with less effort',
        intro:
          'Accelerate time-to-market by launching new processes in weeks, not months, with pre-built business processes and integrations tailored for the SaaS industry.',
        breadcrumb: ['Integrations', 'Cloud Cost Integrations'],
      }"
    />

    <!-- content -->
    <div class="mt-[10rem] flex">
      <!-- logo -->
      <div class="w-1/2">
        <div
          class="grid h-[42rem] w-full place-content-center rounded-base bg-[url(/ui/callout-texture@2x.jpg)] bg-[size:1717px_auto]"
        >
          <div
            class="grid h-[18rem] w-[28rem] place-content-center rounded-base bg-jaffa"
          >
            <img
              src="/public/logos/airbase.svg"
              class="mix-blend-multiply"
              alt=""
            />
          </div>
        </div>
      </div>

      <!-- text -->
      <div class="w-1/2 pl-[14rem] leading-[1]">
        <div
          class="mb-[5rem] flex px-[2rem] font-barlow text-body-xsm uppercase opacity-40"
        >
          <span class="w-[36.5%]">Name</span>
          <span class="w-[63.5%]">Use For</span>
        </div>

        <!-- items -->
        <template v-for="n in 6">
          <div class="relative cursor-pointer text-body-sm">
            <div class="absolute h-full w-full rounded-base bg-white"></div>
            <div class="relative flex px-[2rem] py-[1.2rem]">
              <span class="w-[36.5%] pr-4">ADP</span>
              <span class="w-[63.5%]">Payroll Solutions</span>
            </div>
          </div>
          <div class="flex rounded-base px-[2rem] py-[1.2rem] text-body-sm">
            <span class="w-[36.5%] pr-4">Airbase</span>
            <span class="w-[63.5%]">AP Automation & Finance Solutions</span>
          </div>
        </template>
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
