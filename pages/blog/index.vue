<script setup>
import { blogQuery } from "~/assets/graphql/queries/blog";
import { toHead } from "vue-datocms";

const route = useRoute();

const page = ref(1);
const postsPerPage = 12;

const { data } = await useGraphqlQuery({
  query: blogQuery.loc.source.body,
  variables: {
    first: postsPerPage,
    skip: (page.value - 1) * postsPerPage,
  },
});
const pageData = data.value.blogLanding;
const posts = data.value.allPosts;

onMounted(() => {
  const theme = useState("theme");
  theme.value = "light";
});

// compile meta tags for head
useHead(() => {
  if (!data.value) return {};
  return toHead(pageData.seo);
});
</script>

<template>
  <div class="bg-jaffa">
    <Section class="s:pt-section-top-lg" :hero="true" side="none">
      <BlogHeader :icon="false" :data="pageData" />
    </Section>

    <!-- featured posts -->
    <Section
      :side="false"
      class="border-t border-grayline s:!py-[5rem] max-s:pt-0"
    >
      <Carousel>
        <div
          v-for="(item, i) in pageData.featuredPosts"
          class="item shrink-0 s:px-[1.6rem] max-s:w-full"
        >
          <BlogPostHeader :data="item" class="h-full" type="feature" />
        </div>
      </Carousel>

      <!-- nav -->
      <div class="mt-4 w-full text-center">
        <UIProgressBars />
      </div>
    </Section>

    <!-- thumbs -->
    <Section :side="false" class="s:!pt-0">
      <!-- filter -->
      <UIFilter :data="{ label: 'filter by category' }" />

      <!-- thumbs grid -->
      <div
        class="thumbs-grid flex w-full flex-wrap border-t border-grayline s:flex-row s:divide-x-1 max-s:divide-y-1 [&_.thumb:nth-child(3n)]:s:!border-r-transparent [&_.thumb:nth-child(n+4)]:s:!border-t-1 [&_.thumb]:!border-grayline [&_.thumb]:s:border-r-1"
      >
        <BlogThumb v-for="(item, i) in posts" :data="item" />

        <!-- add spacer thumb if needed -->
        <template v-if="posts.length % 3 != 0">
          <div v-for="n in 2" class="thumb spacer w-[60rem]"></div>
        </template>
      </div>
    </Section>

    <FooterLockup :data="pageData.footerCallout" />
  </div>
</template>

<style scoped></style>
