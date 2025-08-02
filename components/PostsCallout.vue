<script setup>
import { featuredNewsQuery } from "~/assets/graphql/queries/news";
const props = defineProps(["data", "type", "posts"]);

const { data: posts_data } = await useGraphqlQuery({
  query: featuredNewsQuery.loc.source.body,
});
const posts = props.posts || posts_data.value.allNewsPosts;
</script>

<template>
  <Section
    class="mt-[5rem] !pt-0 pb-section-bot-mob s:mt-[15rem] s:pb-section-bot"
    side="none"
  >
    <div class="absolute left-0 top-0 z-1 h-full w-full bg-jaffa"></div>
    <UIGlow
      class="-top-[5rem] z-0 h-[13.6rem] w-full s:-top-[13.6rem] s:blur-big"
      src="/ui/edge-gradient.svg"
    />

    <div class="relative z-1">
      <header class="pb-14 pt-12 text-center">
        <h2 class="font-barlow-cond text-lg-mob leading-lg s:text-lg">
          {{ data.headline }}
        </h2>
      </header>

      <!-- thumbs -->
      <div
        class="mx-auto grid w-full max-w-[180rem] grid-cols-1 divide-grayline border-y border-grayline s:grid-cols-3 s:divide-x-1 max-s:divide-y-1"
      >
        <BlogThumb v-for="(item, i) in posts" :data="item" />
      </div>
      <div v-if="type == 'callout'" class="mt-btn text-center">
        <CtaBtn to="/news/press">View More</CtaBtn>
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
