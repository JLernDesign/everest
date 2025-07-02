<script setup>
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["data"]);
</script>

<template>
  <div
    class="relative rounded-base-mob p-side-mob pt-side s:min-h-[43.8rem] s:rounded-base s:px-side"
    :class="[
      data.style == 'two-col'
        ? 's:col-span-2 s:pr-[2.5rem] s:pt-[2.5rem] max-s:pb-[9rem]'
        : 'pb-[9rem]',
      data.bgColor ? bgColor(data) : 'bg-white',
    ]"
  >
    <!-- image/logo w/ quote -->
    <template v-if="data.style == 'basic'">
      <!-- image -->
      <div
        v-if="data.image"
        class="mb-[3rem] w-[23.4rem] overflow-hidden rounded-base-mob s:mb-side s:w-[19.5rem] s:rounded-base"
      >
        <DatocmsImage :data="data.image.responsiveImage" />
      </div>

      <!-- logo -->
      <img
        v-if="data.logo"
        :src="data.logo.url"
        alt=""
        class="mb-side w-[19.5rem] overflow-hidden rounded-base-mob s:rounded-base"
      />

      <!-- quote -->
      <blockquote
        v-if="data.quote"
        class="text-body-sm-mob leading-sm s:text-body-sm"
      >
        “{{ data.quote }}”
      </blockquote>
    </template>

    <!-- big quote on color -->
    <template v-if="data.style == 'big-quote'">
      <blockquote
        class="pt-14 font-barlow-cond text-sm-mob font-bold leading-[.94] s:pt-10 s:text-sm max-s:mb-16"
      >
        <div
          class="quote lt absolute left-[2rem] top-[2rem] s:top-[3rem] max-s:text-[3.6rem]"
        >
          “
        </div>
        <div
          class="quote rt absolute bottom-[6rem] right-[4rem] max-s:text-[3.6rem]"
        >
          ”
        </div>
        {{ data.quote }}
      </blockquote>
    </template>

    <!-- two column quote w/ big photo -->
    <template v-if="data.style == 'two-col'">
      <div class="flex flex-col justify-between s:flex-row">
        <!-- quote -->
        <div class="left s:w-[46%] s:pt-[1.5rem] max-s:order-2">
          <img
            v-if="data.logo"
            :src="data.logo.url"
            alt=""
            class="mb-side-mob w-[12rem] overflow-hidden rounded-base-mob s:mb-side s:w-[19.5rem] s:rounded-base"
          />
          <blockquote
            v-if="data.quote"
            class="text-body-sm-mob leading-sm s:text-body-sm"
          >
            “{{ data.quote }}”
          </blockquote>
        </div>

        <!-- image -->
        <div class="right s:w-[47.5%] max-s:order-1 max-s:mb-12">
          <DatocmsImage
            v-if="data.image"
            :data="data.image.responsiveImage"
            class="overflow-hidden rounded-base-mob s:rounded-base"
          />

          <hr class="my-[3.25rem] text-black" />

          <!-- stats -->
          <div v-if="data.statsGroup" class="stats flex space-x-14 leading-[1]">
            <div
              v-for="stat in data.statsGroup.stats"
              class="stat-item flex items-end space-x-4"
            >
              <h3 class="font-barlow-cond text-sm-mob font-bold s:text-sm">
                {{ stat.figure }}
              </h3>
              <p class="text-body-xsm-mob s:text-body-xsm">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- byline -->
    <div
      v-if="data.name"
      class="byline absolute bottom-0 pb-[3rem] text-body-xsm-mob s:text-body-xsm"
    >
      <strong class="block font-helvb">{{ data.name }}</strong>
      {{ data.title }}
    </div>
  </div>
</template>

<style scoped></style>
