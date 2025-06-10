<script setup>
const props = defineProps(["data", "color"]);
console.log(props.color);
</script>

<template>
  <div>
    <!-- header -->
    <div class="relative flex border-t border-t-whiteline px-side-lg">
      <!-- side images -->
      <div
        v-for="n in 2"
        class="absolute top-0 h-full w-[16rem]"
        :class="n == 1 ? 'left-0' : 'right-0'"
      >
        <img
          :src="
            color == 'blue' && n == 1
              ? '/why/ai-corner-red@2x.png'
              : '/why/ai-corner-blue@2x.png'
          "
          alt=""
          class="h-full w-full object-cover"
        />
      </div>

      <!-- headline -->
      <div
        class="relative w-full border-x border-x-whiteline px-side py-[4.5rem]"
      >
        <h2 class="relative font-barlow-cond text-lg font-bold leading-lg">
          {{ data.headline }}
          <IconArrowFill
            color="fill-red"
            class="absolute bottom-0 right-0 rotate-[135deg]"
          />
        </h2>
      </div>
    </div>

    <!-- content -->
    <div class="relative flex border-t border-t-whiteline px-side-lg">
      <!-- image -->
      <div class="w-[57%] border-l border-l-whiteline">
        <div
          class="ph-image aspect-[1.44] bg-cover"
          :class="
            color == 'red'
              ? 'bg-[url(/why/aifirst-redbg.svg)]'
              : 'bg-[url(/why/aifirst-bluebg.svg)]'
          "
        ></div>
      </div>

      <!-- text -->
      <div
        class="flex w-[43%] flex-col justify-end border-x border-x-whiteline p-[5rem]"
      >
        <span v-html="data.body"></span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
