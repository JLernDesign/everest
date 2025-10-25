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
        class="text flex w-full flex-col justify-center space-y-10 s:w-1/2 s:space-y-14 s:pr-[11.5rem] max-s:mt-[5rem]"
        :class="data.layout == 'img-lt' ? 'order-2 px-[10rem]' : 'order-1'"
      >
        <h2
          class="font-barlow-cond text-lg-mob leading-lg s:text-lg"
          v-html="formatText(data.headline)"
        ></h2>
        <div
          class="bullets space-y-10 [&_*+h2]:mt-[9rem] [&_h2]:font-helvb [&_h2]:text-body-md-mob [&_h2]:s:text-body-md [&_h3+p]:mt-[.5rem] [&_h3]:font-helvb"
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

      <!-- image -->
      <div
        class="image w-full max-w-[72rem] overflow-hidden rounded-base-mob s:w-1/2 s:rounded-base"
        :class="data.layout == 'img-lt' ? 'order-1' : 'order-2'"
      >
        <!-- Quote Block -->
        <template v-if="data.image.__typename == 'QuoteBlockRecord'">
          <div
            class="content-image rounded-base-mob bg-cover s:rounded-base s:p-[5rem]"
            :class="[data.image.bgColor ? bgColor(data.image) : 'bg-tan']"
            :style="
              data.image.bgImage
                ? `background-image:url(${data.image.bgImage.url})`
                : ''
            "
          >
            <div class="rounded-base-mob bg-skyblue p-[6.5rem] s:rounded-base">
              <blockquote class="relative text-body">
                <div
                  class="quote lt absolute -top-[5.5rem] font-barlow-cond text-xl-mob leading-xl text-blue s:-left-[3.5rem] s:text-xl"
                >
                  “
                </div>
                <div
                  class="quote rt absolute -bottom-[13rem] right-0 font-barlow-cond text-xl-mob leading-xl text-blue s:-bottom-[18rem] s:text-xl"
                >
                  ”
                </div>
                {{ data.image.quote }}
              </blockquote>

              <!-- byline -->
              <div
                v-if="data.image.name"
                class="byline mt-[3.5rem] text-body-xsm-mob s:mt-[5rem] s:text-body-xsm"
              >
                <strong class="block font-helvb">{{ data.image.name }}</strong>
                {{ data.image.title }}
              </div>
            </div>
            <!-- <div class="w-full">
              <DatocmsImage :data="data.image.image.responsiveImage" />
            </div> -->
          </div>
        </template>

        <!-- Image Caption Block -->
        <template v-if="data.image.__typename == 'ImageCaptionRecord'">
          <div
            class="content-image relative overflow-hidden rounded-base-mob bg-cover s:rounded-base"
          >
            <DatocmsImage :data="data.image.image.responsiveImage" />
            <div
              class="caption absolute bottom-[3rem] left-[3rem] w-[50%] font-barlow-cond text-sm-mob leading-[.94] text-white s:text-sm"
            >
              {{ data.image.caption }}
            </div>
          </div>
        </template>

        <!-- Image Block -->
        <template v-if="data.image.__typename == 'ImageBlockRecord'">
          <div
            class="content-image relative overflow-hidden rounded-base-mob bg-cover s:rounded-base"
          >
            <DatocmsImage :data="data.image.image.responsiveImage" />
          </div>
        </template>
      </div>
    </div>
  </Section>
</template>
