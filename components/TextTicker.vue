<script setup>
import gsap from "gsap";
const props = defineProps(["data"]);
const min = 4;

const duplicated = computed(() => {
  if (props.data.length >= 4) {
    return props.data;
  }

  const duplicates = [...props.data];
  const min = 4 - props.data.length;

  for (let i = 0; i < min; i++) {
    duplicates.push({ ...props.data[i % props.data.length] });
  }

  return duplicates;
});

let ctx;
const main = ref();

onMounted(() => {
  ctx = gsap.context((self) => {
    setTimeout(() => {
      playInView(main.value, null, toggle);
    }, 200);
  }, main.value);
});

onUnmounted(() => {
  ctx && ctx.revert();
});

const toggle = (state) => {
  if (main.value) {
    state == "enter" && main.value.classList.add("on");
    state == "leave" && main.value.classList.remove("on");
  }
};
</script>

<template>
  <div class="ticker-wrap flex py-10 s:py-5" ref="main">
    <div
      v-for="n in 2"
      class="ticker-group flex shrink-0 items-center space-x-nav pr-[4rem]"
    >
      <div
        v-for="(item, i) in duplicated"
        class="flex shrink-0 items-center space-x-nav"
      >
        <p
          class="item shrink-0 font-barlow text-body-xsm font-medium uppercase"
        >
          {{ item.text }}
        </p>
        <div class="item w-6 shrink-0">
          <img src="/public/ui/diamond-sm.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ticker-wrap.on .ticker-group {
  animation: ticker 60s linear infinite;
}
@media (max-width: 649px) {
  .ticker-wrap.on .ticker-group {
    animation: ticker 120s linear infinite;
  }
}
</style>
