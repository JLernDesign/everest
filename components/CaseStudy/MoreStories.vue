<script setup>
import gql from "graphql-tag";
</script>

<template>
  <div class="relative z-1 p-side-mob !pb-0 s:p-side" ref="main">
    <UITexture />

    <!-- content -->
    <div
      class="relative overflow-hidden rounded-base-mob bg-shadowblue px-side-mob py-side-mob s:rounded-base s:px-side s:py-section-bot"
    >
      <header class="pb-14 text-center text-white">
        <h2 class="text font-barlow-cond text-lg-mob leading-lg s:text-lg">
          Additional Customer Stories
        </h2>
      </header>

      <!-- grid -->
      <div
        class="mx-auto grid max-w-[131.5rem] s:mt-[10rem] s:grid-cols-2 s:gap-[13.2rem]"
      >
        <div
          v-for="i in 2"
          :key="i"
          class="w-[59rem] rounded-base-mob bg-jaffalt p-[1.5rem] s:rounded-base"
        >
          <div
            class="photo overflow-hidden rounded-base-mob s:rounded-base [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
          >
            <!-- <DatocmsImage
            v-if="data.image"
            :data="data.image.responsiveImage"
            class="h-full w-full"
          /> -->
          </div>
          <div class="p-[2.5rem]">
            <!-- <p>{{ data.headline }}</p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
