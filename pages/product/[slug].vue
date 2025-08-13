<script setup>
import { productQuery } from "~/assets/graphql/queries/product";

const route = useRoute();
const loaded = ref(false);
const demo = ref(null);
const scrolled = ref(false);

const { data } = await useGraphqlQuery({
  query: productQuery.loc.source.body,
  variables: {
    slug: route.params.slug,
  },
});
const page = data.value.product;
/* console.log(toRaw(data.value)); */

onMounted(() => {
  window.scrollTo(0, 0);

  const theme = useState("theme");
  theme.value = "light";

  setTimeout(() => {
    loaded.value = true;
  }, 200);

  // minimize video on scroll
  useEventListener(window, "scroll", () => {
    if (window.scrollY > 0) {
      scrolled.value = true;
      demo.value.title = false;
    } else {
      scrolled.value = false;
      demo.value.title = true;
    }
  });
});
</script>

<template>
  <div class="bg-jaffa">
    <Seo :data="page.seo" />
    <ProductHero
      v-if="page.hero"
      :data="page.hero"
      :order="page.order"
      :video-file="page.infographic"
      :demo-video="page.demoVideo"
    />
    <FlexibleBlocks :data="page.flexibleContent.modules" template="product" />
    <FooterLockup :data="page.footerCallout" />

    <!-- media module -->
    <div
      v-if="page.demoVideo"
      class="pointer-events-none fixed bottom-[4rem] right-[4rem] z-19 hidden s:block"
    >
      <div
        class="relative aspect-[1.31] origin-bottom-right overflow-hidden rounded-base-mob transition-all duration-[750ms] ease-in-out s:w-[33.5rem] s:rounded-base"
        :class="[
          loaded ? 'translate-x-0 opacity-100' : 'translate-y-[2rem] opacity-0',
          scrolled ? 'translate-x-[2rem] translate-y-[2rem] scale-[.65]' : '',
        ]"
      >
        <UIMediaThumb :data="page.demoVideo" ref="demo" />
      </div>
    </div>

    <!-- cover image for fade in -->
    <LoadCover :loaded="loaded" />
  </div>
</template>

<style scoped></style>
