<script setup>
const props = defineProps(["data", "type"]);

const route = useRoute();
const image = ref(null);
const vimeoData = ref(null);

/* get video data from Vimeo API if no data from CMS */
if (props.data.__typename == "MediaPostRecord") {
  vimeoData.value = await useVimeoData(props.data);
}

const isVideo = computed(() => {
  return props.data.media?.video?.file || props.data.media?.video?.external;
});

const hoverOn = () => {
  if (isTouchDevice()) return;
  image.value?.hoverOn();
};

const hoverOff = () => {
  if (isTouchDevice()) return;
  image.value?.hoverOff();
};
</script>

<template>
  <div
    class="relative mx-auto flex w-full max-w-[141rem] flex-col p-[2.5rem] s:flex-row s:rounded-base"
    :class="[
      data.accentColor?.bgColor ? bgColor(data.accentColor) : 'bg-tan',
      type != 'feature' && 'max-s:pb-0',
    ]"
  >
    <!-- text -->
    <div
      class="left relative w-full py-[2.5rem] pb-[5rem] s:w-1/2 s:pb-[7.5rem] s:pl-side s:pr-[6.5rem] max-s:order-2 max-s:h-full"
    >
      <BlogDetails
        :data="data"
        class="mb-[3rem] s:mb-[6.5rem]"
        :external_date="vimeoData?.created_time"
      />
      <h1
        class="mb-[1.5rem] font-helvb text-md-mob leading-base s:mb-[3.2rem] s:text-md"
        data-datocms-noindex
      >
        {{ data.title }}
      </h1>
      <p>{{ checkVideoDescription(data.intro, vimeoData) }}</p>

      <CtaGroup
        v-if="data.cta"
        :data="data.cta.buttons"
        align="left"
        :theme="light"
        class="mt-10"
      />

      <!-- author/arrow -->
      <template v-if="type == 'feature'">
        <div class="arrow absolute bottom-0 left-0 z-1 s:pl-side">
          <IconArrow color="stroke-black" />
        </div>
      </template>

      <template v-else>
        <div
          v-if="data.author"
          class="author flex items-center space-x-6 s:absolute s:bottom-0 max-s:mt-[3.5rem]"
        >
          <img
            v-if="data.author.photo"
            :src="data.author.photo.url"
            alt=""
            class="w-[4rem] overflow-hidden rounded-full s:w-[5rem]"
          />
          <p class="text-body-xsm-mob s:text-body-xsm">
            Author: {{ data.author.name }}
          </p>
        </div>
      </template>
    </div>

    <!-- image -->
    <div class="right relative w-full s:w-1/2 max-s:order-1">
      <!-- image -->
      <BlogThumbImage
        :data="data"
        ref="image"
        class="featured-image !aspect-[1.32] !h-full !w-full"
      />

      <!-- open video modal -->
      <button
        v-if="isVideo"
        class="absolute left-0 top-0 z-2 block size-full"
        @click="openVideoModal(data.media?.video)"
        @mouseenter="hoverOn"
        @mouseleave="hoverOff"
      ></button>
    </div>

    <!-- add link for feature module -->
    <NuxtLink
      v-if="type == 'feature'"
      :to="`/blog/${data.slug}` + addUtm(route)"
      class="absolute left-0 top-0 h-full w-full"
    ></NuxtLink>
  </div>
</template>
