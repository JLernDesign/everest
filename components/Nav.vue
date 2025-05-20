<script setup>
const props = defineProps(['type', 'close_func']);
const route = useRoute();
const activePage = ref('');

// Dato CMS Query
const QUERY = /* GraphQL */ `
  query {
    global {
      mainMenu {
        title
        url
        target
        subMenu {
          menuType
          menu {
            title
            url
            target
            icon {
              icon
              bgcolor
            }
          }
        }
      }
    }
  }
`;
/* const { data, error } = await useGraphqlQuery({ query: QUERY });
const menu = toRaw(data.value).global.mainMenu; */
const menu = [{ subMenu: true }, 0, 0, 0];

const setActive = () => {
  activePage.value = '';
};
onMounted(() => {
  setActive();
});

// watch for page change to update nav
const page_title = useState('page_title');
watch(page_title, () => {
  setActive();
});
</script>

<template>
  <nav :class="type">
    <ul
      :class="props.type == 'main' ? 'main-nav flex space-x-nav' : 'mobile-nav'"
    >
      <template v-for="(item, i) in menu">
        <MenuItem
          :data="{ title: 'Why Everest', url: '#' }"
          :type="props.type"
          :active="activePage"
          :submenu="item.subMenu ? true : false"
          :close_func="close_func"
        />
      </template>
    </ul>
  </nav>
</template>

<style scoped></style>
