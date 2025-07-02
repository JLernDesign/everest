<script setup>
const props = defineProps(["data"]);

let menus;
const main = ref(null);

onMounted(() => {
  menus = qsa(".submenu", main.value);
});

const toggleMenu = (e) => {
  const id = e.target.dataset.num;
  toggleExpand(id, menus);
};
</script>

<template>
  <ul
    class="mt-[2rem] w-[28rem] divide-y-1 divide-darkline border-b-1 border-t-1 border-darkline text-body-sm-mob leading-[1] text-white s:text-body-sm"
    ref="main"
  >
    <!-- link -->
    <li v-for="(item, i) in data">
      <button
        class="flex h-[4rem] w-full items-center justify-between pl-[.4rem] pr-[1.2rem] [&>*]:pointer-events-none"
        @click="toggleMenu"
        :data-num="i"
      >
        <span class="mt-1">{{ item.label }}</span>
        <IconChevron color="stroke-red" />
      </button>

      <!-- sub menu -->
      <ul
        class="submenu h-0 overflow-hidden pl-[1.2rem] text-body-xsm-mob s:text-body-xsm"
      >
        <span class="block space-y-5 pb-[2.25rem] pt-[1.75rem]">
          <li v-for="subitem in item.submenu">
            <NuxtLink
              :to="getUrl(subitem)"
              :target="subitem.external && '_blank'"
              >{{ subitem.label }}</NuxtLink
            >
          </li>
        </span>
      </ul>
    </li>
  </ul>
</template>

<style scoped></style>
