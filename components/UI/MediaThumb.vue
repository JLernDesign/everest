<script setup>
import { Image as DatocmsImage } from "vue-datocms";
const props = defineProps(["data"]);

console.log(props.data);
const linkTo = computed(() => {
  // external link
  if (props.data.media?.externalLink) {
    return props.data.media?.externalLink;
  }

  // document (ebook)
  if (props.data.media?.document) {
    return props.data.media?.document.url;
  }

  // internal link (blog post)
  return `/blog/${props.data.slug}`;
});

const isVideo = computed(() => {
  return props.data.media?.video?.file || props.data.media?.video?.external;
});

const handleClick = () => {
  if (props.data.media?.video?.file) {
    openVideoModal(props.data.media?.video);
  }
};
</script>

<template>
  <div class="item h-full w-screen shrink-0 s:w-[33.5rem]">
    <!-- image -->
    <div
      class="thumb-img relative z-1 h-full w-full [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
    >
      <!-- media thumbnail -->
      <DatocmsImage
        v-if="data.media.image"
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
        <div class="shadow-media relative overflow-hidden rounded-base">
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
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <UIArrowDiamond />
        </div>
      </template>

      <!-- podcast -->
      <div
        v-if="data.media?.__typename == 'PodcastRecord'"
        class="absolute left-0 top-0 flex size-full scale-75 items-center justify-center"
      >
        <MediaPodcast :data="data" />
      </div>

      <!-- ebook -->
      <div
        v-if="data.media?.__typename == 'EbookRecord'"
        class="absolute left-0 top-0 flex size-full scale-75 items-center justify-center"
      >
        <MediaEbook :data="data" />
      </div>

      <!-- title -->
      <div class="absolute bottom-0 left-0 z-1 w-full p-4">
        <div class="rounded-base-mob bg-jaffa p-[1.2rem] pb-3">
          <h3 class="leading-body-sm text-body-sm-mob">
            {{ data.title }}
          </h3>
        </div>
      </div>
    </div>

    <!-- open video modal -->
    <button
      v-if="isVideo"
      class="absolute left-0 top-0 z-2 block size-full"
      @click="handleClick"
    ></button>

    <!-- link to blog post / external link -->
    <NuxtLink
      v-else
      :to="linkTo"
      :target="linkTo.includes('http') ? '_blank' : null"
      class="absolute left-0 top-0 z-2 block size-full"
    ></NuxtLink>
  </div>
</template>

<style scoped></style>
