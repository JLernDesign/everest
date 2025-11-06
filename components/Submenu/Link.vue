<script setup>
const props = defineProps(["data"]);
const route = useRoute();
const isActive = (item) => {
  let path = route.path;
  if (path.endsWith("/")) {
    path = path.slice(0, -1);
  }
  let link = getUrl(item);
  return path == link;
};
</script>

<template>
  <li class="has-ul relative px-10 py-8 pb-7">
    <!-- menu item -->
    <template v-if="data.__typename == 'MenuItemRecord'">
      <span
        class="ul menu-link mb-[.4rem] inline-block font-helvb leading-[1] after:bg-red"
        :class="isActive(data) ? 'nuxt-link-active' : ''"
        >{{ data.label }}</span
      >
      <span class="block opacity-[.65]">{{ data.description }}</span>

      <NuxtLink
        :to="getUrl(data) + addUtm(route, data.external)"
        :target="data.external ? '_blank' : null"
        class="absolute left-0 top-0 z-1 h-full w-full"
      ></NuxtLink>
    </template>

    <!-- menu group -->
    <template v-else>
      <span
        class="inline-block font-helvb leading-[1]"
        :class="data.description && 'mb-[.4rem]'"
        >{{ data.label }}</span
      >
      <span v-if="data.description" class="block">{{ data.description }}</span>

      <ul class="mt-6 space-y-6 pb-8">
        <li v-for="(item, i) in data.submenu" class="has-ul">
          <NuxtLink
            :to="getUrl(item) + addUtm(route, item.external)"
            :target="item.external ? '_blank' : null"
            class="ul menu-link after:bg-red"
            :class="isActive(item) ? 'nuxt-link-active' : ''"
            >{{ item.label }}</NuxtLink
          >
        </li>
      </ul>
    </template>
  </li>
</template>

<style scoped></style>
