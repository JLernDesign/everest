<script setup>
const props = defineProps(["data"]);
const route = useRoute();
</script>

<template>
  <button
    class="relative bg-gradient-to-r from-red to-red bg-[length:0%_1px] bg-[position:0%_80%] bg-no-repeat text-body-sm-mob hover:text-red s:text-body-sm"
    :class="[
      route.params.slug == data.slug && 'on',
      route.params.slug == data.tag?.slug && 'on',
    ]"
  >
    <div
      class="accent absolute -top-2 left-0 hidden h-[1rem] w-[1.1rem] -translate-y-[1rem] opacity-0 s:block"
    >
      <img src="/public/ui/tri.svg" alt="" />
    </div>
    <span>{{ data.title }}</span>
  </button>
</template>

<style scoped>
button {
  transition: var(--ease-out);
}
.on {
  color: theme("colors.red");
}
@media (min-width: 650px) {
  .on {
    background-size: 100% 1px;
    .accent {
      opacity: 1;
    }
  }
}
</style>
