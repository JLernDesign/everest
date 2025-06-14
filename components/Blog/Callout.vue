<script setup>
import { blogQuery } from "~/assets/graphql/queries/blog";

const { data } = await useGraphqlQuery({
  query: blogQuery.loc.source.body,
});
const page = data.value.blogLanding;
const posts = data.value.allPosts;
const selected = posts.slice(0, 3);
</script>

<template>
  <Section class="bg-jaffa pb-section-bot pt-section-top-lg" side="none">
    <BlogHeader :data="page" />

    <!-- thumbs -->
    <div
      class="flex w-full divide-x-1 divide-grayline border-y border-grayline"
    >
      <BlogThumb v-for="(item, i) in selected" :data="item" />
    </div>
    <div class="mt-btn text-center">
      <CtaBtn to="/blog">View More</CtaBtn>
    </div>
  </Section>
</template>

<style scoped></style>
