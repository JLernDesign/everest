<script setup>
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["data"]);
</script>

<template>
  <Section class="bg-skyblue text-center text-white s:!py-side max-s:p-0">
    <div
      class="bg-[url(/ui/quote-bg@2x.jpg)] bg-cover pb-[8rem] pt-20 s:rounded-base s:pb-[11.5rem] s:pt-[7.6rem] max-s:px-side-mob"
    >
      <div
        v-if="data.image"
        class="quote-person mx-auto mb-[5rem] w-[19.5rem] overflow-hidden rounded-sm s:mb-[8rem]"
      >
        <DatocmsImage :data="data.image.responsiveImage" class="quote-image" />
      </div>

      <blockquote
        class="-tracking-sm -tracking-sm relative mx-auto max-w-[125rem] font-barlow-cond text-xl-mob leading-xl s:text-xl"
      >
        <div class="quote lt absolute -top-[5.5rem] s:-left-[3.5rem]">“</div>
        <div
          class="quote rt absolute -bottom-[13rem] right-0 s:-bottom-[18rem]"
        >
          ”
        </div>
        {{ data.quote }}
      </blockquote>

      <!-- byline -->
      <div
        v-if="data.name"
        class="byline mt-[3.5rem] text-body-xsm-mob s:mt-[5rem] s:text-body-xsm"
      >
        <strong class="block font-helvb">{{ data.name }}</strong>
        {{ data.title }}
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
