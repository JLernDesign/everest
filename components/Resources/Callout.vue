<script setup></script>

<template>
  <Section class="bg-jaffa pb-section-bot">
    <div class="flex w-full divide-x-1 divide-grayline">
      <BlogThumb v-for="n in 3" />
    </div>
    <div class="mt-btn text-center">
      <CtaBtn to="/">View More</CtaBtn>
    </div>
  </Section>
</template>

<style scoped></style>
