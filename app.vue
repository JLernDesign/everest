<script setup lang="ts">
import gsap from "gsap";
import { print } from "graphql";
import { toHead } from "vue-datocms";
import { settingsQuery } from "~/assets/graphql/queries/settings";
import type { SettingsQueryData } from "~/types/settings";

/* const { locale } = useI18n(); */

const route = useRoute();
const router = useRouter();
const layout = ref(null);

// initial states
const page_title = useState("page_title", () => "index");
const base_url = useState("base_url", () => "https://everest-systems.com");
const theme = useState("theme", () => "light");
const pageInactive = useState("pageInactive", () => false);
const hideHeader = useState("hideHeader", () => false);

// reactive variables
const queryVariables = computed(() => {
  const vars = {
    locale: "en",
  };
  return vars;
});

// get global settings data
const QUERY = print(settingsQuery);
const { data } = await useGraphqlQuery<SettingsQueryData>({
  query: QUERY,
  variables: queryVariables,
});

const settings = data.value as SettingsQueryData | null;
if (!settings) {
  throw new Error("Failed to load settings");
}

// make reused global data available
provide("locations", settings.global.locations);
provide("global_cta", settings.global.headerCta);
provide("investors", settings.global.investors);
provide("gated_content", {
  headline: settings.global.gatedHeadline,
  intro: settings.global.gatedIntro,
  formId: settings.global.gatedFormId,
});
provide("signup_form", settings.global.signupForm);

// set favicon from datocms
useHead(() => toHead(settings.site.favicon));

// execute leave animation for each route
const page_color = useState("page_color", () => "skyblue");
router.beforeEach(async (to, from, next) => {
  // bypass animation if changing video id
  if (to.query.id || from.query.id) {
    next();

    // bypass animation if changing search query
  } else if (to.query.q && from.query.q) {
    next();

    // execute leave animation
  } else {
    const routeName = typeof to.name === "string" ? to.name : "";

    // set page color
    if (
      routeName.includes("about") ||
      routeName.includes("index") ||
      routeName.includes("product")
    ) {
      page_color.value = "bg-skyblue";
    } else if (
      routeName.includes("ai") ||
      routeName.includes("client") ||
      (routeName.includes("case-studies") && !routeName.includes("slug"))
    ) {
      page_color.value = "bg-shadowblue";
    } else {
      page_color.value = "bg-jaffa";
    }

    // set theme
    setTimeout(() => {
      page_color.value == "bg-shadowblue"
        ? (theme.value = "dark")
        : (theme.value = "light");
    }, 500);

    const reveals = document.querySelectorAll(".cover-inner");
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
  }
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
  <NuxtLayout ref="layout" :data="settings.global">
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
