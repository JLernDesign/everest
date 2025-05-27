<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Image as DatocmsImage } from "vue-datocms";
import { StructuredText as DatocmsStructuredText } from "vue-datocms";
import BlogQuery from "~/assets/graphql/blog.graphql";

const route = useRoute();

const QUERY = BlogQuery.loc.source.body;
const { data } = await useGraphqlQuery({
  query: QUERY,
  variables: {
    slug: route.params.slug,
  },
});
console.log(toRaw(data.value.post));

// Structured Text: block renderer
const renderBlock = ({ record }) => {
  // quote block
  if (record.__typename === "QuoteRecord") {
    return h("div", { class: "content-block quote" }, [
      h("div", { class: "quote-wrap" }, [
        h("blockquote", { class: "text-xl" }, record.text),
      ]),
    ]);
  }
};

// SEO
useHead({
  title: data.value.post.title,
});
</script>

<template>
  <div>
    <!-- header -->
    <header class="pt-post-top">
      <BlogDetails :data="data.post" />
      <h1 class="leading-base font-helvb text-md">{{ data.post.title }}</h1>
      <p>{{ data.post.intro }}</p>
      <div class="w-[70rem]">
        <DatocmsImage
          v-if="data.post.image"
          :data="data.post.image.responsiveImage"
        />
      </div>
    </header>

    <!-- content -->
    <div class="[&_h2]:font-helvb [&_h2]:text-body-md [&_h3]:font-helvb">
      <DatocmsStructuredText
        :data="data.post.content"
        :renderBlock="renderBlock"
      />
    </div>
  </div>
</template>

<style scoped></style>
