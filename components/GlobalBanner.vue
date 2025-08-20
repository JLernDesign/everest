<script setup>
const mobile = breakpoints.smallerOrEqual("tablet1");
const props = defineProps(["data"]);
console.log(props.data);
</script>

<template>
  <div
    class="global-banner absolute left-0 top-0 z-20 h-[3.6rem] w-full bg-shadowblue text-body-xsm text-white [&_a:hover]:text-red [&_a]:underline"
  >
    <div
      class="ticker-wrap flex h-full items-center"
      :class="mobile && 'on gap-6'"
      ref="main"
    >
      <div
        v-for="n in 2"
        class="ticker-group flex shrink-0 items-center s:w-full s:justify-center"
        :class="n == 2 && 'block s:hidden'"
        v-html="data"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.ticker-wrap.on .ticker-group {
  animation: ticker 30s linear infinite;
}
</style>
