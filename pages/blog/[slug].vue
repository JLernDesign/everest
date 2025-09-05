<script setup>
import gsap from "gsap";
import gql from "graphql-tag";
import { StructuredText as DatocmsStructuredText } from "vue-datocms";
import { postQuery, PostFragment } from "~/assets/graphql/queries/blog";
import BlogTable from "~/components/Blog/Table.vue";

const route = useRoute();

const { data } = await useGraphqlQuery({
  query: postQuery.loc.source.body,
  variables: {
    slug: route.params.slug,
  },
});

/* get next 3 posts */
const nextPostsQuery = gql`
  query {
    allPosts(
      orderBy: publishDate_DESC
      filter: { publishDate: { lte: "${data.value.post.publishDate}" }, id: {neq: "${data.value.post.id}"} }
      first: 3
    ) {
      ...PostFragment
    }
  }
  ${PostFragment}
`;

const { data: nextPostsData } = await useGraphqlQuery({
  query: nextPostsQuery.loc.source.body,
});

// loop back to beginning if there are less than 3 posts
if (nextPostsData.value.allPosts.length < 3) {
  let amount = 3 - nextPostsData.value.allPosts.length;
  const firstPostsQuery = gql`
    query {
      allPosts(orderBy: publishDate_DESC, first: ${amount}) {
        ...PostFragment
      }
    }
    ${PostFragment}
  `;

  const { data: firstPostsData } = await useGraphqlQuery({
    query: firstPostsQuery.loc.source.body,
  });
  nextPostsData.value.allPosts = [
    ...nextPostsData.value.allPosts,
    ...firstPostsData.value.allPosts,
  ];
}

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

  // quote block
  if (record.__typename === "BlogQuoteRecord") {
    return h(
      "div",
      {
        class:
          "content-block quote relative left-1/2 w-screen max-s:-ml-[50vw] s:-translate-x-1/2 -ml-[20rem] s:!my-[10rem] max-s:!my-[8rem]",
      },
      [
        h(
          "div",
          {
            class:
              "quote-wrap s:bg-[url(/public/blog/quote-bg.svg)] bg-[url(/public/blog/quote-bg-mob.svg)] bg-cover s:px-[20rem] s:py-[13.2rem] py-[17rem] border-y-1 border-y-grayline",
          },
          [
            h(
              "blockquote",
              {
                class:
                  "text-xl-mob s:text-xl -tracking-sm font-barlow-cond leading-xl text-center s:p-[8rem] p-[4rem] rounded-base-mob s:rounded-base bg-jaffa",
              },
              record.text,
            ),
          ],
        ),
      ],
    );
  }

  // table block
  if (record.__typename === "BlogTableRecord") {
    return h(BlogTable, { data: record });
  }
};
</script>

<template>
  <div class="bg-jaffa pt-hero-top-mob s:pt-post-top" ref="main">
    <Seo :data="data.post.seo" />

    <!-- header -->
    <BlogPostHeader :data="data.post" />

    <!-- content -->
    <Section
      class="relative mx-auto s:!w-[124rem] max-s:flex max-s:flex-col max-s:pb-[5rem]"
      side="none"
    >
      <!-- sidebar -->
      <BlogSidebar :title="data.post.title" />

      <!-- article -->
      <div class="start-pin hidden s:block"></div>
      <div
        class="relative z-0 flex s:justify-end max-s:order-1 max-s:px-side-mob"
      >
        <div
          class="article bullets s:min-h-[80rem] s:w-[84rem] [&_*+*]:mt-[1.8rem] [&_*+*]:s:mt-[3.2rem] [&_*+h2]:mt-[6rem] [&_*+h2]:s:mt-[9rem] [&_.blog-table_*+*]:mt-0 [&_a:hover]:text-red [&_h2]:font-helvb [&_h2]:text-body-md-mob [&_h2]:s:text-body-md [&_h3+p]:mt-[.25rem] [&_h3+p]:s:mt-[.5rem] [&_h3]:font-helvb [&_ul]:space-y-[1rem]"
        >
          <DatocmsStructuredText
            :data="data.post.content"
            :renderBlock="renderBlock"
          />
        </div>
      </div>
      <div class="end-pin hidden s:block"></div>
    </Section>

    <!-- more posts -->
    <PostsCallout
      :data="{ headline: 'Next Posts' }"
      :posts="nextPostsData.allPosts"
      class="max-s:pb-0"
      type="next"
    />

    <FooterLockup :data="data.blogLanding.footerCallout" />
  </div>
</template>

<style scoped></style>
