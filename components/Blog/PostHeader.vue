<script setup>
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["data", "type"]);
</script>

<template>
  <div
    class="relative mx-auto flex w-full max-w-[141rem] rounded-base p-[2.5rem]"
    :class="data.accentColor.bgColor ? bgColor(data.accentColor) : 'bg-tan'"
  >
    <!-- text -->
    <div
      class="left relative w-1/2 py-[2.5rem] pb-[7.5rem] pl-side pr-[6.5rem]"
    >
      <BlogDetails :data="data" class="mb-[6.5rem]" />
      <h1 class="mb-[3.2rem] font-helvb text-md leading-base">
        {{ data.title }}
      </h1>
      <p>{{ data.intro }}</p>

      <!-- author/arrow -->
      <template v-if="type == 'feature'">
        <div class="arrow absolute bottom-0 left-0 z-1 pl-side">
          <IconArrow color="stroke-black" />
        </div>
      </template>

      <template v-else>
        <div
          v-if="data.author"
          class="author absolute bottom-0 flex items-center space-x-6"
        >
          <img
            v-if="data.author.photo"
            :src="data.author.photo.url"
            alt=""
            class="w-[5rem] overflow-hidden rounded-full"
          />
          <p class="text-body-xsm">Author: {{ data.author.name }}</p>
        </div>
      </template>
    </div>

    <!-- image -->
    <div class="right relative w-1/2">
      <div class="featured-image h-full w-full overflow-hidden rounded-sm">
        <DatocmsImage
          v-if="data.image"
          :data="data.image.responsiveImage"
          class="h-full w-full object-cover"
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
