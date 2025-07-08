<script setup>
import { mediaCollectionQuery } from "~/assets/graphql/queries/media.js";
import { toHead } from "vue-datocms";

const route = useRoute();

const { data } = await useGraphqlQuery({
  query: mediaCollectionQuery.loc.source.body,
  variables: {
    slug: route.params.slug,
  },
});
const page = data.value.mediaPage;
const collections = data.value.allMediaCollections;
const items = data.value.mediaCollection.items.mediaGroup;

onMounted(() => {
  const theme = useState("theme");
  theme.value = "light";
});

// compile meta tags for head
useHead(() => {
  if (!data.value) return {};
  return toHead(page.seo);
});
</script>

<template>
  <div class="bg-jaffa">
    <!-- basic hero -->
    <BasicHero
      :data="page.hero"
      :subnav="collections"
      template="media"
      class="max-s:z-3"
    />

    <!-- media grid -->
    <BlogGrid>
      <BlogThumb v-for="item in items" :data="item" />

      <!-- add spacer thumb if needed -->
      <template v-if="items.length % 3 != 0">
        <div v-for="n in 2" class="thumb spacer w-[60rem]"></div>
      </template>
    </BlogGrid>

    <FooterLockup :data="page.footerCallout" />
  </div>
</template>
