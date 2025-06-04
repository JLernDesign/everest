<template>
  <span v-if="debug">{{ seoData }}</span>
</template>

<script setup>
const props = defineProps({
  seo: {
    type: Object,
    default: () => ({}),
  },
  debug: {
    type: Boolean,
    default: false,
  },
});

const route = useRoute();
const config = useRuntimeConfig();

const fallback = {
  title: "OpenHome",
  description: "Your Custom Voice AI Assistant",
  image: {
    url: "https://www.datocms-assets.com/136400/1720490598-openhome-share.jpg",
  },
};

const seoData = computed(() => {
  const title = props.seo?.title || fallback.title;
  const description = props.seo?.description || fallback.description;
  const image = props.seo?.image?.url || fallback.image?.url;

  let baseUrl = config.public.BASE_URL || "https://openhome.com/";
  if (baseUrl.endsWith("/")) {
    baseUrl = baseUrl.slice(0, -1);
  }
  const path = route.path;
  const url = `${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`.replace(
    /\/$/,
    ""
  );

  const siteName = "OpenHome";

  return {
    title,
    description,
    image: image.startsWith("http") ? image : `${baseUrl}${image}`,
    url,
    siteName,
  };
});

useHead(() => {
  const { title, description, image, url, siteName } = seoData.value;

  return {
    title,
    meta: [
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      { property: "og:url", content: url },
      { property: "og:site_name", content: siteName },
      { property: "og:locale", content: "en_us" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    link: [{ rel: "canonical", href: url }],
  };
});
</script>
