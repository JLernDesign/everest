<script setup>
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["data"]);
</script>

<template>
  <div
    class="rounded-base-mob relative min-h-[43.8rem] p-side s:rounded-base"
    :class="[
      data.style == 'two-col'
        ? 'col-span-2 pr-[2.5rem] pt-[2.5rem]'
        : 'pb-[9rem]',
      data.bgColor ? bgColor(data) : 'bg-white',
    ]"
  >
    <!-- image/logo w/ quote -->
    <template v-if="data.style == 'basic'">
      <!-- image -->
      <div
        v-if="data.image"
        class="rounded-base-mob mb-side w-[19.5rem] overflow-hidden s:rounded-base"
      >
        <DatocmsImage :data="data.image.responsiveImage" />
      </div>

      <!-- logo -->
      <img
        v-if="data.logo"
        :src="data.logo.url"
        alt=""
        class="rounded-base-mob mb-side w-[19.5rem] overflow-hidden s:rounded-base"
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
        class="text-sm-mob pt-10 font-barlow-cond font-bold leading-[.94] s:text-sm"
      >
        <div class="quote lt absolute left-[2rem] top-[3rem]">“</div>
        <div class="quote rt absolute bottom-[6rem] right-[4rem]">”</div>
        {{ data.quote }}
      </blockquote>
    </template>

    <!-- two column quote w/ big photo -->
    <template v-if="data.style == 'two-col'">
      <div class="flex justify-between">
        <!-- quote -->
        <div class="left w-[46%] pt-[1.5rem]">
          <img
            v-if="data.logo"
            :src="data.logo.url"
            alt=""
            class="rounded-base-mob mb-side w-[19.5rem] overflow-hidden s:rounded-base"
          />
          <blockquote
            v-if="data.quote"
            class="text-body-sm-mob leading-sm s:text-body-sm"
          >
            “{{ data.quote }}”
          </blockquote>
        </div>

        <!-- image -->
        <div class="right w-[47.5%]">
          <DatocmsImage
            v-if="data.image"
            :data="data.image.responsiveImage"
            class="rounded-base-mob overflow-hidden s:rounded-base"
          />

          <hr class="my-[3.25rem] text-black" />

          <!-- stats -->
          <div v-if="data.statsGroup" class="stats flex space-x-14 leading-[1]">
            <div
              v-for="stat in data.statsGroup.stats"
              class="stat-item flex items-end space-x-4"
            >
              <h3 class="text-sm-mob font-barlow-cond font-bold s:text-sm">
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
      class="byline text-body-xsm-mob absolute bottom-0 pb-[3rem] s:text-body-xsm"
    >
      <strong class="block font-helvb">{{ data.name }}</strong>
      {{ data.title }}
    </div>
  </div>
</template>

<style scoped></style>
