<script setup>
import gsap from "gsap";
import { toHead } from "vue-datocms";
import { settingsQuery } from "~/assets/graphql/queries/settings";

const route = useRoute();
const router = useRouter();
const layout = ref(null);

// initial states
const page_title = useState("page_title", () => "index");
const base_url = useState("base_url", () => "https://everest25.netlify.app");
const theme = useState("theme", () => "light");
const pageInactive = useState("pageInactive", () => false);

// get global settings data
const QUERY = settingsQuery.loc.source.body;
const { data } = await useGraphqlQuery({
  query: QUERY,
});

// make reused global data available
provide("locations", data.value.global.locations);
provide("global_cta", data.value.global.headerCta);

// compile meta tags for head
useHead(() => {
  if (!data.value) return {};
  return toHead(data.value.home.seo, data.value.site.favicon);
});

// execute leave animation for each route
router.beforeEach(async (to, from) => {
  /* console.log("exit animation"); */
  // navigate within same route
  /*   if (to.path == from.path) {
    // change posts query

    // bring page back
    setTimeout(() => {
      refreshPage();
    }, 500);
  } */
});

// open site after initial load
onMounted(() => {
  // open page
  openPage(route.fullPath, route.name);

  // check if tab is focused
  window.addEventListener("focus", () => {
    pageInactive.value = false;
  });
  window.addEventListener("blur", () => {
    pageInactive.value = true;
  });
});

// open new page after leave
const refreshPage = () => {
  /* console.log("open animation"); */
};
</script>

<template>
  <NuxtLayout ref="layout" :data="data.global">
    <NuxtPage
      :transition="{
        name: 'custom',
        mode: 'out-in',
        css: false,
        onLeave: (el, done) => {
          done();
        },
        onEnter: () => {
          refreshPage();
        },
      }"
    />
  </NuxtLayout>
</template>

<style scoped></style>
