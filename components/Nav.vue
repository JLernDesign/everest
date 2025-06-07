<script setup>
const props = defineProps(["type", "data", "close_func"]);
const route = useRoute();
const activePage = ref("");

const setActive = () => {
  activePage.value = "";
};
onMounted(() => {
  setActive();

  // preload hidden menu images
  preloadImg("/ui/menu-texture@2x.webp");
});

// watch for page change to update nav
const page_title = useState("page_title");
watch(page_title, () => {
  setActive();
});
</script>

<template>
  <nav :class="type">
    <ul
      :class="props.type == 'main' ? 'main-nav flex space-x-nav' : 'mobile-nav'"
    >
      <template v-for="(item, i) in props.data">
        <MenuItem
          :data="item"
          :type="props.type"
          :active="activePage"
          :submenu="item.submenu ? true : false"
          :close_func="close_func"
        />
      </template>
    </ul>
  </nav>
</template>

<style scoped></style>
