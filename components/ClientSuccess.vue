<script setup>
import gql from "graphql-tag";
import {
  ClientSuccessFragment,
  HeaderFragment,
  ResponsiveImageFragment,
  LinkFragment,
} from "~/assets/graphql/fragments/global";

const props = defineProps(["theme", "data"]);
const active = 0;
let page_data;

// check for new data
if (props.data.slides && props.data.slides.length > 0) {
  page_data = props.data;
} else {
  // use fallback data
  const fallbackQuery = gql`
    query {
      global {
        clientSuccessModule {
          ...ClientSuccessFragment
        }
      }
    }
    ${ClientSuccessFragment}
    ${HeaderFragment}
    ${ResponsiveImageFragment}
    ${LinkFragment}
  `;

  const { data } = await useGraphqlQuery({
    query: fallbackQuery.loc.source.body,
  });
  page_data = data.value.global.clientSuccessModule;
}
</script>

<template>
  <Section
    :theme="theme"
    class="bg-jaffa pb-section-bot"
    :class="page_data.jaggedEdge && 'mt-[23rem] !pt-16 s:mt-[26.8rem] s:!pt-8'"
  >
    <template v-if="page_data.jaggedEdge">
      <UIGlow
        class="transform-origin-left scale-60 -top-[18rem] -z-1 h-[60rem] w-[116rem] overflow-hidden s:-top-[35rem] s:h-[35rem] s:w-[116rem] s:scale-100 max-s:left-1/2 max-s:translate-x-[-50%] max-s:blur-big"
        src="/ui/callout-bot-gradient.svg"
      />
      <div
        class="gradient-cover absolute left-0 top-0 z-0 h-full w-full bg-jaffa"
      ></div>
      <UIJagEdge color="fill-jaffa" />
    </template>

    <SectionHeader :theme="theme" :data="page_data.header" />

    <!-- slide module -->
    <div
      class="mt-[3rem] flex s:mt-md"
      v-if="page_data.slides && page_data.slides.length > 0"
      :class="page_data.slides.length > 1 && 's:divide-x-1 s:divide-grayline'"
    >
      <!-- left -->
      <div class="col lt hidden w-[27.5%] overflow-hidden px-[10rem] s:block">
        <template v-if="page_data.slides[active + 2]">
          <div
            v-if="page_data.slides[active + 2].media.image"
            class="photo rounded-base-mob aspect-[1.57] w-full overflow-hidden s:rounded-base"
          >
            <!-- image -->
            <img :src="page_data.slides[active + 2].media.image.url" alt="" />
          </div>

          <!-- name -->
          <div
            v-if="page_data.slides[active + 2].name"
            class="slide-text text-body-xsm-mob mt-10 s:text-body-xsm"
          >
            <p class="font-helvb">{{ page_data.slides[active + 2].name }}</p>
            <p>{{ page_data.slides[active + 2].title }}</p>
          </div>
        </template>

        <!-- arrow -->
        <UISlideArrow
          v-if="page_data.slides.length > 1"
          dir="left"
          class="px-[10rem]"
        />
      </div>

      <!-- active slide (center) -->
      <div class="col main w-full overflow-hidden s:w-[45%] s:px-[10rem]">
        <div
          class="photo rounded-base-mob aspect-[1.57] w-full overflow-hidden s:rounded-base"
        >
          <img
            v-if="page_data.slides[active].media.image"
            :src="page_data.slides[active].media.image.url"
            class="w-full"
            alt=""
          />
        </div>

        <hr class="my-side-mob text-black s:my-side" />

        <!-- text details -->
        <div class="slide-text">
          <!-- stats -->
          <div
            v-if="page_data.slides[active].statsGroup"
            class="stats mb-side flex space-x-14 leading-[1]"
          >
            <div
              v-for="stat in page_data.slides[active].statsGroup.stats"
              class="stat-item flex items-end space-x-4"
            >
              <h3 class="text-sm-mob font-barlow-cond font-bold s:text-sm">
                {{ stat.figure }}
              </h3>
              <p class="text-body-xsm-mob s:text-body-xsm">{{ stat.label }}</p>
            </div>
          </div>

          <!-- quote -->
          <blockquote v-if="page_data.slides[active].quote">
            “{{ page_data.slides[active].quote }}”
          </blockquote>
          <div
            class="byline text-body-xsm-mob mt-[2.5rem] flex items-center justify-between s:mt-[5.5rem] s:text-body-xsm"
          >
            <div v-if="page_data.slides[active].name">
              <p class="font-helvb">{{ page_data.slides[active].name }}</p>
              <p v-if="page_data.slides[active].title">
                {{ page_data.slides[active].title }}
              </p>
            </div>
            <UILogo
              v-if="page_data.slides[active].logo"
              :src="page_data.slides[active].logo.url"
              class="!h-14"
            />
          </div>
        </div>
      </div>

      <!-- right -->
      <div class="col rt hidden w-[27.5%] overflow-hidden px-[10rem] s:block">
        <template v-if="page_data.slides[active + 1]">
          <div
            v-if="page_data.slides[active + 1].media.image"
            class="photo rounded-base-mob aspect-[1.57] w-full overflow-hidden s:rounded-base"
          >
            <!-- image -->
            <img :src="page_data.slides[active + 1].media.image.url" alt="" />
          </div>

          <!-- name -->
          <div
            v-if="page_data.slides[active + 1].name"
            class="slide-text text-body-xsm-mob mt-10 s:text-body-xsm"
          >
            <p class="font-helvb">{{ page_data.slides[active + 1].name }}</p>
            <p>{{ page_data.slides[active + 1].title }}</p>
          </div>
        </template>

        <!-- arrow -->
        <UISlideArrow
          v-if="page_data.slides.length > 1"
          dir="right"
          class="px-[10rem]"
        />
      </div>
    </div>

    <!-- mobile controls-->
    <div
      class="relative mt-[5.5rem] flex h-[3.2rem] w-full justify-between px-side-mob s:hidden"
    >
      <UISlideArrow
        v-if="page_data.slides.length > 1"
        dir="left"
        class="!w-[48%]"
      />
      <UISlideArrow
        v-if="page_data.slides.length > 1"
        dir="right"
        class="!w-[48%]"
      />
    </div>
  </Section>
</template>

<style scoped></style>
