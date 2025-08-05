<script setup>
import { gsap } from "gsap";
import { blogQuery } from "~/assets/graphql/queries/blog";

const page = ref(1);
const postsPerPage = 12;
const main = ref(null);
const loaded = ref(false);

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

  setTimeout(() => {
    loaded.value = true;
  }, 200);
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
        setTimeout(() => {
          console.log(
            "scrollReveal",
            main.value.querySelectorAll(".scroll-reveal"),
          );
          scrollReveal(main.value);
        }, 200);
      },
    });
  }, 300);
};
</script>

<template>
  <div ref="main" class="bg-jaffa">
    <Seo :data="finalPageData.seo" />

    <Section class="s:pt-section-top-lg" :hero="true" side="none">
      <BlogHeader v-if="finalPageData" :icon="false" :data="finalPageData" />
    </Section>

    <!-- featured posts -->
    <BlogFeatured :data="finalPageData" />

    <!-- thumbs -->
    <Section :side="false" class="s:!pt-0">
      <!-- filter -->
      <!-- <UIFilter :data="{ label: 'filter by category' }" /> -->

      <!-- thumbs grid -->
      <div
        id="thumbs"
        :style="
          pending && containerHeight > 0
            ? `min-height: ${containerHeight}px`
            : ''
        "
      >
        <BlogGrid v-if="!pending">
          <BlogThumb v-for="(item, i) in posts" :data="item" loc="blog" />

          <!-- add spacer thumb if needed -->
          <template v-if="posts.length % 3 != 0">
            <div v-for="n in 2" class="thumb spacer w-[60rem]"></div>
          </template>
        </BlogGrid>

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

    <!-- cover image for fade in -->
    <LoadCover :loaded="loaded" color="bg-jaffa" />
  </div>
</template>

<style scoped></style>
