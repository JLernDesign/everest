<script setup>
import { gsap } from "gsap";
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["data", "edge", "layout"]);

const main = ref(null);
let ctx;

onMounted(() => {
  ctx = gsap.context((self) => {
    // animate items into place on scroll to section
    setTimeout(() => {
      const items = self.selector(".anim-item");
      animIntoView(items, main.value, 0.2, "top 75%");
    }, 200);
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <Section
    class="bg-shadowblue pb-section-bot text-white s:pb-section-bot-lg"
    :class="data.jaggedEdge && 's:!pt-0 max-s:!pt-6'"
    theme="dark"
  >
    <UIJagEdge v-if="data.jaggedEdge" color="fill-shadowblue" />

    <!-- header -->
    <SectionHeader theme="dark" :data="data.header" />

    <!-- columns -->
    <div
      class="flex flex-col items-start justify-between pt-[2.5rem] s:flex-row s:pt-[6rem]"
      ref="main"
    >
      <!-- image -->
      <div
        class="anim-item image dato-image w-full overflow-hidden rounded-base-mob bg-shadowbluelt s:w-1/2 s:rounded-base [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
        :class="data.layout == 'image left' ? 'order-1' : 'order-2'"
      >
        <DatocmsImage
          v-if="data.image"
          :data="data.image.responsiveImage"
          class="h-full w-full"
        />
      </div>

      <!-- text -->
      <div
        class="anim-item text w-full s:w-1/2 max-s:mt-[5rem]"
        :class="
          layout == 'img-lt'
            ? 'order-2 s:pl-[11.5rem] s:pr-[9rem]'
            : 'order-1 s:pl-[9rem] s:pr-[11.5rem]'
        "
      >
        <div
          class="bullets space-y-10 [&_*+h2]:mt-[9rem] [&_h2]:font-helvb [&_h2]:text-body-md-mob [&_h2]:s:text-body-md [&_h3+p]:mt-[.5rem] [&_h3]:font-helvb"
          v-html="data.body"
        ></div>

        <CtaGroup
          v-if="data.cta"
          :data="data.cta.buttons"
          align="left"
          :theme="dark"
          class="mt-10"
        />
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
