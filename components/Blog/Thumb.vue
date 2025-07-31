<script setup>
import { gsap } from "gsap";
const props = defineProps(["data", "loc"]);
const main = ref(null);
const image = ref(null);

const linkTo = computed(() => {
  // external media link
  if (props.data.media?.externalLink) {
    return props.data.media?.externalLink;
  }

  // external press link
  if (props.data.externalLink) {
    return props.data.externalLink;
  }

  // internal news post
  if (["press", "collaborations"].includes(props.data.tag.slug)) {
    return `/news/${props.data.slug}`;
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
  image.value?.hoverOn();
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
  image.value?.hoverOff();
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
    <BlogThumbImage :data="data" ref="image" />

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
