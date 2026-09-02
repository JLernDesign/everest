<script setup lang="ts">
import { menuQuery } from "~/assets/graphql/queries/menu";
import { useElementSize } from "@vueuse/core";
import { print } from "graphql";
import type { MenuQueryData } from "~/types/menu";

/* const { locale } = useI18n(); */

const props = defineProps(["theme", "data"]);
const wrapper = ref(null);
const header = ref(null);
const { width, height } = useElementSize(wrapper);
const theme = useState("theme");
const loaded = ref(false);
const main_menu = ref(null);

// configure top banner
const banner = useState("banner", () => props.data.topBanner.showBanner);

// reactive variables
const queryVariables = computed(() => {
  const vars = {
    locale: "en",
  };
  return vars;
});

/* fetch menu data */
const { data: menu_data_raw } = await useGraphqlQuery<MenuQueryData>({
  query: print(menuQuery),
  variables: queryVariables,
});

const menu_data = menu_data_raw.value as MenuQueryData | null;
if (!menu_data) {
  throw new Error("Failed to load menu");
}

/* watch layout shift for scrolltrigger refresh */
watch(height, () => {
  layoutShiftRefresh();
});

onMounted(() => {
  // set banner gap
  const root = document.documentElement as HTMLElement;
  if (banner.value) {
    root.style.setProperty("--banner-gap", "3.6rem");
  } else {
    root.style.setProperty("--banner-gap", "0");
  }

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
    <GlobalBanner v-if="banner" :data="data.topBanner" data-datocms-noindex />
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
