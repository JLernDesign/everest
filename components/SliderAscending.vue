<script setup>
const props = defineProps(["theme", "data", "template"]);

const main = ref(null);
let slide_els;
const os = 13;
const pos = [0, "-13rem", "-26rem", "26rem", "13rem"];

const duplicated = computed(() => {
  if (props.data.modules.length >= 1) {
    return props.data.modules;
  }

  const duplicates = [...props.data.modules];
  const min = 5 - props.data.modules.length;

  for (let i = 0; i < min; i++) {
    duplicates.push({ ...props.data.modules[i % props.data.modules.length] });
  }

  return duplicates;
});

onMounted(() => {
  slide_els = qsa(".item", main.value.$el);
  //slide_els.reverse();

  slide_els.forEach((slide, i) => {
    //slide.style.marginTop = pos[i];
  });
});
</script>

<template>
  <Section
    :theme="theme"
    class="pb-section-bot pt-section-top-lg"
    :class="data.background == 'blue' ? 'bg-skyblue' : 'bg-jaffa'"
    side="none"
    ref="main"
  >
    <!-- bg elements -->
    <template v-if="data.background == 'blue'">
      <UICloud
        type="3"
        class="-left-[53.3rem] top-[46.6rem] -scale-x-100 opacity-50"
      />
      <UICloud type="3" class="left-[93rem] top-0 -scale-x-100 opacity-50" />
    </template>

    <SectionHeader :theme="theme" :data="data.header" />

    <!-- slider -->
    <!-- -mt-[32rem] !h-[128rem] cursor-grab -->
    <Carousel
      class="slider-wrap ml-[9.65rem] mt-[16.5rem] !h-[82rem] -rotate-[15deg] space-x-[9rem]"
      :drag="true"
    >
      <div
        v-for="(slide, i) in duplicated"
        class="item z-1 h-[62.8rem] w-[45.5rem] shrink-0 rotate-[15deg] rounded-base p-[3.2rem] pt-[3.75rem]"
        :class="bgColor(slide)"
      >
        <h3 class="relative font-barlow-cond text-sm font-bold leading-[.95]">
          <IconTri color="fill-black" class="mb-[1.35rem]" />
          <span v-html="slide.headline"></span>
        </h3>

        <!-- illustration -->
        <div
          class="illus absolute left-0 top-[20rem] z-0 flex w-full justify-center"
        >
          <img
            v-if="slide.image"
            :src="slide.image.url"
            alt=""
            class="h-[20rem] w-[20rem]"
          />
        </div>

        <div
          class="absolute bottom-0 left-0 z-1 h-auto w-full p-[3.2rem] text-body-sm leading-sm"
        >
          <span v-html="slide.body"></span>
        </div>
      </div>
      <!-- <div class="item end-spacer w-0 shrink-0"></div> -->
    </Carousel>
  </Section>
</template>

<style scoped></style>
