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
    <div class="faq-text w-full shrink px-side">
      <!-- question -->
      <h3
        class="q cursor-pointer py-[2.2rem] text-body-sm leading-sm transition-colors duration-300 hover:text-red"
        :class="open && 'text-red'"
        @click="handleClick"
      >
        {{ data.question }}
      </h3>

      <!-- answer -->
      <div class="faq-answer relative h-0 overflow-hidden" ref="wrap">
        <div class="py-20">
          <div
            class="relative rounded-base bg-jaffa px-[14rem] pb-side pt-[5rem] text-body-sm leading-sm text-black"
            ref="answer"
          >
            <div class="absolute left-[4.4rem] top-[5.5rem] w-[5.3rem]">
              <IconLogoMark color="red" />
            </div>
            <span class="space-y-10" v-html="data.answer"></span>
          </div>
        </div>
      </div>
    </div>

    <!-- arrow -->
    <div
      class="faq-arrow relative w-[6.8rem] shrink-0 border-l-1 border-l-[#3D4856]"
    >
      <IconArrow
        class="arrow absolute left-[2.5rem] top-[2.5rem] rotate-90 duration-500 ease-in-out"
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
