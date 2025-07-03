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
      class="title flex w-full flex-col border-b-1 border-b-grayline px-side-mob pb-[2rem] pt-[2.6rem] s:flex-row s:items-center s:justify-between s:px-[3rem] max-s:space-y-2"
    >
      <h3 class="s:w-[40%] max-s:mb-3">{{ data.name }}</h3>
      <p class="text-body-xsm-mob leading-sm s:w-[45%] s:text-body-xsm">
        {{ data.title }}
      </p>
      <a
        :href="data.linkedin"
        target="_blank"
        class="-mt-2 max-s:absolute max-s:right-[2rem] max-s:top-[2rem]"
      >
        <SocialLinkedin class="fill-red" />
      </a>
    </div>

    <!-- photo/quote -->
    <div
      class="item overflow-hidden transition-all duration-300"
      :class="open ? 'h-auto' : 'h-0'"
    >
      <div class="w-full p-side-mob s:space-y-[3rem] s:p-[3rem] s:pr-[15rem]">
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
          v-if="data.bio"
          class="w-auto text-body-sm-mob leading-sm s:text-body-sm max-s:mt-12"
        >
          <span v-html="formatText(data.bio)"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
