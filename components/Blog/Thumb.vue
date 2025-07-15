<script setup>
import { gsap } from "gsap";
import { Image as DatocmsImage } from "vue-datocms";
const props = defineProps(["data", "loc"]);
const main = ref(null);

const arrowDiamond = ref(null);

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

const hoverOn = () => {
  if (isTouchDevice()) return;
  const bg = main.value.querySelector(".bg-hover");
  const title = main.value.querySelector(".title");
  gsap.killTweensOf(bg);
  gsap.fromTo(
    bg,
    { scale: 0.9, opacity: 0 },
    {
      duration: 0.5,
      scale: 1,
      opacity: 1,
      ease: "power3.out",
    },
  );
  title.classList.add("on");
  if (arrowDiamond.value) {
    arrowDiamond.value.hoverOn();
  }
};

const hoverOff = () => {
  if (isTouchDevice()) return;
  const bg = main.value.querySelector(".bg-hover");
  const title = main.value.querySelector(".title");
  gsap.killTweensOf(bg);
  gsap.to(bg, {
    duration: 0.5,
    opacity: 0,
    scale: 0.98,
    ease: "power3.out",
  });
  title.classList.remove("on");
  if (arrowDiamond.value) {
    arrowDiamond.value.hoverOff();
  }
};
</script>

<template>
  <div
    class="thumb relative w-full bg-jaffa p-side-mob pb-[8rem] s:w-[60rem] s:p-thumb s:pb-[15.6rem]"
    :class="loc == 'blog' && 'scroll-reveal'"
    ref="main"
    @mouseenter="hoverOn"
    @mouseleave="hoverOff"
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
        v-else-if="data.media.image"
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
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
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
    </div>

    <!-- date/tag -->
    <BlogDetails class="mt-[3.2rem]" :data="data" />

    <!-- title -->
    <h3
      class="relative z-1 mb-[1.2rem] font-helvb text-body-mob leading-body s:text-body"
    >
      <span class="ul single title fast">{{ data.title }}</span>
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
