<script setup>
import { menuQuery } from "~/assets/graphql/queries/menu";
import { useElementSize } from "@vueuse/core";

const props = defineProps(["theme"]);
const wrapper = ref(null);
const header = ref(null);
const { width, height } = useElementSize(wrapper);
const theme = useState("theme");

/* fetch menu data */
const { data } = await useGraphqlQuery({
  query: menuQuery.loc.source.body,
});
const main_menu = data.value.menu;
/* console.log(main_menu); */

/* watch theme for change */
watch(theme, () => {
  //console.log("layout shifted: " + height.value);
  console.log("theme changed");
  console.log(theme.value);
});

/* watch layout shift for scrolltrigger refresh */
watch(height, () => {
  //console.log("layout shifted: " + height.value);
  layoutShiftRefresh();
});
</script>

<template>
  <div class="wrapper" ref="wrapper">
    <Header ref="header" :menu="main_menu" />
    <div class="main-contents overflow-hidden"><slot /></div>
    <Footer :menu="main_menu" />
    <VideoModal />
    <UISiteCover />
  </div>

  <!-- guide line -->
  <!-- <div
    class="fixed left-1/2 top-0 z-10 h-screen w-0 border-l border-l-red opacity-20"
  ></div> -->
</template>

<style scoped>
.change {
  position: fixed;
  left: 0;
  top: 0;
}
</style>
