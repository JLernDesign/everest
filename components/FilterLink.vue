<script setup>
const props = defineProps(["data"]);
console.log(props.data);

const route = useRoute();

const isActive = (item) => {
  let active = false;
  if (item.slug == route.params.cat) {
    active = true;
  }
  return active;
};

const handleClick = () => {
  navigateTo(`/blog/category/${props.data.slug}`);
};
</script>

<template>
  <li>
    <button
      class="relative inline-block w-full px-6 py-5 text-left text-body-sm-mob leading-base hover:text-red"
      :class="isActive(data) ? 'on text-red' : ''"
      @click="handleClick"
    >
      <span>{{ data.name }}</span>
    </button>
  </li>
</template>

<style scoped></style>
