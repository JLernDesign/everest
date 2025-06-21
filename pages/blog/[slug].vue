<script setup>
import gsap from "gsap";
import { StructuredText as DatocmsStructuredText } from "vue-datocms";
import { postQuery } from "~/assets/graphql/queries/blog";
import { toHead } from "vue-datocms";

const route = useRoute();

const { data } = await useGraphqlQuery({
  query: postQuery.loc.source.body,
  variables: {
    slug: route.params.slug,
  },
});

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

  const theme = useState("theme");
  theme.value = "light";
});

onUnmounted(() => {
  ctx.revert();
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
          "content-block quote relative left-1/2 w-screen -translate-x-1/2 -ml-[20rem] !my-[10rem]",
      },
      [
        h(
          "div",
          {
            class:
              "quote-wrap bg-[url(/public/blog/quote-bg.svg)] bg-cover px-[20rem] py-[13.2rem] border-y-1 border-y-grayline",
          },
          [
            h(
              "blockquote",
              {
                class:
                  "text-xl-mob s:text-xl font-barlow-cond font-bold leading-xl text-center p-[8rem] rounded-base-mob s:rounded-base bg-jaffa",
              },
              record.text,
            ),
          ],
        ),
      ],
    );
  }
};

// compile meta tags for head
useHead(() => {
  if (!data.value) return {};
  return toHead(data.value.post.seo);
});
</script>

<template>
  <div class="bg-jaffa pt-post-top" ref="main">
    <!-- header -->
    <BlogPostHeader :data="data.post" />

    <!-- content -->
    <Section class="relative mx-auto !w-[124rem]" side="none">
      <!-- sidebar -->
      <div class="z-2 h-0 w-[28.4rem]" ref="sidebar">
        <div class="menu relative">
          <div
            class="cta rounded-base-mob relative overflow-hidden bg-skyblue bg-[url(/public/blog/sidebar-callout@2x.png)] bg-cover pb-[3rem] pt-[21.2rem] text-center s:rounded-base"
          >
            <CtaBtn to="/">Try Everest</CtaBtn>
          </div>
          <div
            class="rounded-base-mob mt-[2.4rem] bg-shadowblue s:rounded-base"
          >
            <div class="border-b-1 border-b-whiteline py-5 text-center">
              <h3
                class="h5 font-barlow-cond text-h5 font-bold uppercase text-jaffa"
              >
                Share
              </h3>
            </div>
            <div
              class="grid h-[5rem] auto-cols-fr grid-flow-col divide-x-1 divide-whiteline"
            >
              <a href="#" class="grid place-content-center"
                ><SocialFacebook class="fill-red"
              /></a>
              <a href="#" class="grid place-content-center"
                ><SocialLinkedin class="fill-red"
              /></a>
              <a href="#" class="grid place-content-center"
                ><SocialPinterest class="fill-red"
              /></a>
              <a href="#" class="grid place-content-center"
                ><SocialX class="fill-red"
              /></a>
              <a href="#" class="grid place-content-center"
                ><SocialWeblink class="fill-red"
              /></a>
            </div>
          </div>
        </div>
      </div>

      <!-- article -->
      <div class="start-pin"></div>
      <div class="relative z-0 flex justify-end">
        <div
          class="article bullets [&_h2]:text-body-md-mob min-h-[80rem] w-[84rem] s:text-body-md [&_*+*]:mt-[3.2rem] [&_*+h2]:mt-[9rem] [&_h2]:font-helvb [&_h3+p]:mt-[.5rem] [&_h3]:font-helvb [&_ul]:space-y-[1rem]"
        >
          <DatocmsStructuredText
            :data="data.post.content"
            :renderBlock="renderBlock"
          />
        </div>
      </div>
      <div class="end-pin"></div>
    </Section>

    <!-- more posts -->
    <PostsCallout :data="{ headline: 'Next Posts' }" />

    <FooterLockup :data="data.blogLanding.footerCallout" />
  </div>
</template>

<style scoped></style>
