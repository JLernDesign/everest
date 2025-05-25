<script setup></script>

<template>
  <div class="thumb relative bg-jaffa p-thumb pb-[15.6rem]">
    <!-- bg hover -->
    <div
      class="bg-hover absolute left-0 top-0 z-0 h-full w-full p-[1.6rem] opacity-0"
    >
      <div
        class="h-full w-full rounded-base bg-jaffalt bg-opacity-25 p-thumb pb-[15.6rem]"
      ></div>
    </div>

    <!-- image -->
    <div
      class="thumb-img relative z-1 aspect-[1.3] overflow-hidden rounded-base"
    >
      <img
        src="/public/blog/ph-thumb.jpg"
        alt=""
        class="h-full w-full object-cover"
      />
    </div>

    <!-- details -->
    <div
      class="row details relative z-1 mb-10 mt-[3.2rem] flex items-center space-x-[2rem] font-barlow text-tag"
    >
      <time>10.20.25</time>
      <BlogTags :tags="[{ tag: 'Insight', slug: 'insight' }]" />
    </div>

    <!-- title -->
    <h3 class="relative z-1 mb-[1.2rem] font-helvb text-body leading-body">
      My Journey in the ERP Space: From On-Premise to Native AI
    </h3>
    <p class="relative z-1 text-body-sm leading-sm">
      {{
        createExcerpt(
          "Enterprise Resource Planning (ERP) systems are the backbone of most modern businesses, yet most of these systems are stuck in the past. ",
          30,
        )
      }}
    </p>

    <!-- arrow -->
    <div class="arrow absolute bottom-0 right-0 z-1 pb-[3.5rem] pr-thumb">
      <IconArrow color="stroke-black" />
    </div>

    <!-- link -->
    <NuxtLink
      to="/"
      class="absolute left-0 top-0 z-2 block h-full w-full"
    ></NuxtLink>
  </div>
</template>

<style scoped></style>
