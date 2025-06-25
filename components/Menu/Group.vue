<script setup>
const props = defineProps(["data", "close"]);
const items = computed(() => {
  return props.data.filter((item) => item.label);
});
</script>

<template>
  <ul class="pt-3">
    <!-- SubLinks -->
    <template v-if="data">
      <li v-for="(item, i) in items">
        <NuxtLink
          v-if="item.label"
          :to="getUrl(item)"
          @click="close"
          class="block border-t-1 border-grayline px-side-mob py-5 text-body-sm-mob leading-sm"
          :class="i == items.length - 1 && 'pb-1'"
          ><span class="inline-block pt-1">{{ item.label }}</span></NuxtLink
        >
      </li>
    </template>
  </ul>
</template>

<style scoped></style>
