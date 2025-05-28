<script setup>
import gsap from "gsap";
const props = defineProps(["data"]);
const open = ref(false);

onMounted(() => {});
onUnmounted(() => {});

const openItem = () => {
  open.value = true;
};

defineExpose({ openItem });
</script>

<template>
  <div
    class="relative cursor-pointer rounded-base transition-all duration-300"
    :class="open && 'bg-white shadow-[4px_4px_20px_0px_rgba(0,0,0,0.03)]'"
  >
    <!-- title -->
    <div
      class="title flex w-full items-center justify-between border-b-1 border-b-grayline px-side py-[2.8rem]"
    >
      <h3 class="w-[35%]">{{ data.name }}</h3>
      <p class="w-[45%] text-body-xsm leading-sm">{{ data.title }}</p>
      <p class="w-[20%] text-body-xsm leading-sm">{{ data.industry }}</p>
    </div>

    <!-- photo/quote -->
    <div class="item overflow-hidden" :class="open ? 'h-auto' : 'h-0'">
      <div class="flex w-full items-start justify-between p-side">
        <div class="w-[35%] shrink-0">
          <img
            :src="data.image"
            alt=""
            class="w-[23.4rem] overflow-hidden rounded-sm"
          />
        </div>
        <div class="w-auto text-body-sm leading-sm">
          <blockquote>“{{ data.quote }}”</blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
