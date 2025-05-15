<script setup>
import gsap from 'gsap';
import { toHead } from 'vue-datocms';

const route = useRoute();
const router = useRouter();
const layout = ref(null);

// initial states
const page_title = useState('page_title', () => 'index');
const base_url = useState('base_url', () => 'https://everest.com');
//const first_view = useState('first_view', () => true);

// init global meta data
const QUERY = /* GraphQL */ `
  query {
    site: _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
      globalSeo {
        fallbackSeo {
          title
          description
        }
      }
    }
    home {
      headline
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
`;
const { data } = await useGraphqlQuery({ query: QUERY });

// compile meta tags for head
useHead(() => {
  if (!data.value) return {};
  return toHead(data.value.home.seo, data.value.site.favicon);
});

// execute leave animation for each route
router.beforeEach(async (to, from) => {
  first_view.value = false;
  freezePage('.page-change');

  // navigate within same route
  if (to.path == from.path) {
    // change posts query

    // bring page back
    setTimeout(() => {
      refreshPage();
    }, 500);
  }
});

// open site after initial load
onMounted(() => {
  setTimeout(function () {
    openPage(route.fullPath, route.name);
  }, 300);
});

// open new page after leave
const refreshPage = () => {
  window.scrollTo(0, 0);
  const reveal = document.getElementById('page-reveal');
  gsap.set(reveal, { opacity: 1 });

  setTimeout(() => {
    const page_title = useState('page_title');
    page_title.value = route.name;
    unfreezePage('.page-change');

    // page soft reveal
    gsap.to(reveal, {
      duration: 0.5,
      opacity: 0,
      ease: 'power3.out',
    });

    // update layout theme
    layout.value.layoutRef.changePage();
  }, 200);
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
