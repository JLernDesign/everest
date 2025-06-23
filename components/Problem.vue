<script setup>
const props = defineProps(["layout", "data"]);
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
            />
          </div>
          <div
            class="count px-side font-barlow-cond font-bold"
            :class="layout == 'img-rt' ? 'text-red' : 'text-lightblue'"
          >
            1/{{ data.slides.length }}
          </div>
          <div class="relative h-full w-[23.4rem]">
            <UISlideArrow
              dir="right"
              :color="layout == 'img-rt' ? 'red' : 'blue'"
            />
          </div>
        </div>
      </div>

      <!-- image -->
      <div
        class="image rounded-base-mob w-full bg-cover p-[1.4rem] s:w-[48.5%] s:rounded-base s:p-[13rem] max-s:order-2"
        :class="
          layout == 'img-rt'
            ? 'order-2 bg-[url(/ui/mt-red@2x.jpg)]'
            : 'order-1 bg-[url(/ui/mt-blue@2x.jpg)]'
        "
      >
        <div
          class="rounded-base-mob flex h-full flex-col items-center bg-jaffa p-[3.2rem] text-center text-body-sm-mob leading-sm s:rounded-base s:text-body-sm"
        >
          <div v-if="data.slides[0].icon" class="icon mb-[3rem] size-[12.2rem]">
            <img :src="data.slides[0].icon.url" alt="" />
          </div>
          <h3
            class="mb-[4.25rem] font-barlow-cond text-h5 font-bold uppercase leading-base"
            v-html="formatText(data.slides[0].headline)"
          ></h3>
          <p v-html="formatText(data.slides[0].description)"></p>
        </div>
      </div>
    </div>

    <!-- mobile controls -->
    <div
      class="mt-12 flex h-[3.2rem] w-full items-center justify-center s:hidden"
    >
      <div class="relative h-full w-[11rem] shrink-0 s:w-[23.4rem]">
        <UISlideArrow dir="left" :color="red" />
      </div>
      <div
        class="count px-side-mob font-barlow-cond font-bold text-red s:px-side"
      >
        1/{{ data.slides.length }}
      </div>
      <div class="relative h-full w-[11rem] shrink-0 s:w-[23.4rem]">
        <UISlideArrow dir="right" :color="red" />
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
