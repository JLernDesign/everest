<script setup>
import gsap from "gsap";
const props = defineProps(["data"]);

const locations = inject("locations");

const coords = [
  {
    x: "13rem",
    y: "29rem",
  },
  {
    x: "38.4rem",
    y: "63.6rem",
  },
  {
    x: "59rem",
    y: "20.8rem",
  },
  {
    x: "65rem",
    y: "25.2rem",
  },
];

const getCoords = (coords) => {
  const x = Number(coords.split(",")[0]) / 10;
  const y = Number(coords.split(",")[1]) / 10;
  return `left: ${x}rem; top: ${y}rem;`;
};

const handleMouseEnter = (e) => {
  e.target.classList.add("hover");
  const label = e.target.querySelector(".pin-label");
  gsap.killTweensOf(label);
  gsap.fromTo(
    label,
    {
      display: "block",
      opacity: 0,
      y: -10,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    },
  );
};

const handleMouseLeave = (e) => {
  e.target.classList.remove("hover");
  const label = e.target.querySelector(".pin-label");
  gsap.killTweensOf(label);
  gsap.to(label, {
    opacity: 0,
    display: "none",
    y: -10,
    duration: 0.25,
    ease: "power3.out",
  });
};
</script>

<template>
  <Section class="max-s:pb-section-bot-mob">
    <header
      class="relative z-1 space-y-[3rem] text-center s:space-y-header-lg max-s:pt-[5rem]"
    >
      <h2
        class="font-barlow-cond text-xxl-mob font-semibold uppercase leading-xxl s:text-xxl"
        v-html="addLineBreaks(data.headline)"
      ></h2>
      <p
        class="text-body-md-mob mx-auto max-w-[80rem] leading-md s:text-body-md"
        v-html="formatText(data.intro)"
      ></p>
    </header>

    <!-- map area -->
    <div class="relative">
      <!-- mobile gradient -->
      <div
        class="absolute -top-[30rem] left-1/2 z-0 h-[93rem] w-screen -translate-x-1/2 s:hidden"
      >
        <img
          src="/public/about/map-gradient-mob.svg"
          alt=""
          class="h-full w-full"
        />
      </div>
      <div
        class="map relative mt-[4rem] w-[138.2rem] origin-top s:mx-auto s:mt-[7.5rem] max-s:left-1/2 max-s:h-[25.7rem] max-s:translate-x-[-50%] max-s:scale-[.325]"
      >
        <!-- gradient -->
        <div
          class="gradient absolute -top-[31rem] left-1/2 hidden h-[118rem] w-[180rem] -translate-x-1/2 blur-[50px] s:block"
        >
          <img src="/public/ui/big-bg-gradient.svg" alt="" />
        </div>

        <!-- map -->
        <img src="/public/about/map@2x.png" alt="" class="relative" />

        <!-- pins -->

        <div
          v-for="location in locations"
          class="pin absolute z-2 h-[6.6rem] w-[7.1rem] cursor-pointer"
          :style="getCoords(location.coords)"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        >
          <!-- labels -->
          <div class="hidden s:block">
            <div
              class="pin-label rounded-base-mob pointer-events-none absolute -top-[13rem] left-1/2 hidden w-[30rem] -translate-x-1/2 bg-jaffa p-[2.5rem] text-body-sm-mob leading-sm shadow-submenu s:rounded-base s:text-body-sm"
            >
              <span class="font-helvh">{{ location.location }}</span>
              <br />
              <span v-html="formatText(location.address)"></span>
            </div>
          </div>
          <img src="/public/about/map-pin.svg" alt="" />
        </div>
      </div>
    </div>

    <!-- mobile labels -->
    <div
      class="relative mt-10 block divide-y-1 divide-grayline border-y-1 border-grayline s:hidden"
    >
      <div
        v-for="location in locations"
        class="flex items-start gap-x-10 px-[1.5rem] py-8 text-body-sm-mob leading-sm"
      >
        <img
          src="/public/about/map-pin-mob.svg"
          alt=""
          class="mt-2 w-[4.5rem] shrink-0"
        />
        <span>
          <span class="font-helvh">{{ location.location }}</span>
          <br />
          <span v-html="formatText(location.address)"></span>
        </span>
      </div>
    </div>
  </Section>
</template>

<style scoped>
.pin.hover {
  z-index: 10;
}
</style>
