<script setup>
const props = defineProps(["loc"]);
</script>

<template>
  <div
    class="absolute left-0 hidden h-[26.8rem] w-full [clip-path:url(#jag-edge)] s:block"
    :class="loc === 'top' ? '-top-[26.6rem] scale-[-1]' : 'bottom-0'"
  >
    <UITexture class="bg-[position:0_-1rem]" />
  </div>
  <svg viewBox="0 0 1800 268" width="0" height="0">
    <defs>
      <clipPath
        id="jag-edge"
        clipPathUnits="objectBoundingBox"
        transform="scale(0.0005555 0.00373)"
      >
        <path
          d="M0,260.83502l115.16406,9.13834,148.4325-9.13834,95.43311-25.38426h112.99292s88.84949-37.2628,88.84949-37.2628l112.21228-17.1392,121.90784-8.4317,104.98743-26.2277h127.35181s133.31317-16.649,133.31317-16.649l142.9975-56.702,152.91907-30.436,218.1263-12.658,125.31255-21.011V0S0,0,0,0v260.83502Z"
        />
        <
      </clipPath>
    </defs>
  </svg>
</template>
