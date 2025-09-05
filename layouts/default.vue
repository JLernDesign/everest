<script setup>
import { menuQuery } from "~/assets/graphql/queries/menu";
import { useElementSize } from "@vueuse/core";

const { locale } = useI18n();

const props = defineProps(["theme", "data"]);
const wrapper = ref(null);
const header = ref(null);
const { width, height } = useElementSize(wrapper);
const theme = useState("theme");
const loaded = ref(false);
const main_menu = ref(null);

// reactive variables
const queryVariables = computed(() => {
  const vars = {
    locale: locale.value,
  };
  return vars;
});

/* fetch menu data */
const { data: menu_data } = await useGraphqlQuery({
  query: menuQuery.loc.source.body,
  variables: queryVariables,
});

/* watch layout shift for scrolltrigger refresh */
watch(height, () => {
  layoutShiftRefresh();
});

onMounted(() => {
  setTimeout(() => {
    loaded.value = true;
  }, 1000);
});
</script>

<template>
  <div class="wrapper overflow-hidden" ref="wrapper">
    <LazyHeader
      v-if="menu_data"
      ref="header"
      :menu="menu_data.menu"
      :data="data"
      :banner="data.topBanner"
    />
    <GlobalBanner :data="data.topBanner" data-datocms-noindex />
    <div class="main-contents"><slot /></div>
    <template v-if="loaded">
      <LazyFooter
        v-if="menu_data"
        :menu="menu_data.menu"
        :data="data"
        data-datocms-noindex
      />
    </template>
    <LazyVideoModal />
    <LazyGateModal />
    <UISiteCover />
  </div>
</template>

<style scoped>
.change {
  position: fixed;
  left: 0;
  top: 0;
}
</style>
