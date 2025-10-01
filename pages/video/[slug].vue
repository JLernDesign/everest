<script setup>
import { mediaPostQuery } from "~/assets/graphql/queries/media";

const route = useRoute();

const { data } = await useGraphqlQuery({
  query: mediaPostQuery.loc.source.body,
  variables: {
    slug: route.params.slug,
  },
});

const main = ref();

onMounted(() => {
  const theme = useState("theme");
  theme.value = "light";
});

onUnmounted(() => {
  ctx.revert();
  mm.revert();
});
</script>

<template>
  <div class="bg-jaffa pt-hero-top-mob s:pt-post-top" ref="main">
    <!--  <Seo :data="data.mediaPost.seo" /> -->
    <div class="pt-banner"></div>

    <!-- header -->
    <div class="pb-section-bot-mob s:pb-section-bot">
      <BlogPostHeader :data="data.mediaPost" />
    </div>

    <FooterLockup :data="data.mediaPage.footerCallout" />
  </div>
</template>

<style scoped></style>
