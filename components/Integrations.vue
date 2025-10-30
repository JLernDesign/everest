<script setup>
import gsap from "gsap";

const props = defineProps(["theme", "data", "template"]);
const mobile = breakpoints.smallerOrEqual("tablet1");
const groupNum = ref(0);
const main = ref(null);
const wrap = ref(null);
let slideshow,
  els,
  groupTotal,
  index = 10,
  count = 0,
  max = 10;
const pageInactive = useState("pageInactive");
/* const order = [3, 6, 2, 5, 8, 1, 9, 4, 7, 0];
const speed = 750; */
let ctx;

/* const startSlideshow = () => {
  if (main.value) {
    els = qsa(".item", main.value);

    if (!mobile.value && groupTotal > max) {
      slideshow = setInterval(() => {
        if (!pageInactive.value) {
          next();
        }
      }, speed);
    }
  }
}; */

/* const stopSlideshow = () => {
  clearInterval(slideshow);
}; */

/* const toggleSlideshow = (ev) => {
  ev == "enter" ? startSlideshow() : stopSlideshow();
}; */

/* const next = () => {
  const img = qs("img", els[order[count]]);

  // remove item in slot
  gsap.to(img, {
    duration: 0.5,
    scale: 0.8,
    ease: "power3.in",
    opacity: 0,
  });

  // add next item in slot
  let nextimg = props.data.groups[groupNum.value].items[index].image.url;
  setTimeout(() => {
    img.src = nextimg;
    gsap.fromTo(
      img,
      {
        scale: 0.8,
        opacity: 0,
      },
      {
        delay: 0.1,
        duration: 0.5,
        scale: 1,
        ease: "power3.out",
        opacity: 1,
      },
    );
  }, 750);

  // increment count for next slot
  count++;
  count == max && (count = 0);

  // increment index for next item
  index++;
  index == props.data.groups[groupNum.value].items.length && (index = 0);
}; */

/* const items = computed(() => {
  groupTotal = props.data.groups[groupNum.value].items.length;
  let filtered = props.data.groups[groupNum.value].items.filter(
    (item, i) => i < max,
  );
  return filtered;
}); */

const handleClick = (link) => {
  if (link) {
    window.open(link, "_blank");
  }
};

const changeGroup = (group) => {
  clearInterval(slideshow);
  const h = wrap.value.scrollHeight;
  wrap.value.style.height = h + "px";

  // fade out current
  gsap.to(wrap.value, {
    duration: 0.5,
    opacity: 0,
    ease: "none",
    onComplete: () => {
      groupNum.value = group;
      wrap.value.style.height = "auto";

      // fade in new
      gsap.to(wrap.value, {
        delay: 0.2,
        duration: 0.5,
        opacity: 1,
        ease: "none",
        onComplete: () => {
          /* initGroup(); */
        },
      });
    },
  });
};

/* const initGroup = () => {
  if (groupTotal > max) {
    count = 0;
    index = 10;
    startSlideshow();
  }
}; */

onMounted(() => {
  // preload images
  props.data.groups.forEach((group) => {
    group.items.forEach((item) => {
      const img = new Image();
      img.src = item.image.url;
    });
  });

  /*   ctx = gsap.context((self) => {
    setTimeout(() => {
      playInView(main.value, null, toggleSlideshow);
    }, 200);
  }, main.value); */
});

onUnmounted(() => {
  /* stopSlideshow();
  ctx.revert(); */
});
</script>

<template>
  <Section :theme="theme" class="bg-jaffa pb-section-bot-mob s:pb-section-bot">
    <SectionHeader :theme="theme" :data="data.header" />

    <!-- subnav -->
    <SubNav
      v-if="data.groups.length > 1"
      :data="data.groups"
      :changeContent="changeGroup"
      class="max-s:mt-8"
    />

    <div ref="wrap">
      <!-- desktop module -->
      <div
        class="mx-auto mt-[10rem] hidden max-w-base gap-[2rem] s:grid s:grid-cols-5"
        ref="main"
      >
        <div
          v-for="(item, i) in data.groups[groupNum].items"
          :key="item.name"
          class="item overflow-hidden rounded-base border border-grayline"
        >
          <img
            v-if="item.image"
            :src="item.image.url"
            class="h-full w-full object-contain"
            alt=""
          />
        </div>
      </div>

      <!-- mobile module -->
      <div class="mt-[4.5rem] grid w-full grid-cols-2 gap-[2rem] s:hidden">
        <div
          v-for="(item, i) in data.groups[groupNum].items"
          class="rounded-base border border-grayline"
        >
          <img
            v-if="item.image"
            :src="item.image.url"
            class="h-full w-full object-contain"
            alt=""
          />
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
