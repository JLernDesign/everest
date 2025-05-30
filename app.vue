<script setup>
import gsap from "gsap";
import { toHead } from "vue-datocms";
import SettingsQuery from "~/assets/graphql/settings.graphql";

const route = useRoute();
const router = useRouter();
const layout = ref(null);

// initial states
const page_title = useState("page_title", () => "index");
const base_url = useState("base_url", () => "https://everest.com");
const theme = useState("theme", () => "light");

// init global meta data
const QUERY = SettingsQuery.loc.source.body;
const { data } = await useGraphqlQuery({
  query: QUERY,
});
//console.log(data.value);

// compile meta tags for head
useHead(() => {
  if (!data.value) return {};
  return toHead(data.value.home.seo, data.value.site.favicon);
});

// execute leave animation for each route
router.beforeEach(async (to, from) => {
  console.log("exit animation");

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
  setTimeout(function () {
    openPage(route.fullPath, route.name);
  }, 300);
});

// open new page after leave
const refreshPage = () => {
  console.log("open animation");
};
</script>

<template>
  <NuxtLayout ref="layout">
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
