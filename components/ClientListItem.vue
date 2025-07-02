<script setup>
import gsap from "gsap";
import { Image as DatocmsImage } from "vue-datocms";
const props = defineProps(["data"]);
const open = ref(false);

onMounted(() => {});
onUnmounted(() => {});

const openItem = () => {
  open.value = true;
};

defineExpose({ openItem, open });
</script>

<template>
  <div
    class="relative rounded-base-mob transition-all duration-500 s:rounded-base"
    :class="open && 'bg-white shadow-[4px_4px_20px_0px_rgba(0,0,0,0.03)]'"
  >
    <!-- title -->
    <div
      class="title flex w-full flex-col border-b-1 border-b-grayline px-side-mob pb-[2rem] pt-[2.6rem] s:flex-row s:items-center s:justify-between s:px-side max-s:space-y-2"
    >
      <h3 class="s:w-[35%] max-s:mb-3">{{ data.name }}</h3>
      <p class="text-body-xsm-mob leading-sm s:w-[45%] s:text-body-xsm">
        {{ data.title }}
      </p>
      <p class="text-body-xsm-mob leading-sm s:w-[20%] s:text-body-xsm">
        {{ data.industry }}
      </p>
    </div>

    <!-- photo/quote -->
    <div
      class="item overflow-hidden transition-all duration-300"
      :class="open ? 'h-auto' : 'h-0'"
    >
      <div
        class="flex w-full flex-col items-start justify-between p-side-mob s:flex-row s:p-side"
      >
        <div class="shrink-0 s:w-[35%]">
          <div
            class="w-[23.4rem] overflow-hidden rounded-base-mob s:rounded-base"
          >
            <DatocmsImage
              v-if="data.image"
              :data="data.image.responsiveImage"
            />
          </div>
        </div>
        <div
          v-if="data.quote"
          class="w-auto text-body-sm-mob leading-sm s:text-body-sm max-s:mt-12"
        >
          <blockquote>“{{ data.quote }}”</blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
