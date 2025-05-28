<script setup></script>

<template>
  <Section class="bg-jaffa pb-section-bot pt-[12rem]" side="lg">
    <!-- header -->
    <header class="relative flex justify-between">
      <LineFull class="top-1/2" />
      <div class="relative z-1 bg-jaffa px-5 text-body-sm">The Advantage</div>
      <div class="relative z-1 bg-jaffa px-5">
        <IconEyebrow color="fill-black" />
      </div>
    </header>

    <!-- columns -->
    <div class="flex items-start justify-between pt-section-top">
      <!-- headline -->
      <div class="w-[52rem] rounded-base bg-shadowblue p-side">
        <h2 class="font-barlow-cond text-lg leading-lg text-green">
          Reinventing ERP for the modern SaaS business
        </h2>
      </div>

      <!-- contents -->
      <div class="w-[79.4rem] space-y-[3.6rem]">
        <!-- text -->
        <div
          class="bullets lines rounded-base bg-[url(/ui/mt-green@2x.jpg)] bg-cover p-[2rem] pb-[2.5rem] [&_ul]:divide-y-1 [&_ul]:divide-grayline [&_ul]:border-y-1 [&_ul]:border-grayline"
        >
          <div class="space-y-16 rounded-sm bg-jaffa p-[3.2rem]">
            <h3>
              Native AI: Defined as an ERP product that is built from the ground
              up with AI as a core part of its architecture and user experience.
              It's an ERP system where forecasting, decision support, anomaly
              detection, and task automation are not just features, but the
              foundation of how it operates.
            </h3>
            <ul>
              <li v-for="n in 4">
                Purpose-built for SaaS complexity and recurring revenue models
              </li>
            </ul>
          </div>
        </div>

        <!-- image -->
        <div
          class="rounded-base bg-[url(/ui/mt-green@2x.jpg)] bg-cover p-[11.5rem]"
        >
          <div class="rounded-base bg-white p-4">
            <img src="/public/why/ph-graph@2x.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
