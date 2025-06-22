<script setup>
import { Image as DatocmsImage } from "vue-datocms";
const props = defineProps(["data"]);
</script>

<template>
  <div
    class="thumb relative w-full bg-jaffa p-side-mob pb-[8rem] s:w-[60rem] s:p-thumb s:pb-[15.6rem]"
  >
    <!-- bg hover -->
    <div
      class="bg-hover absolute left-0 top-0 z-0 h-full w-full p-[1.6rem] opacity-0"
    >
      <div
        class="rounded-base-mob h-full w-full bg-jaffalt bg-opacity-25 p-thumb pb-[15.6rem] s:rounded-base"
      ></div>
    </div>

    <!-- image -->
    <div
      class="thumb-img rounded-base-mob relative z-1 aspect-[1.3] overflow-hidden s:rounded-base"
    >
      <DatocmsImage
        v-if="data.image"
        :data="data.image.responsiveImage"
        class="h-full w-full object-cover"
      />
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

    <!-- link -->
    <NuxtLink
      :to="`/blog/${data.slug}`"
      class="absolute left-0 top-0 z-2 block h-full w-full"
    ></NuxtLink>
  </div>
</template>

<style scoped></style>
