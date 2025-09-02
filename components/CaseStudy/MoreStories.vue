<script setup>
import { gsap } from "gsap";
import { caseStudiesQuery } from "~/assets/graphql/queries/case-study";

const route = useRoute();

// get page data
const { data } = await useGraphqlQuery({
  query: caseStudiesQuery.loc.source.body,
});
const page = data.value.allCaseStudies;

// get next 2 case studies
let flag;
page.forEach((item, i) => {
  if (item.slug == route.params.slug) {
    flag = i;
  }
});
let wrapped_cs = gsap.utils.wrap(page);
let next = [wrapped_cs(flag + 1), wrapped_cs(flag + 2)];
</script>

<template>
  <div class="relative z-1 p-side-mob !pb-0 s:p-side" ref="main">
    <UITexture />

    <!-- content -->
    <div
      class="relative overflow-hidden rounded-base-mob bg-shadowblue px-side-mob py-side-mob s:rounded-base s:px-side s:py-section-bot"
    >
      <header class="pb-14 text-center text-white">
        <h2 class="text font-barlow-cond text-lg-mob leading-lg s:text-lg">
          Additional Customer Stories
        </h2>
      </header>

      <!-- grid -->
      <div
        class="mx-auto grid max-w-[131.5rem] s:mt-[6rem] s:grid-cols-2 s:gap-[13.2rem] s:pb-12"
      >
        <!-- case study thumb -->
        <CaseStudyThumb v-for="item in next" :key="item.slug" :data="item" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
