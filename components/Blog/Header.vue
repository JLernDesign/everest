<script setup>
const props = defineProps({ data: { default: null }, icon: { default: true } });
</script>

<template>
  <!-- header -->
  <header
    class="relative border-y border-grayline pb-[5rem] pt-[4.5rem] text-center"
  >
    <!-- logo mark -->
    <div
      v-if="icon"
      class="absolute -top-[4.25rem] left-1/2 -translate-x-1/2 bg-jaffa px-[2.2rem]"
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
      {{ data.title }}
    </h2>
    <p class="mt-[5rem] text-body-md">
      {{ data.description }}
    </p>
  </header>

  <!-- text ticker -->
  <TextTicker :data="data.textTicker" />
</template>

<style scoped></style>
