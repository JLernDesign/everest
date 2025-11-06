<script setup>
import { blogQuery } from "~/assets/graphql/queries/blog";

const { data } = await useGraphqlQuery({
  query: blogQuery.loc.source.body,
  variables: {
    first: 3,
    filter: { hide: { eq: false } },
  },
});
const page = data.value.blogLanding;
const posts = data.value.allPosts;
</script>

<template>
  <Section
    class="bg-jaffa pb-section-bot-mob pt-section-top-lg s:pb-section-bot max-s:!px-0"
    side="none"
    data-datocms-noindex
  >
    <BlogHeader :data="page" />

    <!-- thumbs -->
    <div
      class="mx-auto grid w-full max-w-[180rem] grid-cols-1 divide-grayline border-y border-grayline s:grid-cols-3 s:divide-x-1 max-s:divide-y-1"
    >
      <BlogThumb v-for="(item, i) in posts" :data="item" />
    </div>
    <div class="mt-[4rem] text-center s:mt-btn">
      <CtaBtn to="/blog/page/1/">View More</CtaBtn>
    </div>
  </Section>
</template>

<style scoped></style>
