<script setup>
const props = defineProps(['href', 'target', 'theme']);

const hoverOn = () => {};
const hoverOff = () => {};
</script>

<template>
  <NuxtLink
    :to="props.href"
    :target="props.target"
    class="cta-btn rounded-btn bg-red px-6 py-6 inline-flex items-center text-body-sm text-skyblue font-helvh"
  >
    <div><slot /></div>
    <div class="arrow ml-4 relative">
      <div
        class="diamond size-[2.6rem] bg-transparent rounded-[.8rem] grid place-content-center rotate-45 p-[.4rem]"
      >
        <IconArrow
          color="stroke-skyblue"
          class="-rotate-45 size-full ml-[.2rem]"
        />
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped></style>
