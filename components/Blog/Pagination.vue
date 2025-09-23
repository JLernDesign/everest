<script setup>
const props = defineProps(["total", "perpage", "update"]);
const route = useRoute();

const page = route.params.page;
const per_page = props.perpage;
const totalPosts = props.total;
const totalPages = Math.ceil(totalPosts / per_page);

const handleClick = (n) => {
  /*   page.value = n;
  props.update(n); */
  navigateTo(`/blog/page/${n}`);
};
</script>

<template>
  <div class="pagination my-[8.5rem] flex justify-center">
    <ul
      class="flex justify-between gap-x-6 font-barlow-cond-semibold [&_button.on]:text-red"
    >
      <li v-for="n in totalPages">
        <button
          @click.prevent="handleClick(n)"
          :class="n == page && 'on'"
          class="hover:text-red"
        >
          {{ n }}
        </button>
      </li>
    </ul>
  </div>
</template>
