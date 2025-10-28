<script setup>
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["data"]);
</script>

<template>
  <div
    class="content-image rounded-base-mob bg-cover p-[1.4rem] s:rounded-base s:p-[5rem]"
    :class="[data.bgColor ? bgColor(data) : 'bg-tan']"
    :style="data.bgImage ? `background-image:url(${data.bgImage.url})` : ''"
  >
    <div
      class="relative rounded-base-mob bg-skyblue px-[1.4rem] py-[4rem] s:rounded-base s:px-[6.5rem] s:py-[8rem]"
      :class="data.person ? '!pb-[33rem]' : ''"
    >
      <blockquote class="relative text-body-mob s:text-body">
        <div
          class="quote lt absolute -top-[3rem] font-barlow-cond text-xl-mob leading-xl text-blue s:-left-[3.5rem] s:-top-[5.5rem] s:text-xl"
        >
          “
        </div>
        <div
          class="quote rt absolute -bottom-[5rem] right-0 font-barlow-cond text-xl-mob leading-xl text-blue s:-bottom-[10rem] s:text-xl"
        >
          ”
        </div>
        {{ data.quote }}
      </blockquote>

      <!-- person photo -->
      <div
        v-if="data.person"
        class="person-photo absolute bottom-0 left-0 size-[30rem]"
      >
        <DatocmsImage :data="data.person.responsiveImage" />
      </div>

      <!-- byline -->
      <div
        v-if="data.name"
        class="byline mt-[2.5rem] s:mt-[5rem]"
        :class="
          data.person
            ? 's:absolute s:bottom-0 s:left-0 s:pb-[5rem] s:pl-[33rem] s:pr-[5rem]'
            : ''
        "
      >
        <strong class="block font-helvb text-body-mob text-red s:text-body">{{
          data.name
        }}</strong>
        <span
          class="inline-block text-body-sm-mob leading-sm s:mt-2 s:text-body-sm"
          >{{ data.title }}</span
        >
      </div>
    </div>
  </div>
</template>
