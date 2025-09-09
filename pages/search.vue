<script setup>
import { buildClient } from "@datocms/cma-client-browser";
import gsap from "gsap";

const runtimeConfig = useRuntimeConfig();
const client = buildClient({ apiToken: runtimeConfig.public.datoCmsToken });
const buildId = "36565";
//36758 (staging)
//36565 (production)

const route = useRoute();
const q = route.query.q;
const loaded = ref(false);
const results = ref([]);
const resultsWrapper = ref(null);

// conduct search
results.value = await client.searchResults.list({
  filter: { query: q, build_trigger_id: buildId, fuzzy: true },
  limit: 100,
});
/* console.log(results.value); */

onMounted(() => {
  const theme = useState("theme");
  theme.value = "light";

  setTimeout(() => {
    loaded.value = true;
  }, 200);
});

/* refresh search */
watch(
  () => route.query.q,
  () => {
    newSearch();
  },
);

const newSearch = async () => {
  // hide results
  gsap.to(resultsWrapper.value, {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  });

  // new search
  results.value = await client.searchResults.list({
    filter: { query: route.query.q, build_trigger_id: buildId, fuzzy: true },
    limit: 100,
  });

  // show new results
  gsap.to(resultsWrapper.value, {
    opacity: 1,
    duration: 0.5,
    ease: "none",
  });
};

/* formatting */
const formatUrl = (url) => {
  if (url.includes(".app")) {
    return url.split(".app")[1];
  }

  return url;
};

const formatTitle = (title) => {
  if (title.includes("Everest Systems | ")) {
    return title.replace("Everest Systems | ", "");
  }
  return title;
};

const getType = (url) => {
  if (url.includes("blog")) {
    return "Post";
  } else if (url.includes("news")) {
    return "Press";
  } else if (url.includes("media")) {
    return "Media";
  } else {
    return "Page";
  }
};

/* highlight matches */
const formatHighlight = (string) => {
  if (!string || string.length == 0) {
    return "";
  }

  let str = "";
  let last = "";
  string.forEach((item, i) => {
    if (item == last) {
      return;
    }

    if (i > 0) {
      str += " ... ";
    }

    str += item
      .replaceAll("[h]", "<span class='highlight'>")
      .replaceAll("[/h]", "</span>");

    last = item;
  });

  return str;
};
</script>

<template>
  <div class="pt-banner bg-jaffa">
    <!-- basic hero -->
    <BasicHero :data="{ headline: 'Search Results' }" class="max-s:pb-[4rem]" />

    <!-- content -->
    <Section class="!pt-0 pb-section-bot-mob s:pb-section-bot">
      <div
        class="mx-auto max-w-base border-t-1 border-grayline"
        ref="resultsWrapper"
      >
        <div
          v-for="result in results"
          :key="result.id"
          class="item relative border-b-1 border-grayline py-[3rem] text-body-sm-mob leading-sm s:px-side s:py-[4rem] s:pr-[30rem] s:text-body-sm"
        >
          <h3 class="mb-2 max-s:pr-[8rem]">
            <NuxtLink
              :to="formatUrl(result.url)"
              class="ul single relative font-helvh max-s:underline"
              >{{ formatTitle(result.title) }}</NuxtLink
            >
          </h3>
          <!-- <p
            class="mt-8 s:mt-2 [&_.highlight]:bg-skyblue [&_.highlight]:bg-opacity-50 [&_.highlight]:px-1 [&_.highlight]:pb-1 [&_.highlight]:pt-2"
            v-html="formatHighlight(result.highlight.body)"
          ></p> -->
          <p
            class="mt-8 s:mt-2 [&_.highlight]:bg-skyblue [&_.highlight]:bg-opacity-50 [&_.highlight]:px-1 [&_.highlight]:pb-1 [&_.highlight]:pt-2"
          >
            {{ result.body_excerpt }}...
          </p>

          <div
            class="tag absolute right-0 top-[2.5rem] inline-block rounded-sm border-1 border-black px-[1.4rem] pb-[.6rem] pt-[.4rem] font-barlow text-tag font-medium uppercase s:top-[4rem]"
          >
            {{ getType(result.url) }}
          </div>
        </div>

        <!-- no results -->
        <div
          class="py-[3rem] text-body-sm-mob leading-sm s:px-side s:py-[4rem] s:text-body-sm"
          v-if="results.length == 0"
        >
          <h3 class="text-center">No results found</h3>
        </div>
      </div>
    </Section>

    <FooterLockup :data="{}" />

    <!-- cover image for fade in -->
    <LoadCover :loaded="loaded" color="bg-jaffa" />
  </div>
</template>
