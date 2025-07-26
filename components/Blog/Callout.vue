<script setup>
import { blogQuery } from "~/assets/graphql/queries/blog";

const { data } = await useGraphqlQuery({
  query: blogQuery.loc.source.body,
  variables: {
    first: 3,
  },
});
const page = data.value.blogLanding;
const posts = data.value.allPosts;
</script>

<template>
  <Section
    class="bg-jaffa pb-section-bot-mob pt-section-top-lg s:pb-section-bot max-s:!px-0"
    side="none"
  >
    <BlogHeader :data="page" />

    <!-- thumbs -->
    <div
      class="grid w-full grid-cols-1 divide-grayline border-y border-grayline s:grid-cols-3 s:divide-x-1 max-s:divide-y-1"
    >
      <BlogThumb v-for="(item, i) in posts" :data="item" />
    </div>
    <div class="mt-[4rem] text-center s:mt-btn">
      <CtaBtn to="/blog">View More</CtaBtn>
    </div>
  </Section>
</template>

<style scoped></style>
