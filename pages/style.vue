<script setup></script>

<template>
  <div class="overflow-hidden bg-skyblue">
    <div class="mx-auto max-w-base space-y-10 px-side">
      <div class="s:text-eyebrowb font-barlow-cond text-eyebrow-mob uppercase">
        Quote to Cash
      </div>

      <div class="max-w-[80rem]">
        <h1 class="font-barlow-cond text-xl-mob leading-xl s:text-xl">
          Streamline every step from quote to cash.
        </h1>
        <p class="text-body">
          Accelerate revenue recognition, billing, and cash flow management with
          a fully unified SaaS-first process.
        </p>
      </div>

      <h2
        class="font-barlow-cond-semibold text-center text-xxl-mob leading-xxl s:text-xxl"
      >
        A COMPLETELY REIMAGINED <br />
        <span
          class="-mr-10 inline-flex h-[16.8rem] w-[32.1rem] rounded-[.9rem] bg-[#9DBEE3]"
        ></span>
        ERP
      </h2>
      <p class="text-md-mob leading-md s:text-md">
        Why SaaS Leaders Choose Everest: Purpose-built for complex SaaS needs,
        powered by AI automation. Gain global visibility, ensure compliance, and
        access real-time metrics—faster and safer.
      </p>

      <div class="space-x-btn">
        <a
          href="#"
          class="relative border-black font-helvh text-body-sm-mob font-extrabold text-black after:absolute after:bottom-[2px] after:left-0 after:h-[1px] after:w-full after:bg-black s:text-body-sm"
          >Product</a
        >
        <a
          href="#"
          class="relative border-black font-helvh text-body-sm-mob font-extrabold text-black after:absolute after:bottom-[2px] after:left-0 after:h-[1px] after:w-full after:bg-black s:text-body-sm"
          >Product</a
        >
        <CtaBtn to="#">Try Everest</CtaBtn>
      </div>

      <!-- <a
      href="#"
      class="text-body-sm-mob s:text-body-sm font-helvh relative underline border-black font-extrabold text-black"
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

    <BodyBasic layout="img-lt" :edge="true" />

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

    <!-- client grid -->
    <ClientSuccessGrid :edge="true" />

    <!-- client list -->
    <ClientList />

    <!-- advantage -->
    <Advantage />

    <!-- impact -->
    <Section
      class="bg-jaffa pb-section-bot-mob pt-[12rem] s:pb-section-bot"
      side="lg"
    >
      <!-- header -->
      <header class="relative flex justify-between">
        <LineFull class="top-1/2" />
        <div class="relative z-1 bg-jaffa px-5 text-body-sm-mob s:text-body-sm">
          The Impact
        </div>
        <div class="relative z-1 bg-jaffa px-5">
          <IconEyebrow color="fill-black" />
        </div>
      </header>

      <!-- columns -->
      <div class="flex items-start justify-between pt-section-top">
        <!-- headline -->
        <div
          class="w-[52rem] rounded-base-mob bg-shadowblue p-side-mob s:rounded-base s:p-side"
        >
          <h2
            class="font-barlow-cond text-lg-mob leading-lg text-lightblue s:text-lg"
          >
            Powering smarter decisions, stronger margins, and faster growth.
          </h2>
        </div>

        <!-- contents -->
        <div class="w-[79.4rem] space-y-[3.6rem]">
          <!-- text -->
          <div
            class="bullets lines rounded-base-mob bg-[url(/ui/mt-blue@2x.jpg)] bg-cover p-[2rem] pb-[2.5rem] s:rounded-base [&_ul]:divide-y-1 [&_ul]:divide-grayline [&_ul]:border-y-1 [&_ul]:border-grayline"
          >
            <div class="space-y-16 rounded-sm bg-jaffa p-[3.2rem]">
              <h3>
                Native AI: Defined as an ERP product that is built from the
                ground up with AI as a core part of its architecture and user
                experience. It's an ERP system where forecasting, decision
                support, anomaly detection, and task automation are not just
                features, but the foundation of how it operates.
              </h3>
              <ul>
                <li v-for="n in 4">
                  Purpose-built for SaaS complexity and recurring revenue models
                </li>
              </ul>
              <div class="stats flex">
                <div class="stat w-1/2 space-y-5">
                  <h3 class="font-barlow-cond text-xl-mob leading-xl s:text-xl">
                    100%
                  </h3>
                  <p class="text-body-xsm-mob s:text-body-xsm">
                    Awesome stat here
                  </p>
                </div>
                <div class="stat w-1/2 space-y-5">
                  <h3 class="font-barlow-cond text-xl-mob leading-xl s:text-xl">
                    2X
                  </h3>
                  <p class="text-body-xsm-mob s:text-body-xsm">
                    Awesome stat here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <!-- callout quote -->
    <CalloutQuote />

    <!-- problem / solution -->
    <Problem layout="img-rt" :data="{ eyebrow: 'The Problem' }" />
    <Problem layout="img-lt" :data="{ eyebrow: 'The Solution' }" />

    <!-- success -->
    <SuccessStack />

    <!-- faq -->
    <Faq />

    <div class="h-[10rem]"></div>

    <UIVideoThumb />

    <Carousel>
      <div
        v-for="n in 5"
        class="item grid w-[33.4%] shrink-0 cursor-grab place-content-center text-xl-mob s:text-xl"
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
