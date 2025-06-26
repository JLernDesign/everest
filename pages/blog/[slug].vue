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

let ctx, mm;
const min = 650;
const main = ref();
const sidebar = ref();

onMounted(() => {
  mm = gsap.matchMedia();
  ctx = gsap.context((self) => {
    setTimeout(() => {
      // pin menu for duration of article
      mm.add("(min-width: " + min + "px)", () => {
        pinMenu(
          sidebar.value,
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
                  "text-xl-mob s:text-xl font-barlow-cond font-bold leading-xl text-center s:p-[8rem] p-[4rem] rounded-base-mob s:rounded-base bg-jaffa",
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
  <div class="pt-hero-top-mob bg-jaffa s:pt-post-top" ref="main">
    <!-- header -->
    <BlogPostHeader :data="data.post" />

    <!-- content -->
    <Section
      class="relative mx-auto s:!w-[124rem] max-s:flex max-s:flex-col max-s:pb-[5rem]"
      side="none"
    >
      <!-- sidebar -->
      <div
        class="z-2 s:h-0 s:w-[28.4rem] max-s:order-2 max-s:mt-[8rem] max-s:px-side-mob"
        ref="sidebar"
      >
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
      <div class="start-pin hidden s:block"></div>
      <div
        class="relative z-0 flex s:justify-end max-s:order-1 max-s:px-side-mob"
      >
        <div
          class="article bullets [&_h2]:text-body-md-mob s:min-h-[80rem] s:w-[84rem] [&_*+*]:mt-[1.8rem] [&_*+*]:s:mt-[3.2rem] [&_*+h2]:mt-[6rem] [&_*+h2]:s:mt-[9rem] [&_h2]:font-helvb [&_h2]:s:text-body-md [&_h3+p]:mt-[.25rem] [&_h3+p]:s:mt-[.5rem] [&_h3]:font-helvb [&_ul]:space-y-[1rem]"
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
    <PostsCallout :data="{ headline: 'Next Posts' }" class="max-s:pb-0" />

    <FooterLockup :data="data.blogLanding.footerCallout" />
  </div>
</template>

<style scoped></style>
