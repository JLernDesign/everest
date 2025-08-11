<script setup>
import { toHead } from "vue-datocms";
const props = defineProps(["data", "title", "image"]);

// compile meta tags for head
useHead(() => {
  if (!props.data) return {};
  let seo = toHead(props.data);

  // append site name to title
  if (!props.title) {
    seo.title = `Everest Systems | ${seo.title}`;
  }

  // overrides for title and image
  if (props.title) {
    seo.title = props.title;
    const og_title = seo.meta.find((meta) => meta.property === "og:title");
    if (og_title) {
      og_title.content = props.title;
    }
    const twitter_title = seo.meta.find(
      (meta) => meta.name === "twitter:title",
    );
    if (twitter_title) {
      twitter_title.content = props.title;
    }
  }
  if (props.image) {
    const og_image = seo.meta.find((meta) => meta.property === "og:image");
    if (og_image) {
      og_image.content = props.image;
    }
    const twitter_image = seo.meta.find(
      (meta) => meta.name === "twitter:image",
    );
    if (twitter_image) {
      twitter_image.content = props.image;
    }
  }

  return seo;
});
</script>
