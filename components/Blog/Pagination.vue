<script setup>
import gsap from "gsap";

const props = defineProps(["total", "perpage", "update"]);
const route = useRoute();

const page = route.params.page;
const per_page = props.perpage;
const totalPosts = props.total;
const totalPages = Math.ceil(totalPosts / per_page);

const main = ref(null);
const accent = ref(null);

const handleClick = (n) => {
  /*   page.value = n;
  props.update(n); */
  navigateTo(`/blog/page/${n}`);
};

onMounted(() => {
  const items = main.value.querySelectorAll(".item");
  const activeEl = items[page - 1];
  const x = activeEl.offsetLeft - main.value.offsetLeft;
  gsap.set(accent.value, {
    x: x,
  });
});

const hoverOn = (n) => {
  const items = main.value.querySelectorAll(".item");
  const activeEl = items[n - 1];
  const x = activeEl.offsetLeft - main.value.offsetLeft;

  gsap.killTweensOf(accent.value);
  gsap.to(accent.value, {
    duration: 0.5,
    x: x,
    y: 0,
    opacity: 1,
    ease: "power3.out",
  });
};
const hoverOff = () => {
  const items = main.value.querySelectorAll(".item");
  const activeEl = items[page - 1];
  const x = activeEl.offsetLeft - main.value.offsetLeft;
  gsap.to(accent.value, {
    duration: 0.5,
    x: x,
    y: 0,
    opacity: 1,
    ease: "power3.out",
  });
};
</script>

<template>
  <div class="pagination my-[8.5rem] flex justify-center" ref="main">
    <ul
      class="relative flex justify-between font-barlow-cond-semibold [&_button.on]:text-red"
    >
      <li
        class="accent absolute -left-[.5rem] -top-[.5rem] h-[1rem] w-[1.1rem]"
        ref="accent"
      >
        <img src="/public/ui/tri.svg" alt="" />
      </li>
      <li
        v-for="n in totalPages"
        class="item relative"
        @mouseenter="hoverOn(n)"
        @mouseleave="hoverOff()"
      >
        <button
          @click.prevent="handleClick(n)"
          :class="n == page && 'on'"
          class="px-3 py-2 hover:text-red"
        >
          {{ n }}
        </button>
      </li>
    </ul>
  </div>
</template>
