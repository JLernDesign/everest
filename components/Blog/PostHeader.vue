<script setup>
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["data", "type"]);
</script>

<template>
  <div
    class="relative mx-auto flex w-full max-w-[141rem] flex-col p-[2.5rem] s:flex-row s:rounded-base"
    :class="[
      data.accentColor.bgColor ? bgColor(data.accentColor) : 'bg-tan',
      type != 'feature' && 'max-s:pb-0',
    ]"
  >
    <!-- text -->
    <div
      class="left relative w-full py-[2.5rem] pb-[5rem] s:w-1/2 s:pb-[7.5rem] s:pl-side s:pr-[6.5rem] max-s:order-2 max-s:h-full"
    >
      <BlogDetails :data="data" class="mb-[3rem] s:mb-[6.5rem]" />
      <h1
        class="text-md-mob mb-[1.5rem] font-helvb leading-base s:mb-[3.2rem] s:text-md"
      >
        {{ data.title }}
      </h1>
      <p>{{ data.intro }}</p>

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
      <div
        class="featured-image h-full w-full overflow-hidden rounded-sm [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
      >
        <DatocmsImage
          v-if="data.image"
          :data="data.image.responsiveImage"
          class="h-full w-full"
        />
      </div>
    </div>

    <!-- add link for feature module -->
    <NuxtLink
      v-if="type == 'feature'"
      :to="`/blog/${data.slug}`"
      class="absolute left-0 top-0 h-full w-full"
    ></NuxtLink>
  </div>
</template>
