<script setup>
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["data"]);
</script>

<template>
  <Section class="pb-section-bot-mob s:!p-[5rem]">
    <div
      class="relative mx-auto flex max-w-base flex-col items-stretch justify-between pt-6 s:flex-row"
      ref="main"
    >
      <!-- text -->
      <div
        class="text flex w-full flex-col justify-center space-y-[2rem] s:w-1/2 s:space-y-[2.5rem] s:pr-[11.5rem] max-s:mt-[5rem]"
        :class="data.layout == 'img-lt' ? 'order-2 px-[10rem]' : 'order-1'"
      >
        <!-- headline -->
        <h2
          class="max-w-[52rem] font-barlow-cond text-lg-mob leading-lg s:text-lg"
          v-html="formatText(data.headline)"
        ></h2>

        <!-- intro -->
        <div
          class="bullets max-w-[52rem] space-y-10 [&_*+h2]:mt-[9rem] [&_h2]:font-helvb [&_h2]:text-body-md-mob [&_h2]:s:text-body-md [&_h3+p]:mt-[.5rem] [&_h3]:font-helvb"
          v-html="data.body"
        ></div>

        <CtaGroup
          v-if="data.cta"
          :data="data.cta.buttons"
          :align="left"
          :theme="dark"
          class="mt-10"
        />
      </div>

      <!-- image block -->
      <div
        class="image w-full max-w-[72rem] overflow-hidden rounded-base-mob s:w-1/2 s:rounded-base"
        :class="data.layout == 'img-lt' ? 'order-1' : 'order-2'"
      >
        <!-- Quote Block -->
        <LandingQuoteBlock
          v-if="data.image.__typename == 'QuoteBlockRecord'"
          :data="data.image"
        />

        <!-- Image Caption Block -->
        <LandingImageBlock
          v-if="data.image.__typename == 'ImageCaptionRecord'"
          :data="data.image"
        />

        <!-- Image Block -->
        <template v-if="data.image.__typename == 'ImageBlockRecord'">
          <div
            class="content-image relative overflow-hidden rounded-base-mob bg-cover s:rounded-base"
          >
            <DatocmsImage :data="data.image.image.responsiveImage" />
          </div>
        </template>

        <!-- Media Slider Block -->
        <MediaSlider
          v-if="data.image.__typename == 'MediaSliderRecord'"
          :data="data.image.mediaSlides"
          loc="landing"
        />
      </div>
    </div>
  </Section>
</template>
