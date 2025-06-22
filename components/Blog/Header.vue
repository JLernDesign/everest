<script setup>
const props = defineProps({ data: { default: null }, icon: { default: true } });
</script>

<template>
  <!-- header -->
  <header
    class="relative border-y border-grayline pb-[3.5rem] pt-[4.5rem] text-center s:pb-[5rem] max-s:px-side-mob"
  >
    <!-- logo mark -->
    <div
      v-if="icon"
      class="absolute -top-[2rem] left-1/2 -translate-x-1/2 bg-jaffa px-[1.2rem] s:-top-[4.25rem] s:px-[2.2rem]"
    >
      <IconLogoMark class="s:w-[6.8rem] max-s:!w-[3.4rem]" />
    </div>

    <!-- side ornaments -->
    <div
      v-for="n in 2"
      class="ornament absolute top-0 hidden h-full w-[36.3rem] py-[1.2rem] s:block"
      :class="n == 1 ? 'left-0' : 'right-0 -scale-x-100'"
    >
      <img
        src="/public/blog/line-decor.png"
        alt=""
        class="h-full w-full object-cover"
      />
    </div>

    <h2 class="font-barlow-cond text-xxl-mob uppercase leading-xxl s:text-xxl">
      {{ data.title }}
    </h2>
    <p class="text-body-md-mob mt-[2rem] s:mt-[5rem] s:text-body-md">
      {{ data.description }}
    </p>
  </header>

  <!-- text ticker -->
  <TextTicker :data="data.textTicker" />
</template>

<style scoped></style>
