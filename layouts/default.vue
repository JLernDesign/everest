<script setup>
import { menuQuery } from "~/assets/graphql/queries/menu";
import { useElementSize } from "@vueuse/core";
const loaded = ref(false);

const props = defineProps(["theme", "data"]);
const wrapper = ref(null);
const header = ref(null);
const { width, height } = useElementSize(wrapper);
const theme = useState("theme");

/* fetch menu data */
const { data: menu_data } = await useGraphqlQuery({
  query: menuQuery.loc.source.body,
});
const main_menu = menu_data.value.menu;
/* console.log(main_menu); */

/* watch layout shift for scrolltrigger refresh */
watch(height, () => {
  //console.log("layout shifted: " + height.value);
  layoutShiftRefresh();
});

onMounted(() => {
  setTimeout(() => {
    loaded.value = true;
  }, 200);
});
</script>

<template>
  <div class="wrapper" ref="wrapper">
    <LazyHeader
      v-if="loaded"
      class="transition-opacity duration-500"
      :class="loaded ? 'opacity-100' : 'opacity-0'"
      ref="header"
      :menu="main_menu"
      :data="data"
    />
    <div class="main-contents overflow-hidden"><slot /></div>
    <LazyFooter :menu="main_menu" :data="data" />
    <LazyVideoModal />
    <Cookies />
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
