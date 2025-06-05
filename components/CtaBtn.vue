<script setup>
const props = defineProps(["data", "href", "target", "theme"]);

const hoverOn = () => {};
const hoverOff = () => {};
</script>

<template>
  <NuxtLink
    :to="data && getUrl(data)"
    :target="data?.external && '_blank'"
    class="cta-btn inline-flex items-center rounded-btn bg-red px-[1.4rem] py-[1.4rem] font-helvh text-body-sm text-skyblue"
  >
    <div><slot /></div>
    <div class="arrow relative ml-4">
      <div
        class="diamond grid size-[2.6rem] rotate-45 place-content-center rounded-[.8rem] bg-transparent p-[.4rem]"
      >
        <IconArrow
          color="stroke-skyblue"
          class="ml-[.2rem] size-full -rotate-45"
        />
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped></style>
