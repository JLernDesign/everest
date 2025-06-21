<script setup>
const props = defineProps(["theme", "data", "template"]);

const main = ref(null);

const duplicated = computed(() => {
  if (props.data.modules.length >= 4) {
    return props.data.modules;
  }

  const duplicates = [...props.data.modules];
  const min = 5 - props.data.modules.length;

  for (let i = 0; i < min; i++) {
    duplicates.push({ ...props.data.modules[i % props.data.modules.length] });
  }

  return duplicates;
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
        class="-scale-x-100 opacity-50 s:-left-[53.3rem] s:top-[46.6rem]"
      />
      <UICloud type="3" class="top-0 -scale-x-100 opacity-50 s:left-[93rem]" />
    </template>

    <SectionHeader :theme="theme" :data="data.header" />

    <!-- slider -->
    <Carousel
      class="slider-wrap ml-[1.2rem] mt-[5rem] !h-[56rem] -rotate-[15deg] space-x-[0] s:ml-[2.5rem] s:mt-[16.5rem] s:!h-[82rem]"
      :drag="true"
    >
      <!-- slides -->
      <div
        v-for="(slide, i) in duplicated"
        class="item z-1 h-[47.4rem] w-[35.2rem] shrink-0 px-[1.6rem] s:h-[62.8rem] s:w-[56.5rem] s:px-[5.5rem]"
      >
        <div
          class="rounded-base-mob relative h-full w-full rotate-[15deg] p-side-mob s:rounded-base s:p-[3.2rem] s:pt-[3.75rem]"
          :class="bgColor(slide)"
        >
          <h3
            class="text-sm-mob relative font-barlow-cond font-bold leading-[.95] s:text-sm"
          >
            <IconTri color="fill-black" class="mb-[1.35rem]" />
            <span v-html="slide.headline"></span>
          </h3>

          <!-- illustration -->
          <div
            class="illus absolute left-0 top-[12rem] z-0 flex w-full justify-center s:top-[20rem]"
          >
            <img
              v-if="slide.image"
              :src="slide.image.url"
              alt=""
              class="h-auto w-[15.2rem] object-contain s:w-[22rem]"
            />
          </div>

          <div
            class="absolute bottom-0 left-0 z-1 h-auto w-full p-[3.2rem] text-body-sm-mob leading-sm s:text-body-sm"
          >
            <span v-html="formatText(slide.body)"></span>
          </div>
        </div>
      </div>
    </Carousel>
  </Section>
</template>

<style scoped></style>
