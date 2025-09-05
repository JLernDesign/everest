<script setup>
const props = defineProps(["data"]);

const main = ref(null);

onMounted(() => {
  toggleOn(main.value, 0, 500);
});
</script>

<template>
  <div
    class="section-wrap mx-auto max-w-[115.5rem] pb-[8rem] pt-12 s:pb-[11rem] s:pt-[10rem]"
    ref="main"
  >
    <ClientListItem :data="data" :autoOpen="true" loc="products" />
  </div>
</template>
