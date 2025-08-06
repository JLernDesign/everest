<script setup>
const props = defineProps(["type", "data", "close_func"]);
const route = useRoute();
const activePage = ref("");

// watch for page change to update nav
watch(
  () => route.path,
  () => {
    setActive();
  },
);
const setActive = () => {
  let parent = route.path.split("/")[1];

  switch (parent) {
    case "product":
      activePage.value = "Products";
      break;
    case "why":
      activePage.value = "Why Everest";
      break;
    case "client-success":
      activePage.value = "Customers";
      break;
    case "blog":
      activePage.value = "Learn";
      break;
    case "media":
      activePage.value = "Learn";
      break;
    case "about":
      activePage.value = "About";
      break;
    case "news":
      activePage.value = "About";
      break;

    default:
      activePage.value = "";
  }
};

onMounted(() => {
  // set active page
  setActive();

  // preload hidden menu images
  preloadImg("/ui/menu-texture@2x.webp");
});
</script>

<template>
  <nav :class="type">
    <ul
      :class="props.type == 'main' ? 'main-nav flex space-x-nav' : 'mobile-nav'"
    >
      <MenuItem
        v-for="(item, i) in props.data"
        :key="item.label"
        :data="item"
        :type="props.type"
        :submenu="item.submenu ? true : false"
        :active="activePage"
        :close_func="close_func"
      />
    </ul>
  </nav>
</template>

<style scoped></style>
