<script setup>
const props = defineProps(["data", "target", "theme", "color"]);

// check if internal or external URL
let internal;
let external = false;
if (props.data) {
  props.data.internal ? (internal = props.data.internal) : null;
  props.data.external && (external = true);
} else {
  internal = "#";
}

const hoverOn = () => {};
const hoverOff = () => {};
</script>

<template>
  <NuxtLink
    :to="external ? props.data.external : internal"
    :target="external ? '_blank' : ''"
    class="relative font-helvh text-body-sm after:absolute after:bottom-[2px] after:left-0 after:h-[1px] after:w-full"
    :class="
      color == 'black'
        ? 'text-black after:bg-black'
        : 'text-white after:bg-white'
    "
    ><slot
  /></NuxtLink>
</template>

<style scoped></style>
