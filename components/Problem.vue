<script setup>
const props = defineProps(["layout", "data"]);
const active = ref(0);
const carouselRef = ref(null);

const handleSlide = (dir) => {
  if (dir == "left") {
    active.value--;
    if (active.value < 0) {
      active.value = props.data.slides.length - 1;
    }
    carouselRef.value?.back();
  } else {
    active.value++;
    if (active.value > props.data.slides.length - 1) {
      active.value = 0;
    }
    carouselRef.value?.next();
  }
};
</script>

<template>
  <Section
    class="pb-section-bot-mob pt-[12rem] s:pb-section-bot"
    :class="layout == 'img-rt' ? 'bg-jaffa' : 'bg-skyblue'"
    side="lg"
  >
    <!-- header -->
    <header
      class="relative flex h-[1.8rem] justify-between"
      :class="
        layout == 'img-rt' ? '[&_.eyebrow]:bg-jaffa' : '[&_.eyebrow]:bg-skyblue'
      "
    >
      <LineFull class="top-1/2" />
      <div
        class="eyebrow relative z-1 bg-jaffa px-5 text-body-sm-mob s:text-body-sm"
      >
        {{ data.header.eyebrow }}
      </div>
      <div class="eyebrow relative z-1 -translate-y-1 bg-jaffa px-5">
        <IconEyebrow color="fill-black" />
      </div>
    </header>

    <!-- slides -->
    <div
      class="rounded-base-mob mt-[5rem] flex flex-col justify-between overflow-hidden bg-shadowblue s:mt-[10rem] s:flex-row s:rounded-base"
    >
      <!-- text -->
      <div
        class="text relative w-full px-side-mob pb-[5rem] pt-[3.5rem] text-white s:w-1/2 s:px-[5rem] s:pb-[14rem] s:pt-[11.5rem] max-s:order-1"
        :class="layout == 'img-rt' ? 'order-1' : 'order-2'"
      >
        <div class="max-w-[575px] space-y-7">
          <h2
            class="text-md-mob font-helvb leading-[1.09] s:text-md"
            v-html="formatText(data.header.headline)"
          ></h2>
          <p v-html="formatText(data.header.intro)"></p>

          <!-- cta buttons -->
          <CtaGroup
            v-if="data.header.cta"
            :data="data.header.cta.buttons"
            :align="align"
            :theme="theme"
            class="pt-6"
          />
        </div>

        <!-- controls -->
        <div
          class="absolute bottom-[8rem] left-0 hidden h-[3.2rem] w-full items-center px-[5rem] s:flex"
        >
          <div class="relative h-full w-[23.4rem]">
            <UISlideArrow
              dir="left"
              :color="layout == 'img-rt' ? 'red' : 'blue'"
              @click="handleSlide('left')"
            />
          </div>
          <div
            class="count px-side font-barlow-cond font-bold"
            :class="layout == 'img-rt' ? 'text-red' : 'text-lightblue'"
          >
            {{ active + 1 }}/{{ data.slides.length }}
          </div>
          <div class="relative h-full w-[23.4rem]">
            <UISlideArrow
              dir="right"
              @click="handleSlide('right')"
              :color="layout == 'img-rt' ? 'red' : 'blue'"
            />
          </div>
        </div>
      </div>

      <!-- image -->
      <div
        class="image has-break rounded-base-mob w-full overflow-hidden bg-cover p-[1.4rem] s:h-[72.6rem] s:w-[72rem] s:rounded-base max-s:order-2"
        :class="
          layout == 'img-rt'
            ? 'order-2 bg-[url(/ui/mt-red@2x.jpg)]'
            : 'order-1 bg-[url(/ui/mt-blue@2x.jpg)]'
        "
      >
        <Carousel :drag="false" class="h-full" ref="carouselRef">
          <div
            v-for="slide in data.slides"
            class="item flex w-full shrink-0 flex-col justify-center px-side-mob s:px-[13rem]"
          >
            <div
              class="rounded-base-mob flex flex-col items-center bg-jaffa p-[3.2rem] text-center text-body-sm-mob leading-sm s:rounded-base s:text-body-sm"
            >
              <div v-if="slide.icon" class="icon mb-[3rem] size-[12.2rem]">
                <img :src="slide.icon.url" alt="" />
              </div>
              <h3
                class="mb-[4.25rem] font-barlow-cond text-h5 font-bold uppercase leading-base"
                v-html="formatText(slide.headline)"
              ></h3>
              <p v-html="formatText(slide.description)"></p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>

    <!-- mobile controls -->
    <div
      class="mt-12 flex h-[3.2rem] w-full items-center justify-center s:hidden"
    >
      <div class="relative h-full w-[11rem] shrink-0 s:w-[23.4rem]">
        <UISlideArrow
          dir="left"
          :color="red"
          class="cursor-pointer"
          @click="handleSlide('left')"
        />
      </div>
      <div
        class="count px-side-mob font-barlow-cond font-bold text-red s:px-side"
      >
        {{ active + 1 }}/{{ data.slides.length }}
      </div>
      <div class="relative h-full w-[11rem] shrink-0 s:w-[23.4rem]">
        <UISlideArrow
          dir="right"
          :color="red"
          class="cursor-pointer"
          @click="handleSlide('right')"
        />
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
