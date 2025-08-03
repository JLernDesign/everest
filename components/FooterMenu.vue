<script setup>
const props = defineProps(["data"]);
let menus,
  n = 0;
const main = ref(null);

onMounted(() => {
  menus = qsa(".submenu", main.value);
});

const toggleMenu = (e) => {
  const id = e.target.dataset.num;
  toggleExpand(id, menus);
};

const handleClick = (e, item) => {
  if (item.submenu) {
    toggleMenu(e);
  } else {
    navigateTo(getUrl(item));
  }
};
</script>

<template>
  <ul
    class="mt-[2rem] w-[28rem] divide-y-1 divide-darkline border-b-1 border-t-1 border-darkline text-body-sm-mob leading-[1] text-white s:text-body-sm [&_button]:!bg-[position:0_100%]"
    ref="main"
  >
    <!-- link -->
    <li v-for="(item, i) in data">
      <button
        class="ul single fast flex h-[4rem] w-full items-center justify-between pl-[.4rem] pr-[1.2rem] [&>*]:pointer-events-none"
        @click="handleClick($event, item)"
        :data-num="item.submenu ? n++ : null"
      >
        <span class="mt-1">{{ item.label }}</span>
        <IconChevron v-if="item.submenu" color="stroke-red" />
      </button>

      <!-- sub menu -->
      <ul
        v-if="item.submenu"
        class="submenu h-0 overflow-hidden pl-[1.2rem] text-body-xsm-mob s:text-body-xsm"
      >
        <span class="block space-y-5 pb-[2.25rem] pt-[1.75rem]">
          <li v-for="subitem in item.submenu">
            <NuxtLink
              :to="getUrl(subitem)"
              :target="subitem.external && '_blank'"
              :class="!subitem.submenu ? 'ul single fast' : null"
              >{{ subitem.label }}</NuxtLink
            >

            <!-- sub sub menu -->
            <ul
              class="mt-5 space-y-5 pl-[1.2rem] text-body-xsm-mob s:text-body-xsm"
              v-if="subitem.submenu"
            >
              <li v-for="subsubitem in subitem.submenu">
                <NuxtLink :to="getUrl(subsubitem)" class="ul single fast">{{
                  subsubitem.label
                }}</NuxtLink>
              </li>
            </ul>
          </li>
        </span>
      </ul>
    </li>
  </ul>
</template>

<style scoped></style>
