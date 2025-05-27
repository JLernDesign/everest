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

let ctx;
const main = ref();
const sidebar = ref();

onMounted(() => {
  let el;
  ctx = gsap.context((self) => {
    setTimeout(() => {
      // pin menu for duration of article
      pinMenu(
        sidebar.value,
        self.selector(".start-pin"),
        self.selector(".end-pin"),
      );
    }, 200);
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});

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
  <div class="pt-post-top bg-jaffa" ref="main">
    <!-- header -->
    <header
      class="mx-auto flex w-full max-w-[141rem] rounded-base bg-jaffalt p-[2.5rem]"
    >
      <!-- text -->
      <div class="left relative w-1/2 py-[2.5rem] pl-side pr-[6.5rem]">
        <BlogDetails :data="data.post" class="mb-[6.5rem]" />
        <h1 class="leading-base mb-[3.2rem] font-helvb text-md">
          {{ data.post.title }}
        </h1>
        <p>{{ data.post.intro }}</p>
        <div
          v-if="data.post.author"
          class="author absolute bottom-0 flex items-center space-x-6"
        >
          <img
            v-if="data.post.author.photo"
            :src="data.post.author.photo.url"
            alt=""
            class="w-[5rem] overflow-hidden rounded-full"
          />
          <p class="text-body-xsm">Author: {{ data.post.author.name }}</p>
        </div>
      </div>

      <!-- image -->
      <div class="right relative w-1/2">
        <div class="featured-image h-full w-full overflow-hidden rounded-sm">
          <DatocmsImage
            v-if="data.post.image"
            :data="data.post.image.responsiveImage"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>

    <!-- content -->
    <Section class="relative mx-auto w-full max-w-[126rem]">
      <!-- sidebar -->
      <div class="h-0 w-[21%]" ref="sidebar">
        <div class="menu relative">
          <div class="overflow-hidden rounded-base bg-skyblue">
            <img src="/public/blog/sidebar-callout@2x.png" alt="" />
          </div>
        </div>
      </div>

      <!-- article -->
      <div class="start-pin"></div>
      <div class="flex justify-end">
        <div
          class="article w-[68.7%] [&_h2]:font-helvb [&_h2]:text-body-md [&_h3]:font-helvb"
        >
          <DatocmsStructuredText
            :data="data.post.content"
            :renderBlock="renderBlock"
          />
        </div>
      </div>
      <div class="end-pin"></div>
    </Section>
  </div>
</template>

<style scoped></style>
