<script setup>
import { blogQuery } from "~/assets/graphql/queries/blog";
import { toHead } from "vue-datocms";

const route = useRoute();

const { data } = await useGraphqlQuery({
  query: blogQuery.loc.source.body,
  variables: {
    first: 12,
    skip: 0,
  },
});
const page = data.value.blogLanding;
const posts = data.value.allPosts;
console.log(toRaw(data.value));
console.log(posts);

const footerCallout = {
  headline: "See how Everest can transform your SaaS operations.",
  intro:
    "Discover how Everest empowers finance and operations leaders to \ndrive faster growth, smarter decisions, and stronger margins.",
  cta: {
    buttons: [
      {
        label: "Try Everest",
        internal: null,
        external: "",
        style: "button",
      },
      {
        label: "Contact Us",
        internal: null,
        external: "",
        style: "text",
      },
    ],
  },
};

// compile meta tags for head
useHead(() => {
  if (!data.value) return {};
  return toHead(page.seo);
});
</script>

<template>
  <div class="bg-jaffa">
    <Section class="pt-section-top-lg" :hero="true" side="none">
      <BlogHeader :icon="false" :data="page" />
    </Section>

    <!-- featured posts -->
    <Section :side="false" class="border-t border-grayline !py-[5rem]">
      <!-- nav -->
      <div class="w-full text-center">
        <UIProgressBars />
      </div>
    </Section>

    <!-- thumbs -->
    <Section :side="false">
      <!-- filter -->
      <UIFilter :data="{ label: 'filter by category' }" />

      <!-- thumbs grid -->
      <div
        class="thumbs-grid flex w-full flex-wrap border-t border-grayline [&_.thumb:nth-child(3n)]:!border-r-transparent [&_.thumb:nth-child(n+4)]:!border-t-1 [&_.thumb]:border-r-1 [&_.thumb]:!border-grayline"
      >
        <BlogThumb v-for="(item, i) in posts" :data="item" />

        <!-- add spacer thumb if needed -->
        <template v-if="posts.length % 3 != 0">
          <div v-for="n in 2" class="thumb spacer w-[60rem]"></div>
        </template>
      </div>
    </Section>

    <FooterLockup :data="footerCallout" />
  </div>
</template>

<style scoped></style>
