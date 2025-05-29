<script setup>
const props = defineProps(["data", "edge", "layout"]);
</script>

<template>
  <Section
    class="pb-section-bot-lg bg-shadowblue text-white"
    :class="edge && '!pt-0'"
    theme="dark"
  >
    <UIJagEdge v-if="edge" color="fill-shadowblue" />

    <!-- header -->
    <SectionHeader
      theme="dark"
      :data="{
        eyebrow: 'Company',
        headline:
          'It\'s time for a change. Everest ERP offers a complete and integrated system to help run your financial and business operations.',
      }"
    />

    <!-- columns -->
    <div class="flex items-start justify-between pt-section-top">
      <!-- image -->
      <div
        class="image aspect-square w-1/2 rounded-base bg-shadowbluelt"
        :class="layout == 'img-lt' ? 'order-1' : 'order-2'"
      ></div>

      <!-- text -->
      <div
        class="text w-1/2"
        :class="
          layout == 'img-lt'
            ? 'order-2 pl-[11.5rem] pr-[9rem]'
            : 'order-1 pl-[9rem] pr-[11.5rem]'
        "
      >
        <div class="bullets space-y-16">
          <p>
            SaaS companies are constantly evolving their product and pricing
            strategies. Legacy ERPs can’t keep up and companies are forced to
            build costly, Frankenstein ERPs just to keep their business running.
            Unlike fragmented sets of solutions, Everest ERP offers a complete
            and integrated system to help run your financial and business
            operations.
          </p>
          <p>
            Crafted over years of expertise Everest has been thoughtfully
            architected and designed for long-term success by partnering with a
            world-class team of ERP technology and financial systems experts.
            Over 100 professionals have worked for more than four years to build
            a robust platform and set of applications that empower your business
            to grow and scale efficiently.
          </p>
          <CtaBtn>Try Everest</CtaBtn>
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
