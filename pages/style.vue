<script setup></script>

<template>
  <div class="overflow-hidden bg-skyblue">
    <div class="mx-auto max-w-base space-y-10 px-side">
      <div class="text-eyebrowb font-barlow-cond font-bold uppercase">
        Quote to Cash
      </div>

      <div class="max-w-[80rem]">
        <h1 class="font-barlow-cond text-xl font-bold leading-xl">
          Streamline every step from quote to cash.
        </h1>
        <p class="text-body">
          Accelerate revenue recognition, billing, and cash flow management with
          a fully unified SaaS-first process.
        </p>
      </div>

      <h2
        class="text-center font-barlow-cond text-xxl font-semibold leading-xxl"
      >
        A COMPLETELY REIMAGINED <br />
        <span
          class="-mr-10 inline-flex h-[16.8rem] w-[32.1rem] rounded-[.9rem] bg-[#9DBEE3]"
        ></span>
        ERP
      </h2>
      <p class="text-md leading-md">
        Why SaaS Leaders Choose Everest: Purpose-built for complex SaaS needs,
        powered by AI automation. Gain global visibility, ensure compliance, and
        access real-time metrics—faster and safer.
      </p>

      <div class="space-x-btn">
        <a
          href="#"
          class="relative border-black font-helvh text-body-sm font-extrabold text-black after:absolute after:bottom-[2px] after:left-0 after:h-[1px] after:w-full after:bg-black"
          >Product</a
        >
        <a
          href="#"
          class="relative border-black font-helvh text-body-sm font-extrabold text-black after:absolute after:bottom-[2px] after:left-0 after:h-[1px] after:w-full after:bg-black"
          >Product</a
        >
        <CtaBtn to="#">Try Everest</CtaBtn>
      </div>

      <!-- <a
      href="#"
      class="text-body-sm font-helvh relative underline border-black font-extrabold text-black"
      >Product</a
    > -->
      <CtaBtn to="#">Try Everest</CtaBtn>

      <UIArrowDiamond />

      <div class="arrow-down inline-block rotate-90 -scale-y-100">
        <IconArrow color="stroke-black" />
      </div>

      <IconChevron color="stroke-red" />

      <!-- <div>
        <div
          v-for="n in 2"
          class="overview dark bg-shadowblue w-full h-[50rem] relative border-b border-[#3D4856]"
        >
          <div
            class="from-[#21272F] to-shadowblue bg-gradient-to-t w-full h-[6.2rem] absolute bottom-0 left-0 opacity-[.6]"
          ></div>
        </div>
      </div> -->

      <!-- <div class="has-jag">
        <div class="w-full bg-red h-[30rem]"></div>
        <div class="relative w-full bg-jaffa pb-20">
          <div class="absolute w-full h-[26.8rem] -top-[26.8rem]">
            <UIJagEdge color="fill-jaffa" />
          </div>
        </div>
      </div> -->
    </div>

    <Section class="bg-skyblue"
      ><SectionHeader
        :data="{
          eyebrow: 'Why Everest',
          headline:
            'Solving the challenges that<br/> hold SaaS companies back.',
          intro:
            'At Everest, we don’t just automate your core<br/> business processes—we fortify them.',
          cta: [
            {
              type: 'button',
              title: 'Read More',
              url: '#',
            },
            {
              type: 'text',
              title: 'About',
              url: '#',
            },
          ],
        }"
    /></Section>

    <!-- faq -->
    <Faq />

    <div class="h-[10rem]"></div>

    <UIVideoThumb />

    <Carousel>
      <div
        v-for="n in 5"
        class="item grid w-[33.4%] shrink-0 cursor-grab place-content-center text-xl"
      >
        {{ n }}
      </div>
    </Carousel>

    <div class="flex w-full divide-x-1 divide-grayline">
      <BlogThumb v-for="n in 3" />
    </div>
    <div class="mt-btn text-center">
      <CtaBtn to="/">View More</CtaBtn>
    </div>

    <!--    <RadialGradient
      class="w-[118rem] h-[203.5rem] rotate-90 rounded-[203.5rem]"
    /> -->
  </div>
</template>

<style scoped></style>
