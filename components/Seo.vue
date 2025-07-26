<script setup>
import { toHead } from "vue-datocms";
const props = defineProps(["data"]);

// compile meta tags for head
useHead(() => {
  if (!props.data) return {};
  let seo = toHead(props.data);

  // append site name to title
  seo.title = `Everest Systems | ${seo.title}`;
  return seo;
});
</script>
