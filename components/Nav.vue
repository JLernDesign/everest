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

// menu ids from DatoCMS
const menuIds = {
  product: "ZpWZSBQDQti1xbn9l2cD_Q",
  why: "PFK4MTMsSGyvr0kIIbiuWg",
  "case-studies": "UkJXviS7Rj2Bs3jeHzblJQ",
  "client-success": "b7WnWKIVS3ylsgg5EFTu3g",
  learn: "Sfyg47Z5TnamVqzdpjtZzw",
  about: "QD9iJU7KSeaA_II0VbKWZw",
};

const setActive = () => {
  let parent = route.path.split("/")[1];
  ["media", "blog", "video"].includes(parent) && (parent = "learn");
  ["news"].includes(parent) && (parent = "about");
  activePage.value = menuIds[parent];
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
