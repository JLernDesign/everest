<script setup>
const props = defineProps(["layout", "data"]);
</script>

<template>
  <Section
    class="pb-section-bot pt-[12rem]"
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
      <div class="eyebrow relative z-1 bg-jaffa px-5 text-body-sm">
        {{ data.header.eyebrow }}
      </div>
      <div class="eyebrow relative z-1 -translate-y-1 bg-jaffa px-5">
        <IconEyebrow color="fill-black" />
      </div>
    </header>

    <!-- slides -->
    <div
      class="mt-[10rem] flex justify-between overflow-hidden rounded-base bg-shadowblue"
    >
      <!-- text -->
      <div
        class="text relative w-1/2 px-[5rem] pb-[14rem] pt-[11.5rem] text-white"
        :class="layout == 'img-rt' ? 'order-1' : 'order-2'"
      >
        <div class="max-w-[575px] space-y-7">
          <h2
            class="font-helvb text-md leading-[1.09]"
            v-html="addLineBreaks(data.header.headline)"
          ></h2>
          <p v-html="addLineBreaks(data.header.intro)"></p>

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
          class="absolute bottom-[8rem] left-0 flex h-[3.2rem] w-full items-center px-[5rem]"
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
        class="image w-[48.5%] rounded-base bg-cover p-[13rem]"
        :class="
          layout == 'img-rt'
            ? 'order-2 bg-[url(/ui/mt-red@2x.jpg)]'
            : 'order-1 bg-[url(/ui/mt-blue@2x.jpg)]'
        "
      >
        <div
          class="flex h-full flex-col items-center rounded-base bg-jaffa p-[3.2rem] text-center text-body-sm leading-sm"
        >
          <div v-if="data.slides[0].icon" class="icon mb-[3rem] size-[12.2rem]">
            <img :src="data.slides[0].icon.url" alt="" />
          </div>
          <h3
            class="mb-[4.25rem] font-barlow-cond text-h5 font-bold uppercase leading-base"
            v-html="addLineBreaks(data.slides[0].headline)"
          ></h3>
          <p v-html="addLineBreaks(data.slides[0].description)"></p>
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
