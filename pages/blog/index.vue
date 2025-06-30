<script setup>
import { gsap } from "gsap";
import { blogQuery } from "~/assets/graphql/queries/blog";
import { toHead } from "vue-datocms";

const page = ref(1);
const postsPerPage = 12;
const main = ref(null);

// Create reactive variables
const queryVariables = computed(() => {
  const vars = {
    first: postsPerPage,
    skip: (page.value - 1) * postsPerPage,
  };
  //console.log("Computed variables for page", page.value, ":", vars);
  return vars;
});

const { data, pending } = await useGraphqlQuery({
  query: blogQuery.loc.source.body,
  variables: queryVariables,
});

// Make data access reactive - separate blogLanding from posts
const pageData = computed(() => {
  return data.value?.blogLanding;
});

const posts = computed(() => {
  return data.value?.allPosts || [];
});

const totalPosts = computed(() => {
  return data.value?._allPostsMeta.count;
});

// Keep a reference to the initial blogLanding data
const initialPageData = ref(null);

onMounted(() => {
  const theme = useState("theme");
  theme.value = "light";

  scrollReveal(main.value);

  // Store the initial blogLanding data
  if (data.value?.blogLanding) {
    initialPageData.value = data.value.blogLanding;
  }
});

// Use initial page data if current pageData is not available
const finalPageData = computed(() => {
  return pageData.value || initialPageData.value;
});

// Track the current content height to maintain it during loading
const containerHeight = ref(0);

// update page
const updatePage = (n) => {
  const thumbs = document.querySelector("#thumbs");

  // Store the current height before changing data
  if (thumbs) {
    containerHeight.value = thumbs.scrollHeight;
  }

  gsap.to(thumbs, {
    opacity: 0,
    duration: 0.2,
    ease: "power3.inOut",
  });

  gsap.to(window, {
    scrollTo: { y: thumbs, duration: 0.5, ease: "power3.inOut" },
  });
  setTimeout(() => {
    page.value = n;
    gsap.to(thumbs, {
      opacity: 1,
      duration: 0.3,
      ease: "power3.inOut",
      onComplete: () => {
        scrollReveal(main.value);
      },
    });
  }, 300);
};

// compile meta tags for head
useHead(() => {
  if (!data.value || !finalPageData.value) return {};
  return toHead(finalPageData.value.seo);
});
</script>

<template>
  <div ref="main" class="bg-jaffa">
    <Section class="s:pt-section-top-lg" :hero="true" side="none">
      <BlogHeader v-if="finalPageData" :icon="false" :data="finalPageData" />
    </Section>

    <!-- featured posts -->
    <Section
      :side="false"
      class="border-t border-grayline s:!py-[5rem] max-s:pt-0"
    >
      <Carousel v-if="finalPageData?.featuredPosts">
        <div
          v-for="(item, i) in finalPageData.featuredPosts"
          class="item shrink-0 s:px-[1.6rem] max-s:w-full"
        >
          <BlogPostHeader :data="item" class="h-full" type="feature" />
        </div>
      </Carousel>

      <!-- nav -->
      <div class="mt-4 w-full text-center">
        <UIProgressBars />
      </div>
    </Section>

    <!-- thumbs -->
    <Section :side="false" class="s:!pt-0">
      <!-- filter -->
      <UIFilter :data="{ label: 'filter by category' }" />

      <!-- thumbs grid -->
      <div
        id="thumbs"
        :style="
          pending && containerHeight > 0
            ? `min-height: ${containerHeight}px`
            : ''
        "
      >
        <div
          v-if="!pending"
          class="thumbs-grid flex w-full flex-wrap border-t border-grayline s:flex-row s:divide-x-1 max-s:divide-y-1 [&_.thumb:first-child]:s:!border-r-transparent [&_.thumb:nth-child(3n)]:s:!border-r-transparent [&_.thumb]:!border-grayline [&_.thumb]:s:!border-b-1 [&_.thumb]:s:border-r-1"
        >
          <BlogThumb v-for="(item, i) in posts" :data="item" loc="blog" />

          <!-- add spacer thumb if needed -->
          <template v-if="posts.length % 3 != 0">
            <div v-for="n in 2" class="thumb spacer w-[60rem]"></div>
          </template>
        </div>

        <!-- Loading placeholder to maintain height -->
        <div
          v-if="pending"
          class="flex items-center justify-center"
          style="min-height: 400px"
        ></div>
      </div>

      <BlogPagination
        :total="totalPosts"
        :perpage="postsPerPage"
        :update="updatePage"
      />
    </Section>

    <FooterLockup
      v-if="finalPageData?.footerCallout"
      :data="finalPageData.footerCallout"
    />
  </div>
</template>

<style scoped></style>
