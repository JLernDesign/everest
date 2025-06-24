<script setup>
const props = defineProps([
  "data",
  "loc",
  "parent",
  "close",
  "func",
  "id",
  "group",
]);
let theme = "lt";

const setMenuPhoto = (e) => {
  //console.log(e.target.dataset.photo);
  props.func(e.target.dataset.photo, props.data.title, e.target.dataset.name);
};
</script>

<template>
  <ul
    v-if="data"
    :class="loc == 'mobile' ? 'space-y-4' : 'space-y-[.7rem] pr-12'"
  >
    <!-- Parent -->
    <li
      v-if="data.title != parent"
      class="title whitespace-nowrap leading-normal"
      :class="[
        loc == 'mobile'
          ? 'text-body uppercase text-white'
          : 'text-bodymd text-dkteal',
        loc == 'mobile' && data.type != 'text' ? 'mb-5 opacity-50' : '',
      ]"
    >
      <template v-if="data.type == 'text'">
        <NuxtLink
          :to="data.url"
          @click="loc == 'mobile' && close()"
          @mouseenter="setMenuPhoto"
          class="s:hover:border-dkteal"
          :class="
            loc == 'mobile' ? 'normal-case' : 'border-b-1 border-transparent'
          "
          :data-photo="data.photo"
          >{{ data.title }}</NuxtLink
        >
      </template>
      <template v-else>
        {{ data.title }}
      </template>
    </li>

    <!-- SubLinks -->
    <template v-if="data.items">
      <li v-for="(item, i) in data.items">
        <NuxtLink
          :to="item.url"
          @click="loc == 'mobile' && close()"
          @mouseenter="setMenuPhoto"
          class="s:hover:border-dkteal"
          :class="
            loc == 'mobile'
              ? 'text-body text-white'
              : 'border-b-1 border-transparent text-bodysm text-dkteal'
          "
          :data-photo="item.photo"
          :data-name="item.name"
          >{{ item.name }}</NuxtLink
        >
      </li>
    </template>

    <p
      v-else-if="data.desc"
      class="text-bodysm leading-body text-dkteal"
      :class="loc == 'mobile' && 'hidden'"
    >
      {{ data.desc }}
    </p>
  </ul>
</template>

<style scoped></style>
