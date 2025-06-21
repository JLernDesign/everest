<script setup>
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["data"]);
</script>

<template>
  <Section class="bg-skyblue !py-side text-center text-white">
    <div
      class="rounded-base-mob bg-[url(/ui/quote-bg@2x.jpg)] bg-cover pb-[11.5rem] pt-[7.6rem] s:rounded-base"
    >
      <div
        v-if="data.image"
        class="quote-person mx-auto mb-[8rem] w-[19.5rem] overflow-hidden rounded-sm"
      >
        <DatocmsImage :data="data.image.responsiveImage" class="quote-image" />
      </div>

      <blockquote
        class="text-xl-mob relative mx-auto max-w-[125rem] font-barlow-cond font-bold leading-xl s:text-xl"
      >
        <div class="quote lt absolute -left-[3.5rem] -top-[5.5rem]">“</div>
        <div class="quote rt absolute -bottom-[18rem] right-0">”</div>
        {{ data.quote }}
      </blockquote>

      <!-- byline -->
      <div
        v-if="data.name"
        class="byline text-body-xsm-mob mt-[5rem] s:text-body-xsm"
      >
        <strong class="block font-helvb">{{ data.name }}</strong>
        {{ data.title }}
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
