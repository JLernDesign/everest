<script setup>
import gsap from "gsap";

const props = defineProps(["data"]);

const handleClick = (id) => {
  const element = document.getElementById(id);
  gsap.to(window, {
    scrollTo: { y: element },
    duration: 0.75,
    ease: "power3.inOut",
  });
};
</script>

<template>
  <div class="w-full pt-[3rem] text-center">
    <ul class="inline-flex space-x-nav">
      <li v-for="(item, i) in data">
        <BreadcrumbLink
          :data="item.title"
          :num="i"
          @click="handleClick(item.id)"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
