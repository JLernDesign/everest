<script setup>
const props = defineProps(["data", "close", "level"]);
const items = computed(() => {
  return props.data.filter((item) => item.label);
});
</script>

<template>
  <ul :class="level != 'subsub' ? 'pt-3' : ''">
    <!-- SubLinks -->
    <template v-if="data">
      <li v-for="(item, i) in items">
        <!-- menu item -->
        <template v-if="item.__typename == 'MenuItemRecord'">
          <NuxtLink
            v-if="item.label"
            :to="getUrl(item)"
            @click="close"
            class="block border-t-1 border-grayline px-side-mob py-5 text-body-sm-mob leading-sm"
            :class="[
              i == items.length - 1 && 'pb-1',
              level == 'subsub' && 'pl-[5rem]',
            ]"
            ><span class="inline-block pt-1">{{ item.label }}</span></NuxtLink
          >
        </template>

        <!-- submenu -->
        <template v-if="item.__typename == 'MenuGroupRecord'">
          <li
            class="block border-t-1 border-grayline px-side-mob py-5 text-body-sm-mob leading-sm"
          >
            {{ item.label }}
          </li>
          <MenuGroup :data="item.submenu" :close="close" level="subsub" />
        </template>
      </li>
    </template>
  </ul>
</template>

<style scoped></style>
