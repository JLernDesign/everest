<script setup>
import { newsCollectionQuery } from "~/assets/graphql/queries/news.js";
const slug = "collaborations";

const { data } = await useGraphqlQuery({
  query: newsCollectionQuery.loc.source.body,
});
const page = data.value.newsPage;
const collections = data.value.allNewsCollections;
const posts = data.value.allNewsPosts.filter((post) => post.tag.slug === slug);
const loaded = ref(false);

onMounted(() => {
  const theme = useState("theme");
  theme.value = "light";

  setTimeout(() => {
    loaded.value = true;
  }, 200);
});
</script>

<template>
  <div class="bg-jaffa">
    <Seo :data="page.seo" />

    <!-- basic hero -->
    <BasicHero
      :data="page.hero"
      :subnav="collections"
      template="news"
      class="max-s:z-3"
    />

    <!-- news grid -->
    <BlogGrid>
      <BlogThumb v-for="post in posts" :data="post" />

      <!-- add spacer thumb if needed -->
      <template v-if="posts.length % 3 != 0">
        <div v-for="n in 2" class="thumb spacer w-[60rem]"></div>
      </template>
    </BlogGrid>

    <!-- cover image for fade in -->
    <LoadCover :loaded="loaded" color="bg-jaffa" />

    <FooterLockup :data="page.footerCallout" />
  </div>
</template>
