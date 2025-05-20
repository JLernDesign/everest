<script setup>
let menus;
const main = ref(null);

onMounted(() => {
  menus = qsa('.submenu', main.value);
});

const toggleMenu = (e) => {
  const id = e.target.dataset.num;
  toggleExpand(id, menus);
};
</script>

<template>
  <ul
    class="text-white text-body-sm leading-[1] w-[28rem] divide-y-1 divide-darkline border-t-1 border-b-1 border-darkline mt-[2rem]"
    ref="main"
  >
    <!-- link -->
    <li v-for="n in 4">
      <button
        class="flex items-center justify-between w-full h-[4rem] pl-[.4rem] pr-[1.2rem] [&>*]:pointer-events-none"
        @click="toggleMenu"
        :data-num="n - 1"
      >
        <span class="mt-1">Why Everest</span>
        <IconChevron color="stroke-red" />
      </button>

      <!-- sub menu -->
      <ul class="submenu pl-[1.2rem] text-body-xsm h-0 overflow-hidden">
        <span class="pt-[1.75rem] pb-[2.25rem] space-y-5 block">
          <li v-for="n in 3">
            <NuxtLink to="/">Everest vs. Legacy ERP</NuxtLink>
          </li>
        </span>
      </ul>
    </li>
  </ul>
</template>

<style scoped></style>
