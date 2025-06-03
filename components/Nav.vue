<script setup>
import MenuQuery from "~/assets/graphql/menu.graphql";

const props = defineProps(["type", "close_func"]);
const route = useRoute();
const activePage = ref("");

const QUERY = MenuQuery.loc.source.body;
const { data } = await useGraphqlQuery({
  query: QUERY,
});
const main_menu = data.value.menu.main;
console.log(toRaw(main_menu));
const menu = [{ subMenu: true }, 0, 0, 0];

const setActive = () => {
  activePage.value = "";
};
onMounted(() => {
  setActive();
});

const getUrl = (obj) => {
  if (obj.external) {
    return obj.external;
  }
  if (obj.internal) {
    if (obj.internal.title == "Home") {
      return "/";
    } else {
      return obj.internal.slug;
    }
  }
};

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
      <template v-for="(item, i) in main_menu">
        <MenuItem
          :data="{ title: item.label, url: getUrl(item) }"
          :type="props.type"
          :active="activePage"
          :submenu="i == 0 ? true : false"
          :close_func="close_func"
        />
      </template>
    </ul>
  </nav>
</template>

<style scoped></style>
