<script setup>
import gsap from "gsap";
import { StructuredText as DatocmsStructuredText } from "vue-datocms";
import { newsPostQuery } from "~/assets/graphql/queries/news";

const route = useRoute();

const { data } = await useGraphqlQuery({
  query: newsPostQuery.loc.source.body,
  variables: {
    slug: route.params.slug,
  },
});

let ctx, mm;
const min = 650;
const main = ref();

onMounted(() => {
  mm = gsap.matchMedia();
  ctx = gsap.context((self) => {
    setTimeout(() => {
      // pin menu for duration of article
      mm.add("(min-width: " + min + "px)", () => {
        pinMenu(
          document.getElementById("sidebar"),
          self.selector(".start-pin"),
          self.selector(".end-pin"),
        );
      });
    }, 200);
  }, main.value);

  const theme = useState("theme");
  theme.value = "light";
});

onUnmounted(() => {
  ctx.revert();
  mm.revert();
});

// Structured Text: block renderer
const renderBlock = ({ record }) => {
  // photo block
  if (record.__typename === "BlogImageRecord") {
    return h("figure", { class: "content-block image" }, [
      h("img", { src: record.image.url }),
      h(
        "figcaption",
        { class: "block text-body-sm-mob s:text-body-sm text-left !mt-6" },
        record.caption,
      ),
    ]);
  }
};
</script>

<template>
  <div class="bg-jaffa pt-hero-top-mob s:pt-post-top" ref="main">
    <Seo :data="data.newsPost.seo" />

    <!-- header -->
    <BlogPostHeader :data="data.newsPost" />

    <!-- content -->
    <Section
      class="relative mx-auto pb-section-bot s:!w-[124rem] max-s:flex max-s:flex-col max-s:pb-[5rem]"
      side="none"
    >
      <!-- sidebar -->
      <BlogSidebar :title="data.newsPost.title" />

      <!-- article -->
      <div class="start-pin hidden s:block"></div>
      <div
        class="relative z-0 flex s:justify-end max-s:order-1 max-s:px-side-mob"
      >
        <div
          class="article bullets s:min-h-[80rem] s:w-[84rem] [&_*+*]:mt-[1.8rem] [&_*+*]:s:mt-[3.2rem] [&_*+h2]:mt-[6rem] [&_*+h2]:s:mt-[9rem] [&_h2]:font-helvb [&_h2]:text-body-md-mob [&_h2]:s:text-body-md [&_h3+p]:mt-[.25rem] [&_h3+p]:s:mt-[.5rem] [&_h3]:font-helvb [&_ul]:space-y-[1rem]"
        >
          <DatocmsStructuredText
            :data="data.newsPost.content"
            :renderBlock="renderBlock"
          />
        </div>
      </div>
      <div class="end-pin hidden s:block"></div>
    </Section>

    <FooterLockup :data="data.newsPage.footerCallout" />
  </div>
</template>

<style scoped></style>
