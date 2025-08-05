<script setup>
import { menuQuery } from "~/assets/graphql/queries/menu";
import { useElementSize } from "@vueuse/core";

const props = defineProps(["theme", "data"]);
const wrapper = ref(null);
const header = ref(null);
const { width, height } = useElementSize(wrapper);
const theme = useState("theme");
const loaded = ref(false);

/* fetch menu data */
const { data: menu_data } = await useGraphqlQuery({
  query: menuQuery.loc.source.body,
});
const main_menu = menu_data.value.menu;
/* console.log(main_menu); */

/* watch layout shift for scrolltrigger refresh */
watch(height, () => {
  layoutShiftRefresh();
});

onMounted(() => {
  setTimeout(() => {
    loaded.value = true;
  }, 1000);
});
</script>

<template>
  <div class="wrapper overflow-hidden" ref="wrapper">
    <LazyHeader ref="header" :menu="main_menu" :data="data" />
    <div class="main-contents"><slot /></div>
    <template v-if="loaded">
      <LazyFooter :menu="main_menu" :data="data" />
      <LazyVideoModal />
    </template>
    <UISiteCover />
  </div>
</template>

<style scoped>
.change {
  position: fixed;
  left: 0;
  top: 0;
}
</style>
