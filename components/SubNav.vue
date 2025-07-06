<script setup>
import gsap from "gsap";

const props = defineProps(["data", "template"]);

//
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
      <li v-for="item in data">
        <SubNavLink
          :data="item"
          @click="
            item.slug
              ? navigateTo(`/${props.template}/${item.slug}`)
              : handleClick(item.id)
          "
        />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
