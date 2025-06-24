<script setup>
const props = defineProps(["data", "type"]);

import { blogQuery } from "~/assets/graphql/queries/blog";

const { data: posts_data } = await useGraphqlQuery({
  query: blogQuery.loc.source.body,
});
const posts = posts_data.value.allPosts;
const selected = posts.slice(0, 3);
</script>

<template>
  <Section
    class="pb-section-bot-mob mt-[5rem] !pt-0 s:mt-[30rem] s:pb-section-bot"
    side="none"
  >
    <div class="absolute left-0 top-0 z-1 h-full w-full bg-jaffa"></div>
    <UIGlow
      class="-top-[5rem] z-0 h-[13.6rem] w-full s:-top-[13.6rem] s:blur-big"
      src="/ui/edge-gradient.svg"
    />

    <div class="relative z-1">
      <header class="pb-14 pt-12 text-center">
        <h2 class="font-barlow-cond text-lg-mob font-bold leading-lg s:text-lg">
          {{ data.headline }}
        </h2>
      </header>

      <!-- thumbs -->
      <div
        class="flex w-full flex-col divide-grayline border-y border-grayline s:flex-row s:divide-x-1 max-s:divide-y-1"
      >
        <BlogThumb v-for="(item, i) in selected" :data="item" />
      </div>
      <div v-if="type == 'callout'" class="mt-btn text-center">
        <CtaBtn to="/">View More</CtaBtn>
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
