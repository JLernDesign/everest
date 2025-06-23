<script setup>
const props = defineProps(["data", "num", "func"]);
const open = ref(false);
const num = props.num;

const handleClick = (e) => {
  open.value = !open.value;
  props.func(props.num);
};

defineExpose({ open, num });
</script>

<template>
  <div
    class="faq-wrap closed relative flex justify-between border-b-1 border-b-[#3D4856]"
    ref="main"
  >
    <div
      class="absolute left-0 top-[6.75rem] h-0 w-full border-b-1 border-b-[#3D4856]"
    ></div>
    <!-- text -->
    <div class="faq-text w-full shrink s:px-side">
      <!-- question -->
      <h3
        class="q cursor-pointer py-[2.2rem] text-body-sm-mob leading-sm transition-colors duration-300 hover:text-red s:text-body-sm max-s:pr-12"
        :class="open && 'text-red'"
        @click="handleClick"
      >
        {{ data.question }}
      </h3>

      <!-- answer -->
      <div class="faq-answer relative h-0 overflow-hidden" ref="wrap">
        <div class="py-10 s:py-20">
          <div
            class="rounded-base-mob relative bg-jaffa px-side-mob py-side-mob text-body-sm-mob leading-sm text-black s:rounded-base s:px-[14rem] s:pb-side-mob s:pt-[5rem] s:text-body-sm"
            ref="answer"
          >
            <div
              class="left-[4.4rem] top-[5.5rem] w-[2.6rem] s:absolute s:w-[5.3rem] max-s:mb-8"
            >
              <IconLogoMark color="red" />
            </div>
            <span class="space-y-8 s:space-y-10" v-html="data.answer"></span>
          </div>
        </div>
      </div>
    </div>

    <!-- arrow -->
    <div
      class="faq-arrow absolute shrink-0 border-l-[#3D4856] s:relative s:w-[6.8rem] s:border-l-1 max-s:right-0"
    >
      <IconArrow
        class="arrow absolute top-[2.5rem] rotate-90 duration-500 ease-in-out s:left-[2.5rem] max-s:right-0"
        color="stroke-red"
        :class="open && 'on'"
      />
    </div>
  </div>
</template>

<style scoped>
.arrow.on {
  transform: rotate(180deg);
}
</style>
