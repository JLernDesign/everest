<script setup>
const page_color = useState("page_color");
/* watch(page_color, (newVal) => {
  console.log("page_color:", newVal);
}); */
</script>

<template>
  <div
    id="page-reveal"
    class="cover pointer-events-none fixed left-0 top-0 z-20 hidden h-screen w-screen"
  >
    <div
      v-for="n in 5"
      class="cover-inner h-full w-[20%] origin-bottom"
      :class="page_color"
    ></div>
  </div>
</template>

<style scoped></style>
