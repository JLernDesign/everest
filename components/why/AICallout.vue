<script setup>
import { gsap } from "gsap";
import gql from "graphql-tag";
import {
  AifirstCalloutFragment,
  LinkFragment,
} from "~/assets/graphql/fragments/global";

const props = defineProps(["data"]);
const main = ref(null);
const video = ref(null);
let ctx;
let page_data;

// check for new data
if (props.data.headline) {
  page_data = props.data;
} else {
  // use fallback data
  const fallbackQuery = gql`
    query {
      global {
        aifirstCallout {
          ...AifirstCalloutFragment
        }
      }
    }
    ${AifirstCalloutFragment}
    ${LinkFragment}
  `;

  const { data } = await useGraphqlQuery({
    query: fallbackQuery.loc.source.body,
  });
  page_data = data.value.global.aifirstCallout;
}

onMounted(() => {
  ctx = gsap.context((self) => {
    playInView(main.value, null, playVideo);
  });
});

onUnmounted(() => {
  ctx.revert();
});

const playVideo = (ev) => {
  if (video.value) {
    if (ev == "enter") {
      video.value.playVideo();
    } else {
      video.value.pauseVideo();
      video.value.currentTime = 0;
    }
  }
};
</script>

<template>
  <div class="relative z-1 bg-shadowblue p-side-mob s:p-side" ref="main">
    <!-- content -->
    <div
      class="relative overflow-hidden rounded-base-mob border border-whiteline text-center text-white s:rounded-base"
    >
      <!-- header -->
      <div
        class="border-b border-whiteline px-side-mob py-[2.5rem] s:px-side s:py-[5rem]"
      >
        <h2 class="relative font-barlow-cond text-lg-mob leading-lg s:text-lg">
          {{ page_data.headline }}
        </h2>
      </div>

      <!-- body -->
      <div class="flex">
        <div
          class="hidden w-[28.5%] bg-[url(/why/ai-module-lines1.svg)] bg-cover s:block"
        ></div>

        <!-- text -->
        <div
          class="w-full space-y-[2.5rem] px-side-mob pb-side pt-side-mob s:w-[43%] s:space-y-[4rem] s:border-x s:border-whiteline s:px-side s:pb-[12rem] s:pt-section-top"
        >
          <div
            class="mx-auto aspect-[1.07] w-[31.6rem] overflow-auto rounded-base-mob s:rounded-base [&_video]:object-cover"
          >
            <VideoAnim
              file="Griflan - Everest - Clouds - V01"
              ref="video"
              :alpha="false"
              size="fill"
              :loop="true"
            />
          </div>
          <p class="mx-auto s:max-w-[50rem]">
            {{ page_data.intro }}
          </p>
          <CtaGroup
            v-if="page_data.cta"
            :data="page_data.cta.buttons"
            align="center"
            theme="dark"
          />
        </div>

        <div
          class="hidden w-[28.5%] bg-[url(/why/ai-module-lines2.svg)] bg-cover s:block"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
