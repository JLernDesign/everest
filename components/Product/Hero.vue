<script setup>
import gsap from "gsap";
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["data", "order"]);
const loaded = ref(false);
const main = ref(null);
let ctx;

onMounted(() => {
  ctx = gsap.context((self) => {}, main.value);

  setTimeout(() => {
    loaded.value = true;
  }, 200);

  setTimeout(() => {
    const image = main.value.$el.querySelector(".hero-image");
    console.log(image);
    gsap.fromTo(
      image,
      {
        y: "2rem",
      },
      {
        duration: 1.25,
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
    );
  }, 1400);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <Section
    :hero="true"
    side="none"
    class="overflow-hidden bg-skyblue max-s:pb-[16rem]"
    ref="main"
    :anim="true"
  >
    <!-- bg elements -->
    <UIGlow
      class="glower bottom-[0rem] left-1/2 hidden h-[36rem] !w-[118rem] -translate-x-1/2 s:block"
      src="/ui/edge-gradient-sm.svg"
    />
    <UICloud
      type="2"
      class="-top-[30rem] left-[99rem]"
      :anim="true"
      :speed="55"
    />
    <UICloud type="2" class="left-0 top-[68rem]" :anim="true" :speed="30" />
    <UICloud
      type="3"
      class="left-[73rem] top-[65rem]"
      :anim="true"
      :speed="50"
    />

    <div
      class="relative flex flex-col border-y border-y-grayline px-side-mob s:flex-row s:px-side-lg"
    >
      <!-- text -->
      <SectionHeader
        class="w-full border-l border-l-grayline p-side-mob pb-[3.6rem] s:w-[57%] s:pb-side s:pl-side s:pr-[7.5rem] s:pt-[7.5rem] max-s:border-r max-s:border-r-grayline"
        align="left"
        :hero="true"
        :data="data"
        :anim="true"
      />

      <!-- image -->
      <hr
        class="relative left-1/2 w-screen -translate-x-1/2 text-grayline s:hidden"
      />
      <div
        class="grid w-full place-content-center border-x border-x-grayline p-side-mob s:w-[43%] s:px-[7rem] s:py-[3.5rem]"
      >
        <div class="anim-item hero-image">
          <DatocmsImage
            v-if="data.image"
            :data="data.image.responsiveImage"
            class="hero-image"
          />
        </div>
      </div>

      <!-- number -->
      <div
        class="anim-item absolute right-0 top-0 hidden pr-side pt-[5rem] font-barlow-cond text-num s:block"
      >
        {{ order < 10 && "0" }}{{ order }}
      </div>
    </div>

    <!-- bottom space -->
    <div class="hidden h-[33rem] px-side-lg s:flex">
      <div class="w-[57%] border-l border-l-grayline"></div>
      <div class="w-[43%] border-x border-x-grayline"></div>
    </div>

    <UIArrowDown class="max-s:hidden" />
  </Section>
</template>

<style scoped></style>
