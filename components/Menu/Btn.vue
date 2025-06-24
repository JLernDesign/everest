<script setup>
const props = defineProps(["url", "target", "icon", "children", "sticky"]);
</script>

<template>
  <NuxtLink
    :target="target"
    class="cta-btn relative inline-block cursor-pointer rounded-btn text-bodysm leading-normal text-dark hover:bg-dark hover:text-lime"
    :class="[
      children ? 'pl-6 pr-9' : 'px-7',
      sticky ? 'pb-[.3rem] pt-[.6rem]' : 'pb-[.7rem] pt-4',
    ]"
    ><slot />
    <div
      class="absolute right-4 top-[calc(50%+.125rem)] w-[.625rem] -translate-y-1/2"
    >
      <IconChevron v-if="children" color="stroke-teal" width="2" />
    </div>
  </NuxtLink>
</template>

<style scoped>
.cta-btn.on {
  color: var(--lime);
  background-color: var(--dark);
  svg {
    stroke: var(--lime);
  }
}
</style>
