<script setup>
const props = defineProps({ color: { default: "black" } });
</script>

<template>
  <svg
    width="94"
    height="81"
    viewBox="0 0 94 81"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="h-full w-full overflow-visible"
    :class="`fill-${color}`"
  >
    <path
      class="line1"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M44.1666 0.912667L12.6366 52.9015C12.0951 53.7943 12.3832 54.9551 13.28 55.4942C13.577 55.6728 13.9176 55.7668 14.2646 55.766L67.3893 55.6502C67.9131 55.6491 68.3368 55.2254 68.3357 54.7039C68.3353 54.5273 68.2851 54.3543 68.1909 54.2047L58.0667 38.1181L51.1232 50.4306L21.1122 50.5894L49.1562 3.913L47.4328 0.943906C46.9087 0.0408813 45.7484 -0.268144 44.8414 0.253679C44.5642 0.413136 44.3321 0.639837 44.1666 0.912667Z"
    />
    <path
      class="line2"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M51.9911 8.30371L29.0352 46.5381H36.0571L55.2773 14.2869L51.9911 8.30371Z"
    />
    <path
      class="line3"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M40.5352 46.5385H47.9588L57.8022 30.2353L73.6273 54.9134C73.9715 55.4501 74.5642 55.778 75.2038 55.7855L78.094 55.8193C79.1415 55.8315 80.0007 54.996 80.013 53.9532C80.0173 53.5878 79.915 53.2291 79.7186 52.9204L58.0197 18.8179L41.013 46.4992"
    />
  </svg>
</template>

<style scoped></style>
