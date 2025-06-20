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
    :class="page_data.jaggedEdge && 'mt-[26.8rem] !pt-8'"
  >
    <template v-if="page_data.jaggedEdge">
      <UIGlow
        class="-top-[35rem] -z-1 h-[35rem] overflow-hidden blur-big"
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
      class="mt-md flex"
      v-if="page_data.slides && page_data.slides.length > 0"
      :class="page_data.slides.length > 1 && 'divide-x-1 divide-grayline'"
    >
      <!-- left -->
      <div class="col lt w-[27.5%] overflow-hidden px-[10rem]">
        <template v-if="page_data.slides[active + 2]">
          <div
            v-if="page_data.slides[active + 2].media.image"
            class="photo aspect-[1.57] w-full overflow-hidden rounded-base"
          >
            <!-- image -->
            <img :src="page_data.slides[active + 2].media.image.url" alt="" />
          </div>

          <!-- name -->
          <div
            v-if="page_data.slides[active + 2].name"
            class="slide-text mt-10 text-body-xsm"
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
      <div class="col main w-[45%] overflow-hidden px-[10rem]">
        <div class="photo aspect-[1.57] w-full overflow-hidden rounded-base">
          <img
            v-if="page_data.slides[active].media.image"
            :src="page_data.slides[active].media.image.url"
            class="w-full"
            alt=""
          />
        </div>

        <hr class="my-side text-black" />

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
              <h3 class="font-barlow-cond text-sm font-bold">
                {{ stat.figure }}
              </h3>
              <p class="text-body-xsm">{{ stat.label }}</p>
            </div>
          </div>

          <!-- quote -->
          <blockquote v-if="page_data.slides[active].quote">
            “{{ page_data.slides[active].quote }}”
          </blockquote>
          <div
            class="byline mt-[5.5rem] flex items-center justify-between text-body-xsm"
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
      <div class="col rt w-[27.5%] overflow-hidden px-[10rem]">
        <template v-if="page_data.slides[active + 1]">
          <div
            v-if="page_data.slides[active + 1].media.image"
            class="photo aspect-[1.57] w-full overflow-hidden rounded-base"
          >
            <!-- image -->
            <img :src="page_data.slides[active + 1].media.image.url" alt="" />
          </div>

          <!-- name -->
          <div
            v-if="page_data.slides[active + 1].name"
            class="slide-text mt-10 text-body-xsm"
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
  </Section>
</template>

<style scoped></style>
