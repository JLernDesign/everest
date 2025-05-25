<script setup></script>

<template>
  <Section class="bg-jaffa pb-section-bot" :margin="false">
    <!-- header -->
    <header class="relative border-y border-grayline py-[7rem] text-center">
      <!-- logo mark -->
      <div
        class="absolute -top-[4rem] left-1/2 -translate-x-1/2 bg-jaffa px-[2.2rem]"
      >
        <IconLogoMark class="w-[6.8rem]" />
      </div>

      <!-- side ornaments -->
      <div
        v-for="n in 2"
        class="ornament absolute top-0 h-full w-[36.3rem] py-[1.2rem]"
        :class="n == 1 ? 'left-0' : 'right-0 -scale-x-100'"
      >
        <img
          src="/public/blog/line-decor.png"
          alt=""
          class="h-full w-full object-cover"
        />
      </div>

      <h2 class="font-barlow-cond text-xxl uppercase leading-xxl">
        The Summit
      </h2>
      <p class="mt-[5.6rem] text-body-md">
        Insights and resources for SaaS finance transformation.
      </p>
    </header>

    <!-- text ticker -->
    <TextTicker />

    <!-- thumbs -->
    <div
      class="flex w-full divide-x-1 divide-grayline border-y border-grayline"
    >
      <BlogThumb v-for="n in 3" />
    </div>
    <div class="mt-btn text-center">
      <CtaBtn to="/">View More</CtaBtn>
    </div>
  </Section>
</template>

<style scoped></style>
