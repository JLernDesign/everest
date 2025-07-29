<script setup>
const props = defineProps({ data: { default: null }, icon: { default: true } });
</script>

<template>
  <!-- header -->
  <header
    class="relative border-y border-grayline text-center s:flex s:justify-between s:gap-[4rem] max-s:px-side-mob max-s:pb-[3.5rem]"
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
      class="ornament relative hidden w-1/4 overflow-hidden py-[1.2rem] s:block"
      :class="n == 1 ? 'left-0 order-1' : 'right-0 order-3'"
    >
      <img
        src="/public/blog/line-decor.png"
        alt=""
        class="absolute h-full w-[36.3rem] max-w-none object-cover"
        :class="n == 1 ? 'right-0' : 'left-0 -scale-x-100'"
      />
    </div>

    <div class="text order-2 shrink-0 pt-[4.5rem] s:pb-[5rem]">
      <h2
        class="font-barlow-cond text-[6.5rem] uppercase leading-xxl s:text-xxl"
      >
        {{ data.title }}
      </h2>
      <p class="mt-[2rem] text-body-md-mob s:mt-[5rem] s:text-body-md">
        {{ data.description }}
      </p>
    </div>
  </header>

  <!-- text ticker -->
  <TextTicker :data="data.textTicker" />
</template>

<style scoped></style>
