<script setup>
import gsap from "gsap";
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["data"]);

const main = ref(null);
let ctx;

onMounted(() => {
  ctx = gsap.context((self) => {
    // parallax clouds
    const clouds = self.selector(".cloud");
    const cloudY = [60, 30];
    cloudParallax(main.value.$el, null, clouds, cloudY);
  }, main.value.$el);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <Section
    :hero="true"
    class="pb-[5rem] s:pb-section-bot-lg max-s:pt-hero-mob-lg"
    side="lg"
    :anim="true"
    ref="main"
  >
    <!-- bg elements -->
    <div
      class="gradient glower absolute left-[65.2rem] top-[15.5rem] h-[69.4rem] w-[107.3rem] -scale-x-100 blur-[50px]"
    >
      <img src="/public/ui/edge-gradient-sm.svg" alt="" />
    </div>
    <UICloud
      type="2"
      class="-top-[30rem] left-0 translate-x-[90%]"
      :anim="true"
      :speed="85"
      :delay="0"
    />
    <UICloud
      type="1"
      class="left-0 top-[62rem]"
      :flip="true"
      :anim="true"
      :speed="70"
    />

    <!-- columns -->
    <div
      class="relative mx-auto flex max-w-base flex-col items-start justify-between s:flex-row"
      ref="main"
    >
      <!-- text -->
      <div class="text w-full s:w-1/2 s:pr-[11.5rem]">
        <!-- eyebrow -->
        <div v-if="data.eyebrow" class="eyebrow mb-6">
          <h3
            class="font-helvb text-body-xsm-mob uppercase text-red s:text-body-xsm"
          >
            {{ data.eyebrow }}
          </h3>
        </div>

        <!-- header / intro -->
        <div class="has-break space-y-[2rem] s:space-y-[3.5rem]">
          <h1
            class="text font-barlow-cond text-xl-mob leading-xl -tracking-sm s:text-[11rem] max-s:max-w-[450px]"
            v-html="addLineBreaks(data.headline)"
          ></h1>

          <!-- cta buttons -->
          <div
            class="cta-group items-center justify-start s:flex s:space-x-[5rem] max-s:space-y-8"
          >
            <CtaGroup
              v-if="data.cta"
              :data="data.cta.buttons"
              align="left"
              :theme="light"
            />

            <!-- logo -->
            <div v-if="data.heroLogo">
              <img
                :src="data.heroLogo.url"
                :alt="data.heroLogo.alt"
                class="h-auto w-full max-w-[18.5rem]"
              />
            </div>

            <!-- rep -->
            <div
              v-else-if="data.rep"
              class="author flex items-stretch space-x-6 divide-x-1 divide-black"
            >
              <img
                v-if="data.rep.photo"
                :src="data.rep.photo.url"
                alt=""
                class="w-[4rem] overflow-hidden rounded-full s:w-[5rem]"
              />
              <div class="flex items-center pl-6">
                <p class="font-barlow-cond text-body-sm-mob uppercase">
                  {{ data.rep.name }}
                </p>
              </div>
            </div>
          </div>

          <div v-if="data.intro" class="max-w-[52rem]">
            <p v-html="formatText(data.intro)"></p>
          </div>
        </div>
      </div>

      <!-- image -->
      <div
        class="image w-full max-w-[72rem] overflow-hidden rounded-base-mob s:w-1/2 s:rounded-base max-s:mt-[2.5rem]"
      >
        <!-- image with background -->
        <div
          v-if="data.heroImage.__typename == 'ImageBgRecord'"
          class="content-image rounded-base-mob bg-cover px-[5rem] py-[6.5rem] s:rounded-base s:px-[13rem]"
          :class="[data.heroImage.bgColor ? bgColor(data.heroImage) : 'bg-tan']"
          :style="
            data.heroImage.bgImage
              ? `background-image:url(${data.heroImage.bgImage.url})`
              : ''
          "
        >
          <div class="w-full">
            <DatocmsImage :data="data.heroImage.image.responsiveImage" />
          </div>
        </div>

        <!-- image block -->
        <div
          v-if="data.heroImage.__typename == 'ImageBlockRecord'"
          class="content-image relative overflow-hidden rounded-base-mob bg-cover s:rounded-base"
        >
          <DatocmsImage :data="data.heroImage.image.responsiveImage" />
        </div>
      </div>
    </div>
  </Section>
</template>
