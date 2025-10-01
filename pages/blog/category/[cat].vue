<script setup>
import { blogQuery, categoryQuery } from "~/assets/graphql/queries/blog";

const route = useRoute();
const cat = route.params.cat;
const main = ref(null);
const loaded = ref(false);

// get all categories
const { data: allCategories } = await useGraphqlQuery({
  query: categoryQuery.loc.source.body,
});
const categories = toRaw(allCategories.value).allCategories;
const catID = categories.filter((category) => category.slug == cat)[0].id;
const catName = categories.filter((category) => category.slug == cat)[0].name;
const all = {
  name: "All",
  slug: "all",
};
const cats_all = [all, ...categories];

// Create reactive variables
const queryVariables = computed(() => {
  const vars = {
    first: 100,
    skip: 0,
    filter: {
      category: {
        in: catID,
      },
    },
  };
  return vars;
});

const { data } = await useGraphqlQuery({
  query: blogQuery.loc.source.body,
  variables: queryVariables,
});

const pageData = computed(() => {
  return data.value?.blogLanding;
});

const posts = computed(() => {
  return data.value?.allPosts || [];
});

onMounted(() => {
  const theme = useState("theme");
  theme.value = "light";

  scrollReveal(main.value);

  setTimeout(() => {
    loaded.value = true;
  }, 200);
});
</script>

<template>
  <div ref="main" class="bg-jaffa pt-banner">
    <Seo :data="pageData.seo" />

    <Section class="s:pt-section-top-lg" :hero="true" side="none">
      <BlogHeader v-if="pageData" :icon="false" :data="pageData" />
    </Section>

    <!-- featured posts -->
    <!-- <BlogFeatured :data="pageData" /> -->

    <!-- email signup -->
    <!--     <BlogSignup
      loc="blog"
      theme="light"
      class="pb-[2rem] s:pb-[10rem] max-s:pt-[5rem]"
    /> -->

    <!-- thumbs -->

    <Section :side="false" class="border-t border-grayline s:!py-[5rem]">
      <!-- filter -->
      <UIFilter
        :data="cats_all"
        label="filter by category"
        :category="catName"
      />

      <!-- thumbs grid -->
      <div id="thumbs" class="relative z-0">
        <BlogGrid>
          <BlogThumb v-for="(item, i) in posts" :data="item" loc="blog" />

          <!-- add spacer thumb if needed -->
          <template v-if="posts.length % 3 != 0">
            <div v-for="n in 2" class="thumb spacer w-[60rem]"></div>
          </template>
        </BlogGrid>
      </div>
    </Section>

    <FooterLockup
      v-if="pageData?.footerCallout"
      :data="pageData.footerCallout"
    />

    <!-- cover image for fade in -->
    <LoadCover :loaded="loaded" color="bg-jaffa" />
  </div>
</template>

<style scoped></style>
