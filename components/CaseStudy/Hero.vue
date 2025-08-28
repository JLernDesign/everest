<script setup>
import { gsap } from "gsap";
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["data"]);

const main = ref(null);

onMounted(() => {});
</script>

<template>
  <Section :hero="true" side="none" class="s:!pt-[12rem]">
    <div
      class="relative flex flex-col border-t border-t-grayline px-side-mob s:flex-row s:px-side-lg"
      ref="main"
    >
      <!-- headline -->
      <div
        class="flex flex-col justify-center border-l border-l-grayline p-side-mob s:w-[69.5%] s:py-[8rem] s:pl-side s:pr-[10rem] max-s:border-r max-s:border-r-grayline max-s:pb-[4rem]"
      >
        <h1
          class="text font-barlow-cond text-xl-mob leading-xl -tracking-sm s:text-xl"
          v-html="formatText(data.headline)"
        ></h1>
      </div>

      <!-- client details -->
      <!-- <hr
        class="relative left-1/2 w-screen -translate-x-1/2 text-grayline s:hidden"
      /> -->
      <div class="border-x border-x-grayline p-8 s:w-[30.5%]">
        <div
          class="photo overflow-hidden rounded-base-mob s:rounded-base [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
        >
          <DatocmsImage
            v-if="data.image"
            :data="data.image.responsiveImage"
            class="h-full w-full"
          />
        </div>

        <!-- bullets -->
        <ul
          class="details mt-8 divide-y-1 divide-grayline border-y-1 border-grayline leading-sm [&_li]:flex [&_li]:items-center [&_li]:gap-4 [&_li]:py-8"
        >
          <li v-for="item in data.details">
            <h3 class="-mt-2 font-barlow text-body-xsm uppercase opacity-30">
              {{ item.label }}
            </h3>
            <p class="text-body-sm-mob s:text-body-sm">{{ item.text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
