<script setup>
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["data"]);

const isVideo = computed(() => {
  return props.data.media?.video?.file || props.data.media?.video?.external;
});
</script>

<template>
  <div
    class="thumb-img dato-image relative z-1 aspect-[1.3] overflow-hidden rounded-base-mob s:rounded-base [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
  >
    <!-- blog thumbnail -->
    <DatocmsImage
      v-if="data.image"
      :data="data.image.responsiveImage"
      class="h-full w-full"
    />

    <!-- media thumbnail -->
    <DatocmsImage
      v-else-if="data.media?.image"
      :data="data.media.image.responsiveImage"
      class="h-full w-full"
    />

    <!-- texture background fallback -->
    <img
      v-else
      src="/video/media-bg.jpg"
      class="absolute left-0 top-0 size-full"
    />

    <!-- product demo -->
    <div
      v-if="data.media?.__typename == 'ProductDemoRecord'"
      class="absolute left-0 top-0 flex size-full items-center p-[6rem]"
    >
      <div class="relative overflow-hidden rounded-base shadow-media">
        <DatocmsImage
          v-if="data.media.screen"
          :data="data.media.screen.responsiveImage"
        />
        <div
          class="absolute left-0 top-0 size-full bg-[#2A3440] opacity-80"
        ></div>
      </div>
    </div>

    <!-- video -->
    <template v-if="isVideo">
      <div
        v-if="data.media?.__typename == 'MediaVideoRecord'"
        class="absolute left-0 top-0 size-full bg-[#2A3440] opacity-80"
      ></div>

      <!-- button -->
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <UIArrowDiamond ref="arrowDiamond" />
      </div>
    </template>

    <!-- podcast -->
    <div
      v-if="data.media?.__typename == 'PodcastRecord'"
      class="absolute left-0 top-0 flex size-full items-center justify-center"
    >
      <MediaPodcast :data="data" />
    </div>

    <!-- ebook -->
    <div
      v-if="data.media?.__typename == 'EbookRecord'"
      class="absolute left-0 top-0 flex size-full items-center justify-center"
    >
      <MediaEbook :data="data" />
    </div>

    <!-- press -->
    <template v-if="data.tag.slug == 'press'">
      <div
        class="absolute left-0 top-0 size-full bg-[#2A3440] opacity-80"
      ></div>

      <!-- logo -->
      <div
        v-if="data.logo"
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div class="h-[10rem] w-[20rem]">
          <img :src="data.logo.url" class="!h-full !w-full !object-contain" />
        </div>
      </div>
    </template>

    <!-- collaborations -->
    <div
      v-if="data.tag.slug == 'collaborations'"
      class="absolute left-1/2 top-1/2 h-[14.4rem] w-[29rem] -translate-x-1/2 -translate-y-1/2 rounded-base bg-jaffa"
    >
      <div
        v-if="data.logo"
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div class="h-[8rem] w-[16rem]">
          <img :src="data.logo.url" class="!h-full !w-full !object-contain" />
        </div>
      </div>
    </div>
  </div>
</template>
