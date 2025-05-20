<script setup></script>

<template>
  <div class="thumb p-thumb pb-[15.6rem] bg-peach relative">
    <!-- image -->
    <div class="thumb-img aspect-[1.3] rounded-base overflow-hidden">
      <img
        src="/public/blog/ph-thumb.jpg"
        alt=""
        class="w-full h-full object-cover"
      />
    </div>

    <!-- details -->
    <div
      class="row details flex items-center space-x-[2rem] mb-10 text-tag font-barlow mt-[3.2rem]"
    >
      <time>10.20.25</time>
      <BlogTags :tags="[{ tag: 'Insight', slug: 'insight' }]" />
    </div>

    <!-- title -->
    <h3 class="font-helvb text-body mb-[1.2rem] leading-body">
      My Journey in the ERP Space: From On-Premise to Native AI
    </h3>
    <p class="text-body-sm leading-sm">
      {{
        createExcerpt(
          'Enterprise Resource Planning (ERP) systems are the backbone of most modern businesses, yet most of these systems are stuck in the past. ',
          30
        )
      }}
    </p>

    <!-- arrow -->
    <div class="arrow absolute right-0 bottom-0 pr-thumb pb-[2.5rem]">
      <IconArrow color="stroke-black" />
    </div>

    <!-- link -->
    <NuxtLink
      to="/"
      class="absolute left-0 top-0 w-full h-full block"
    ></NuxtLink>
  </div>
</template>

<style scoped></style>
