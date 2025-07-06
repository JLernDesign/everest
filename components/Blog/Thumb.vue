<script setup>
import { Image as DatocmsImage } from "vue-datocms";
const props = defineProps(["data", "loc"]);

const linkTo = computed(() => {
  // external link
  if (props.data.externalLink) {
    return props.data.externalLink;
  }

  // document
  if (props.data.document) {
    return props.data.document.url;
  }

  // internal link
  return `/blog/${props.data.slug}`;
});

const isVideo = computed(() => {
  return props.data.video?.file || props.data.video?.external;
});

const handleClick = () => {
  if (props.data.video?.file) {
    openVideoModal(props.data.video);
  }
};
</script>

<template>
  <div
    class="thumb relative w-full bg-jaffa p-side-mob pb-[8rem] s:w-[60rem] s:p-thumb s:pb-[15.6rem]"
    :class="loc == 'blog' && 'scroll-reveal'"
  >
    <!-- bg hover -->
    <div
      class="bg-hover absolute left-0 top-0 z-0 h-full w-full p-[1.6rem] opacity-0"
    >
      <div
        class="h-full w-full rounded-base-mob bg-jaffalt bg-opacity-25 p-thumb pb-[15.6rem] s:rounded-base"
      ></div>
    </div>

    <!-- image -->
    <div
      class="thumb-img relative z-1 aspect-[1.3] overflow-hidden rounded-base-mob s:rounded-base [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
    >
      <DatocmsImage
        v-if="data.image"
        :data="data.image.responsiveImage"
        class="h-full w-full"
      />

      <!-- video -->
      <template v-if="isVideo">
        <div
          v-if="data.tag.name == 'Media'"
          class="absolute left-0 top-0 size-full bg-[#2A3440] opacity-80"
        ></div>

        <!-- button -->
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <UIArrowDiamond />
        </div>
      </template>

      <!-- document -->
    </div>

    <!-- details -->
    <BlogDetails class="mt-[3.2rem]" :data="data" />

    <!-- title -->
    <h3
      class="relative z-1 mb-[1.2rem] font-helvb text-body-mob leading-body s:text-body"
    >
      {{ data.title }}
    </h3>
    <p class="relative z-1 text-body-sm-mob leading-sm s:text-body-sm">
      {{ createExcerpt(data.intro, 30) }}
    </p>

    <!-- arrow -->
    <div
      class="arrow absolute bottom-0 z-1 pb-[2rem] s:right-0 s:pb-[3.5rem] s:pr-thumb max-s:left-0 max-s:pb-[2rem] max-s:pl-side-mob"
    >
      <IconArrow color="stroke-black" />
    </div>

    <!-- video -->
    <button
      v-if="isVideo"
      class="absolute left-0 top-0 z-2 block size-full"
      @click="handleClick"
    ></button>

    <!-- link -->
    <NuxtLink
      v-else
      :to="linkTo"
      :target="linkTo.includes('http') ? '_blank' : null"
      class="absolute left-0 top-0 z-2 block size-full"
    ></NuxtLink>
  </div>
</template>

<style scoped></style>
