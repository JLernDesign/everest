<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <div class="relative">
    <svg
      width="258"
      height="226"
      viewBox="0 0 258 226"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="h-[22.6rem] w-[25.8rem]"
      style="filter: drop-shadow(0.7rem 0.7rem 1.8rem rgba(0, 0, 0, 0.5))"
    >
      <path
        d="M120.34 5.00002C124.189 -1.66665 133.811 -1.66667 137.66 5L256.306 210.5C260.155 217.167 255.344 225.5 247.646 225.5H10.3545C2.65654 225.5 -2.15474 217.167 1.69427 210.5L120.34 5.00002Z"
        :class="data.bgColor ? fillColor(data) : 'fill-blue'"
      />
    </svg>
    <div
      class="absolute left-0 top-0 flex size-full flex-col items-center justify-center space-y-4 pt-14 text-white"
    >
      <p class="text-body-sm opacity-80">With</p>
      <img
        v-if="data.person.photo"
        :src="data.person.photo.url"
        :alt="data.person.name"
        class="inline-block !size-[8.2rem] rounded-full border-[.4rem] border-white object-cover"
      />
      <p
        class="font-barlow-cond text-sm-mob font-semibold uppercase opacity-80"
      >
        {{ data.person.name }}
      </p>
    </div>
  </div>
</template>
