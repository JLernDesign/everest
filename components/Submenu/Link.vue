<script setup>
const props = defineProps(["data"]);
const route = useRoute();
const link = getUrl(props.data);
</script>

<template>
  <li class="has-ul relative px-10 py-8 pb-7">
    <!-- menu item -->
    <template v-if="data.__typename == 'MenuItemRecord'">
      <span
        class="ul mb-[.4rem] inline-block font-helvb leading-[1] after:bg-red"
        :class="route.path == link ? 'nuxt-link-active' : ''"
        >{{ data.label }}</span
      >
      <span class="block opacity-50">{{ data.description }}</span>

      <NuxtLink
        :to="link"
        :target="data.external ? '_blank' : null"
        class="absolute left-0 top-0 z-1 h-full w-full"
      ></NuxtLink>
    </template>

    <!-- menu group -->
    <template v-else>
      <span class="mb-[.4rem] inline-block font-helvb leading-[1]">{{
        data.label
      }}</span>
      <span v-if="data.description" class="block">{{ data.description }}</span>

      <ul class="mt-8 space-y-6 pb-8">
        <li v-for="(item, i) in data.submenu" class="has-ul">
          <NuxtLink
            :to="getUrl(item)"
            :target="item.external ? '_blank' : null"
            class="ul after:bg-red"
            >{{ item.label }}</NuxtLink
          >
        </li>
      </ul>
    </template>
  </li>
</template>

<style scoped></style>
