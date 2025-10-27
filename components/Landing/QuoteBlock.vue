<script setup>
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["data"]);
</script>

<template>
  <div
    class="content-image rounded-base-mob bg-cover s:rounded-base s:p-[5rem]"
    :class="[data.bgColor ? bgColor(data) : 'bg-tan']"
    :style="data.bgImage ? `background-image:url(${data.bgImage.url})` : ''"
  >
    <div
      class="relative rounded-base-mob bg-skyblue px-[6.5rem] py-[8rem] s:rounded-base"
      :class="data.person ? 'pb-[33rem]' : ''"
    >
      <blockquote class="relative text-body">
        <div
          class="quote lt absolute -top-[5.5rem] font-barlow-cond text-xl-mob leading-xl text-blue s:-left-[3.5rem] s:text-xl"
        >
          “
        </div>
        <div
          class="quote rt absolute -bottom-[13rem] right-0 font-barlow-cond text-xl-mob leading-xl text-blue s:-bottom-[10rem] s:text-xl"
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
        class="byline mt-[3.5rem] s:mt-[5rem]"
        :class="
          data.person
            ? 'absolute bottom-0 left-0 pb-[5rem] pl-[33rem] pr-[5rem]'
            : ''
        "
      >
        <strong class="block font-helvb text-body-mob text-red s:text-body">{{
          data.name
        }}</strong>
        <span
          class="mt-2 inline-block text-body-sm-mob leading-sm s:text-body-sm"
          >{{ data.title }}</span
        >
      </div>
    </div>
  </div>
</template>
