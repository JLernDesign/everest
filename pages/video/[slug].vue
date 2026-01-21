<script setup>
import gsap from "gsap";
import { mediaPostQuery } from "~/assets/graphql/queries/media";
import { StructuredText as DatocmsStructuredText } from "vue-datocms";
import BlogTable from "~/components/Blog/Table.vue";
import BlogDownload from "~/components/Blog/Download.vue";
import BlogVideo from "~/components/Blog/Video.vue";

const route = useRoute();
const router = useRouter();

const { data } = await useGraphqlQuery({
  query: mediaPostQuery.loc.source.body,
  variables: {
    slug: route.params.slug,
  },
});

console.log(data.value);
// check for article
let article = false;
if (data.value.mediaPost.content?.value?.document?.children?.length > 0) {
  article = true;
}

let ctx, mm;
const min = 650;
const main = ref();

onMounted(() => {
  if (article) {
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
  }

  const theme = useState("theme");
  theme.value = "light";
});

onUnmounted(() => {
  if (article) {
    ctx.revert();
    mm.revert();
  }
});

const goBack = () => {
  router.back();
}

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

  // download block
  if (record.__typename === "DownloadRecord") {
    return h(BlogDownload, { data: record });
  }

  // video block
  if (record.__typename === "EmbedVideoRecord") {
    return h(BlogVideo, { data: record });
  }
};
</script>

<template>

  <div class="bg-jaffa pt-hero-top-mob s:pt-post-top" ref="main">
    <Seo :data="data.mediaPost.seo" />
    <div class="pt-banner"></div>

    <!-- back button for live demo -->
    <div v-if="data.mediaPost.tag.slug == 'live-demo'"
      class="relative max-s:px-side-mob mx-auto w-full max-w-[141rem] s:mb-8 mb-4 max-s:mt-4">
      <button to="#" @click="goBack" class="flex items-center s:space-x-8 space-x-6 hover:text-red group">
        <IconArrow color="stroke-black" class="rotate-180 s:w-[1.8rem] w-[1.4rem] -mt-3 group-hover:stroke-red" />
        <span class="text-body-sm-mob s:text-body-mob">Back to Overview</span>
      </button>
    </div>

    <!-- header -->
    <div class="pb-section-bot-mob s:pb-section-bot">
      <BlogPostHeader :data="data.mediaPost" />
    </div>

    <!-- content -->
    <Section v-if="article"
      class="relative mx-auto max-s:!pt-0 pb-section-bot-mob s:!w-[124rem] s:pb-section-bot max-s:flex max-s:flex-col max-s:pb-[5rem]"
      side="none">
      <!-- sidebar -->
      <BlogSidebar :title="data.mediaPost.title" />

      <!-- article -->
      <div class="start-pin hidden s:block"></div>
      <div class="relative z-0 flex s:justify-end max-s:order-1 max-s:px-side-mob">
        <div
          class="article bullets s:min-h-[80rem] s:w-[84rem] [&_*+*]:mt-[1.8rem] [&_*+*]:s:mt-[3.2rem] [&_*+h2]:mt-[6rem] [&_*+h2]:s:mt-[9rem] [&_.blog-table_*+*]:mt-0 [&_a(not(.cta-btn)):hover]:text-red [&_h2]:font-helvb [&_h2]:text-body-md-mob [&_h2]:s:text-body-md [&_h3+p]:mt-[.25rem] [&_h3+p]:s:mt-[.5rem] [&_h3]:font-helvb [&_ul]:space-y-[1rem]">
          <DatocmsStructuredText :data="data.mediaPost.content" :renderBlock="renderBlock" />
        </div>
      </div>
      <div class="end-pin hidden s:block"></div>
    </Section>

    <FooterLockup :data="data.mediaPage.footerCallout" />
  </div>
</template>

<style scoped></style>
