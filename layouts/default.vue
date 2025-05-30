<script setup>
import { useElementSize } from "@vueuse/core";

const props = defineProps(["theme"]);
const wrapper = ref(null);
const header = ref(null);
const { width, height } = useElementSize(wrapper);
const theme = useState("theme");

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
    <Header ref="header" />
    <div class="main-contents overflow-hidden"><slot /></div>
    <Footer />
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
