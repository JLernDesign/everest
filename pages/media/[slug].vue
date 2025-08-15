<script setup>
import {
  mediaCollectionQuery,
  mediaPostsQuery,
} from "~/assets/graphql/queries/media.js";

const route = useRoute();

// get page data
const { data } = await useGraphqlQuery({
  query: mediaCollectionQuery.loc.source.body,
});
const page = data.value.mediaPage;
const collections = data.value.allMediaCollections.filter(
  (collection) => collection.tag?.slug != "ebooks",
);

// get tag id
const tagIds = {
  "product-demos": "cg00smj3TbioZKUzVg3s2A",
  video: "fyWxNDPCQeCC5Ue2d3rdtQ",
  podcasts: "Ug2zyP8QSZanoBxyhEZ1wA",
  "e-book": "fCd4d2mrSAeBNYqcPSAZCw",
};
const tagId = tagIds[route.params.slug];

// get posts data
const posts = ref([]);
const { data: postsData } = await useGraphqlQuery({
  query: mediaPostsQuery.loc.source.body,
  variables: {
    tagId: tagId,
  },
});
posts.value = postsData.value.allMediaPosts;

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
      template="media"
      class="max-s:z-3"
    />

    <!-- media grid -->
    <BlogGrid v-if="posts.length > 0">
      <BlogThumb v-for="post in posts" :data="post" />

      <!-- add spacer thumb if needed -->
      <template v-if="posts.length % 3 != 0">
        <div v-for="n in 2" class="thumb spacer w-[60rem]"></div>
      </template>
    </BlogGrid>

    <FooterLockup :data="page.footerCallout" />

    <!-- cover image for fade in -->
    <LoadCover :loaded="loaded" color="bg-jaffa" />
  </div>
</template>
