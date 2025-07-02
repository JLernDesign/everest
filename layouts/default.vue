<script setup>
import { menuQuery } from "~/assets/graphql/queries/menu";
import { useElementSize } from "@vueuse/core";

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
</script>

<template>
  <div class="wrapper" ref="wrapper">
    <Header ref="header" :menu="main_menu" :data="data" />
    <div class="main-contents overflow-hidden"><slot /></div>
    <Footer :menu="main_menu" :data="data" />
    <VideoModal />
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
