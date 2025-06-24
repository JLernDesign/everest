<script setup>
const props = defineProps(["data", "href", "target", "theme", "stretch"]);

const hoverOn = () => {};
const hoverOff = () => {};
</script>

<template>
  <NuxtLink
    :to="data && getUrl(data)"
    :target="data?.external && '_blank'"
    class="cta-btn inline-flex items-center rounded-btn bg-red px-[1.5rem] py-[1.1rem] font-helvh text-body-sm-mob text-skyblue s:px-[1.75rem] s:py-[1.4rem] s:text-body-sm"
    :class="stretch && 'justify-between'"
  >
    <div><slot /></div>
    <div class="arrow relative ml-1 translate-x-[.2rem] s:ml-3">
      <div
        class="diamond grid size-[2.4rem] rotate-45 place-content-center rounded-[.8rem] bg-transparent p-[.4rem] s:size-[2.6rem]"
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
