<script setup>
import { useElementSize } from "@vueuse/core";

const props = defineProps(["theme"]);
const wrapper = ref(null);
const header = ref(null);
const { width, height } = useElementSize(wrapper);

// update theme on page change
const changePage = () => {
  header.value.setTheme();
};

/* watch layout shift for scrolltrigger refresh */
watch(height, () => {
  //console.log("layout shifted: " + height.value);
  layoutShiftRefresh();
});

defineExpose({
  changePage,
});
</script>

<template>
  <div class="wrapper" ref="wrapper">
    <Header ref="header" :theme="theme" />
    <div class="main-contents"><slot /></div>
    <Footer />
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
