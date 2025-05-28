<script setup>
const props = defineProps(["theme"]);
</script>

<template>
  <Section :theme="theme" class="mt-[26.8rem] bg-jaffa !pt-8 pb-section-bot">
    <UIJagEdge color="fill-jaffa" />

    <SectionHeader
      :theme="theme"
      :data="{
        eyebrow: 'Client Success',
        headline: 'Trusted by Innovative SaaS Companies',
        cta: [
          {
            type: 'button',
            title: 'Client Success',
            url: '#',
          },
        ],
      }"
    />

    <!-- slide module -->
    <div class="mt-md flex divide-x-1 divide-grayline">
      <!-- left -->
      <div class="col lt w-[27.5%] overflow-hidden px-[10rem]">
        <div class="photo aspect-[1.57] w-full overflow-hidden rounded-base">
          <img src="/public/clients/ph-client-success@2x.png" alt="" />
        </div>
        <div class="slide-text mt-6 text-body-xsm">
          <p class="font-helvb">Alex Hopper</p>
          <p>CEO of Logoipsm</p>
        </div>

        <!-- arrow -->
        <UISlideArrow dir="left" class="px-[10rem]" />
      </div>

      <!-- active slide (center) -->
      <div class="col main w-[45%] overflow-hidden px-[10rem]">
        <div class="photo aspect-[1.57] w-full overflow-hidden rounded-base">
          <img src="/public/clients/ph-client-success@2x.png" alt="" />
        </div>

        <hr class="my-side text-black" />

        <!-- text details -->
        <div class="slide-text">
          <div class="stats mb-side flex space-x-14 leading-[1]">
            <div class="stat-item flex items-end space-x-4">
              <h3 class="font-barlow-cond text-sm font-bold">2X</h3>
              <p class="text-body-xsm">Awesome stat here</p>
            </div>
            <div class="stat-item flex items-end space-x-4">
              <h3 class="font-barlow-cond text-sm font-bold">100%</h3>
              <p class="text-body-xsm">Awesome stat here</p>
            </div>
          </div>
          <blockquote>
            “Everest enables accounting teams to make huge productivity strides
            by streamlining table-stakes accounting work and giving them tools
            to become better business partners to the operational side of the
            house.”
          </blockquote>
          <div
            class="byline mt-[5.5rem] flex items-center justify-between text-body-xsm"
          >
            <div>
              <p class="font-helvb">Lisa Schulz</p>
              <p>3x Controller and 3 ERP Implementations</p>
            </div>
            <UILogo src="/logos/ph-logo.svg" class="!h-14" />
          </div>
        </div>
      </div>

      <!-- right -->
      <div class="col rt w-[27.5%] overflow-hidden px-[10rem]">
        <div class="photo aspect-[1.57] w-full overflow-hidden rounded-base">
          <img src="/public/clients/ph-client-success@2x.png" alt="" />
        </div>
        <div class="slide-text mt-10 text-body-xsm">
          <p class="font-helvb">Alex Hopper</p>
          <p>CEO of Logoipsm</p>
        </div>

        <!-- arrow -->
        <UISlideArrow dir="right" class="px-[10rem]" />
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
