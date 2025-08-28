<script setup>
const props = defineProps(["data", "last"]);
</script>

<template>
  <div
    class="content-block quote relative left-1/2 z-2 w-screen s:-translate-x-1/2"
    :class="
      last ? 's:!mt-[10rem] max-s:mt-[8rem]' : 's:!my-[10rem] max-s:my-[8rem]'
    "
  >
    <!-- edge glow -->
    <UIGlow
      v-for="n in 2"
      class="z-0 h-[13.6rem] w-full s:blur-big"
      :class="[
        n == 1
          ? '-top-[5rem] s:-top-[13.6rem]'
          : 'bottom-[5rem] s:bottom-[10rem]',
        n == 2 && last ? '!hidden' : '',
      ]"
      src="/ui/edge-gradient.svg"
    />

    <div
      class="quote-wrap relative border-y-1 border-y-grayline bg-jaffa bg-[url(/public/blog/quote-bg-mob.svg)] bg-cover py-[17rem] s:bg-[url(/public/blog/quote-bg.svg)] s:px-[20rem] s:py-[13.2rem]"
    >
      <div class="rounded-base-mob bg-jaffa p-[4rem] s:rounded-base s:p-[8rem]">
        <blockquote
          class="text-center font-barlow-cond text-lg-mob leading-lg s:text-lg"
        >
          “{{ data.text }}”
        </blockquote>
        <div
          v-if="data.byline"
          class="byline mt-[3.5rem] text-center text-body-xsm-mob s:text-body-xsm"
        >
          – {{ data.byline }}
        </div>
      </div>
    </div>
  </div>
</template>
