<script setup>
const props = defineProps(["data", "num"]);
</script>

<template>
  <button
    class="text-body-sm-mob relative bg-gradient-to-r from-red to-red bg-[length:0%_1px] bg-[position:0%_80%] bg-no-repeat s:text-body-sm"
    :class="num == 0 && 'on'"
  >
    <div
      class="accent absolute -left-[1.3rem] top-0 h-[1rem] w-[1.1rem] -translate-y-[1rem] opacity-0"
    >
      <img src="/public/ui/tri.svg" alt="" />
    </div>
    <span>{{ data }}</span>
  </button>
</template>

<style scoped>
button {
  transition: var(--ease-out);
}
.on {
  color: theme("colors.red");
  background-size: 100% 1px;
  .accent {
    opacity: 1;
  }
}
</style>
