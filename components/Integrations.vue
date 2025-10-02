<script setup>
import gsap from "gsap";

const props = defineProps(["theme", "data", "template"]);
const mobile = breakpoints.smallerOrEqual("tablet1");
const groupNum = ref(0);
const main = ref(null);
let slideshow,
  els,
  index = 10,
  count = 0,
  max = 10;
const pageInactive = useState("pageInactive");
const order = [];
for (let i = 0; i < index; i++) {
  order.push(i);
}

const startSlideshow = () => {
  if (!mobile.value) {
    slideshow = setInterval(() => {
      if (!pageInactive.value) {
        next();
      }
    }, 1000);
  }
};

const stopSlideshow = () => {
  clearInterval(slideshow);
};

const toggleSlideshow = (ev) => {
  ev == "enter" ? startSlideshow() : stopSlideshow();
};

onMounted(() => {
  // get items
  els = qsa(".item", main.value);

  // shuffle order
  gsap.utils.shuffle(order);

  // preload images
  props.data.groups[groupNum.value].items.forEach((item) => {
    const img = new Image();
    img.src = item.image.url;
    img.onload = () => {
      //console.log("loaded", item.image.url);
    };
  });

  setTimeout(() => {
    playInView(main.value, null, toggleSlideshow);
  }, 200);
});

onUnmounted(() => {
  stopSlideshow();
});

const next = () => {
  //console.log("next", count, index);

  //console.log(props.data.groups[groupNum.value].items[index]);
  const img = qs("img", els[order[count]]);

  // remove item in slot
  gsap.to(img, {
    duration: 0.75,
    yPercent: -100,
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
        yPercent: 100,
        opacity: 0,
      },
      {
        duration: 0.75,
        yPercent: 0,
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
};
console.log(props.data.groups[groupNum.value].items);

const items = computed(() => {
  let filtered = props.data.groups[groupNum.value].items.filter(
    (item, i) => i < index,
  );
  return filtered;
});

const handleClick = (link) => {
  if (link) {
    window.open(link, "_blank");
  }
};

const changeGroup = (group) => {
  //groupNum.value = group;
};
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

    <!-- desktop module -->
    <div
      class="mx-auto mt-[10rem] hidden max-w-base gap-[2rem] s:grid s:grid-cols-5"
      ref="main"
    >
      <div
        v-for="(item, i) in items"
        :key="i"
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

    <!-- text list -->
    <template v-if="template == 'about'">
      <div
        class="mt-[4.5rem] block divide-y-1 divide-grayline border-y-1 border-grayline s:hidden"
      >
        <div
          v-for="(item, i) in data.groups[groupNum].items"
          class="py-8 text-body-sm-mob leading-sm"
        >
          <h4 class="mb-2 font-helvb">{{ item.name }}</h4>

          {{ item.description }}
        </div>
      </div>
    </template>

    <!-- logo blocks -->
    <template v-else>
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
    </template>
  </Section>
</template>

<style scoped></style>
