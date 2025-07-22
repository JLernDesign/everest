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
const page_color = useState("page_color", () => "skyblue");
router.beforeEach(async (to, from, next) => {
  console.log("to:", to);
  if (
    to.name.includes("about") ||
    to.name.includes("index") ||
    to.name.includes("product")
  ) {
    page_color.value = "bg-skyblue";
  }
  if (
    to.name.includes("why") ||
    to.name.includes("demo") ||
    to.name.includes("blog") ||
    to.name.includes("media") ||
    to.name.includes("legal")
  ) {
    page_color.value = "bg-jaffa";
  }
  if (to.name.includes("ai") || to.name.includes("client")) {
    page_color.value = "bg-shadowblue";
  }
  /* console.log("page_color:", page_color.value); */

  const reveals = document.querySelectorAll(".cover-inner");
  console.log(reveals);
  gsap.set("#page-reveal", { display: "flex", opacity: 1 });
  gsap.fromTo(
    reveals,
    { opacity: 1, scaleY: 0, display: "block" },
    {
      duration: 0.75,
      opacity: 1,
      scaleY: 1,
      stagger: 0.05,
      ease: "power3.inOut",
    },
  );

  // delay until animation is complete
  await new Promise((resolve) => setTimeout(resolve, 750));
  next();
});

// open site after initial load
onMounted(() => {
  // open page
  //openPage(route.fullPath, route.name);

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
  window.scrollTo(0, 0);

  gsap.to("#page-reveal", {
    duration: 0.5,
    opacity: 0,
    display: "none",
    ease: "none",
  });
};
</script>

<template>
  <NuxtLayout ref="layout" :data="data.global">
    <NuxtPage
      :transition="{
        name: 'custom',
        mode: 'out-in',
        css: false,
        onEnter: () => {
          refreshPage();
        },
      }"
    />
  </NuxtLayout>
</template>

<style scoped></style>
