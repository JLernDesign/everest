<script setup>
import gsap from "gsap";

const props = defineProps(["theme", "nav", "data", "num"]);
const main = ref(null);
const video = ref(null);
let ctx;

onMounted(() => {
  ctx = gsap.context((self) => {
    // animate items into place on scroll to section
    const items = self.selector(".anim-item");
    animIntoView(items, main.value, 0.1, "top 40%", playVideo);
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});

const playVideo = (state) => {
  if (state == "enter" && video.value) {
    video.value.playVideo();
  }
};
</script>

<template>
  <div
    ref="main"
    class="overview-card section-wrap dark relative w-full border-b px-side-mob py-[6rem] s:px-[20rem] s:py-[11rem]"
    :class="
      theme == 'dark'
        ? 'border-[#3D4856] bg-shadowblue'
        : 'border-grayline bg-jaffa'
    "
  >
    <div class="content relative z-1 flex flex-col justify-between s:flex-row">
      <!-- text -->
      <div
        class="anim-item left flex w-full s:w-1/2 s:items-center max-s:order-2 max-s:mt-12 max-s:flex-col"
      >
        <div
          class="anim-item num left-0 top-0 mb-[2rem] s:absolute s:mb-[11rem]"
        >
          <IconTri color="fill-red" />
          <div class="font-barlow-cond text-num opacity-30">
            {{ num < 10 ? "0" + num : num }}
          </div>
        </div>

        <!-- text contents -->
        <div class="max-w-[60rem]">
          <h3
            v-if="data.productPage"
            class="mb-5 font-helvb text-md-mob leading-sm-md s:text-md"
            v-html="formatText(data.productPage.title)"
          ></h3>
          <span
            class="bullets block max-w-[48rem] space-y-16 [&_ul]:space-y-4"
            v-html="removeWidows(data.body)"
          ></span>

          <!-- cta button -->
          <CtaBtn
            v-if="data.productPage"
            :to="`/product/${data.productPage.slug}`"
            class="mt-8"
            >Learn More</CtaBtn
          >
        </div>

        <!-- slide nav -->
        <div
          v-if="nav"
          class="slide-nav absolute bottom-0 left-0 hidden w-[21rem] bg-[url(/public/ui/peak.png)] bg-contain bg-bottom bg-no-repeat s:block"
        >
          <div class="flex w-full flex-col gap-y-6">
            <div
              v-for="n in 7"
              class="nav-line h-[1px] w-full bg-[#3D4856]"
            ></div>
          </div>
        </div>
      </div>

      <!-- image -->
      <div class="anim-item right w-full s:w-1/2 max-s:order-1">
        <div
          class="image relative flex aspect-[1.0675] w-full items-center justify-center overflow-hidden rounded-base-mob bg-skyblue s:rounded-base"
        >
          <UICloud
            type="2"
            class="-left-[16rem] top-[44rem]"
            :anim="true"
            :speed="60"
          />
          <UICloud
            type="2"
            class="-top-[25rem] left-[18rem]"
            :anim="true"
            :speed="80"
          />

          <div
            class="image-ph relative h-full w-full max-s:p-side-mob [&>div]:h-full [&_img]:h-full [&_img]:w-full [&_img]:object-contain"
          >
            <VideoAnim
              v-if="data.productPage"
              class="absolute left-1/2 top-1/2 aspect-square !h-auto -translate-x-1/2 -translate-y-1/2 [&_video]:h-full"
              :file="`infographics/${data.productPage.infographic}`"
              ref="video"
            />
          </div>
        </div>
      </div>
    </div>

    <UIGradientBot
      v-if="num > 1"
      :theme="theme"
      class="absolute -top-[6.2rem] left-0"
    />

    <div
      class="cover pointer-events-none absolute left-0 top-0 z-5 h-full w-full bg-shadowblue opacity-0"
    ></div>
  </div>
</template>

<style scoped></style>
