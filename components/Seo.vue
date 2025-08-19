<script setup>
import { toHead } from "vue-datocms";
const props = defineProps(["data", "title", "image"]);

// compile meta tags for head
useHead(() => {
  if (!props.data) return {};
  let seo = toHead(props.data);

  // find og and twitter title to replace
  const og_title = seo.meta.find((meta) => meta.property === "og:title");
  const twitter_title = seo.meta.find((meta) => meta.name === "twitter:title");

  // append site name to title if not provided
  if (!props.title) {
    let title = `Everest Systems | ${seo.title}`;
    seo.title = title;
    og_title && (og_title.content = title);
    twitter_title && (twitter_title.content = title);
  }

  // override for title
  if (props.title) {
    seo.title = props.title;
    og_title && (og_title.content = props.title);
    twitter_title && (twitter_title.content = props.title);
  }

  // override for description
  /*   if (props.description) {
    const desc = createExcerpt(props.description, 20);

    const description = seo.meta.find((meta) => meta.name === "description");
    const og_description = seo.meta.find(
      (meta) => meta.property === "og:description",
    );
    const twitter_description = seo.meta.find(
      (meta) => meta.name === "twitter:description",
    );

    description && (description.content = desc);
    og_description && (og_description.content = desc);
    twitter_description && (twitter_description.content = desc);
  } */

  // override for image
  if (props.image) {
    const og_image = seo.meta.find((meta) => meta.property === "og:image");
    const twitter_image = seo.meta.find(
      (meta) => meta.name === "twitter:image",
    );

    og_image && (og_image.content = props.image);
    twitter_image && (twitter_image.content = props.image);
  }

  return seo;
});
</script>
