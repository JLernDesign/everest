<script setup>
const props = defineProps(["data", "num", "active"]);
const route = useRoute();

const isActive = computed(() => {
  let active = false;

  // links to a page
  if (props.data.slug != undefined) {
    if (route.params.slug == (props.data.slug || props.data.tag?.slug)) {
      active = true;
    }
  }

  // link changes content
  else {
    if (props.num == props.active) {
      active = true;
    }
  }
  return active;
});
</script>

<template>
  <button
    class="relative bg-gradient-to-r from-red to-red bg-[length:0%_1px] bg-[position:0%_80%] bg-no-repeat text-body-sm-mob hover:text-red s:text-body-sm"
    :class="isActive ? 'on' : ''"
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
