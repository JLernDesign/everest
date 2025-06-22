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

defineExpose({ openItem });
</script>

<template>
  <div
    class="rounded-base-mob relative cursor-pointer transition-all duration-300 s:rounded-base"
    :class="open && 'bg-white shadow-[4px_4px_20px_0px_rgba(0,0,0,0.03)]'"
  >
    <!-- title -->
    <div
      class="title flex w-full items-center justify-between border-b-1 border-b-grayline px-side pb-[2rem] pt-[2.6rem]"
    >
      <h3 class="w-[35%]">{{ data.name }}</h3>
      <p class="text-body-xsm-mob w-[45%] leading-sm s:text-body-xsm">
        {{ data.title }}
      </p>
      <p class="text-body-xsm-mob w-[20%] leading-sm s:text-body-xsm">
        {{ data.industry }}
      </p>
    </div>

    <!-- photo/quote -->
    <div class="item overflow-hidden" :class="open ? 'h-auto' : 'h-0'">
      <div
        class="flex w-full items-start justify-between p-side-mob pb-[5rem] s:p-side s:p-side-mob"
      >
        <div class="w-[35%] shrink-0">
          <div class="w-[23.4rem] overflow-hidden rounded-sm">
            <DatocmsImage
              v-if="data.image"
              :data="data.image.responsiveImage"
            />
          </div>
        </div>
        <div class="w-auto text-body-sm-mob leading-sm s:text-body-sm">
          <blockquote>“{{ data.quote }}”</blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
