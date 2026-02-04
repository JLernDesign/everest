<script setup>
import { Image as DatocmsImage } from "vue-datocms";
const props = defineProps(["data", "loc"]);

const title = ref(true);

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
  return `/blog/${props.data.slug}` + addUtm(route);
});

const isVideo = computed(() => {
  return props.data.media?.video?.file || props.data.media?.video?.external;
});

const handleClick = () => {
  if (props.data.media?.video?.file) {
    openVideoModal(props.data.media?.video);
  }
};

/* hovers */
const arrowDiamond = ref(null);
const hoverOn = () => {
  if (arrowDiamond.value) {
    arrowDiamond.value.hoverOn();
  }
};

const hoverOff = () => {
  if (arrowDiamond.value) {
    arrowDiamond.value.hoverOff();
  }
};

defineExpose({
  title,
});
</script>

<template>
  <div
    class="item pointer-events-auto h-full w-full shrink-0 s:w-[33.5rem]"
    :class="loc == 'landing' && '!w-full'"
    @mouseenter="hoverOn"
    @mouseleave="hoverOff"
  >
    <!-- image -->
    <div
      class="thumb-img dato-image relative z-1 h-full w-full [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
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
        :data="data.media?.image.responsiveImage"
        class="h-full w-full"
      />

      <!-- texture background fallback -->
      <img
        v-else
        :src="
          loc == 'landing' ? '/video/media-bg-lg.jpg' : '/video/media-bg.jpg'
        "
        class="absolute left-0 top-0 size-full"
      />

      <!-- product demo -->
      <div
        v-if="data.media?.__typename == 'ProductDemoRecord'"
        class="absolute left-0 top-0 flex size-full items-center p-[6rem]"
      >
        <div class="relative overflow-hidden rounded-base shadow-media">
          <DatocmsImage
            v-if="data.media?.screen"
            :data="data.media?.screen.responsiveImage"
          />
          <div
            class="absolute left-0 top-0 size-full bg-[#2A3440] opacity-80"
          ></div>
        </div>
      </div>

      <!-- has video loop -->
      <div
        v-if="data.media?.video?.loopClip"
        class="absolute left-0 top-0 size-full"
      >
        <video loop muted autoplay playsinline class="size-full object-contain">
          <source :src="data.media.video.loopClip.url" type="video/mp4" />
        </video>
      </div>

      <!-- video -->
      <template v-if="isVideo">
        <div
          v-if="
            data.media?.__typename == 'MediaVideoRecord' ||
            data.media?.video?.loopClip
          "
          class="absolute left-0 top-0 size-full bg-[#2A3440] opacity-80"
        ></div>

        <!-- button -->
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <UIArrowDiamond ref="arrowDiamond" />
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
      <div
        class="absolute bottom-0 left-0 z-1 w-full p-4 transition-all delay-100 duration-500 ease-in-out"
        :class="
          title ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        "
      >
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
