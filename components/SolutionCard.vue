<script setup>
import gsap from "gsap";
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["theme", "nav", "data", "num", "template"]);
const main = ref(null);
let items, bullets, spacers, ctx;

onMounted(() => {
  items = main.value.querySelectorAll(".bullet-wrap");
  spacers = main.value.querySelectorAll(".spacer");
  bullets = main.value.querySelectorAll(".bullet");

  // open first bullet by default
  handleClick(0);

  /* ctx = gsap.context((self) => {
    // animate items into place on scroll to section
    setTimeout(() => {
      const items = self.selector(".anim-item");
      console.log(items);

      animIntoView(items, main.value, 0.1, "top 40%");
    }, 200);
  }, main.value); */
});

/* onUnmounted(() => {
  ctx && ctx.revert();
}); */

const handleClick = (i) => {
  // toggle expand on items
  toggleExpand(i, items);
  toggleExpand(i, spacers);

  // toggle open class on bullets
  bullets.forEach((bullet) => {
    bullet.classList.remove("open");
  });
  bullets[i].classList.add("open");
};
</script>

<template>
  <div
    class="overview-card dark relative w-full border-b border-grayline bg-jaffa px-side-mob py-[6rem] s:px-[20rem] s:py-[18rem]"
    ref="main"
  >
    <div class="content relative z-1 flex flex-col justify-between s:flex-row">
      <div
        class="left flex w-full s:w-1/2 s:items-center max-s:order-2 max-s:mt-12 max-s:flex-col"
        :class="num % 2 == 0 ? 'order-2 justify-end' : 'order-1'"
      >
        <!-- number -->
        <div
          class="num mb-[2rem] s:absolute s:-left-[11.7rem] s:-top-[6.4rem] s:mb-[11rem]"
        >
          <IconTri color="fill-red" />
          <div class="font-barlow-cond text-num opacity-30">
            {{ num < 10 ? "0" + num : num }}
          </div>
        </div>

        <!-- text contents -->
        <div class="w-full max-w-[52.5rem]">
          <h3
            class="mb-5 font-helvb text-md-mob leading-sm-md s:text-md"
            v-html="formatText(data.headline)"
          ></h3>
          <span
            class="bullets block max-w-[48rem] space-y-16 [&_ul]:space-y-4"
            v-html="removeWidows(data.body)"
          ></span>

          <!-- bullets -->
          <div
            v-if="data.bullets"
            class="bullets mt-8 [&_.bullet:not(:first-child)]:border-t-transparent"
          >
            <div
              v-for="(bullet, i) in data.bullets"
              class="bullet group cursor-pointer border-1 border-grayline px-[2.5rem] py-5"
              @click="handleClick(i)"
              :class="[
                i == 0 && 'first rounded-tl-base rounded-tr-base pt-6',
                i == data.bullets.length - 1 &&
                  'last rounded-bl-base rounded-br-base',
              ]"
            >
              <div class="spacer h-0 overflow-hidden">
                <div class="h-7"></div>
              </div>
              <h4
                class="font-helvb text-body-sm-mob leading-base transition-colors duration-300 group-hover:text-red s:text-body-sm"
              >
                {{ bullet.title }}
              </h4>
              <div class="bullet-wrap relative h-0 overflow-hidden">
                <p
                  class="pb-6 pt-4 text-body-sm-mob leading-body s:text-body-sm"
                >
                  {{ bullet.text }}
                </p>
              </div>
            </div>
          </div>

          <!-- stats -->
          <div v-if="data.stats" class="stats mt-8 flex">
            <div
              v-for="item in data.stats.stats"
              class="stat w-full space-y-5 s:w-1/2"
            >
              <h3 class="font-barlow-cond text-xl-mob leading-xl s:text-xl">
                {{ item.figure }}
              </h3>
              <p class="text-body-xsm-mob s:text-body-xsm">{{ item.label }}</p>
            </div>
          </div>

          <!-- cta buttons -->
          <CtaGroup
            v-if="data.cta"
            :data="data.cta.buttons"
            :align="align"
            :theme="theme"
            class="mt-8"
          />
        </div>
      </div>

      <!-- image -->
      <div
        class="right w-full s:w-1/2 max-s:order-1"
        :class="num % 2 == 0 ? 'order-1' : 'order-2'"
      >
        <div
          class="image relative w-full overflow-hidden rounded-base-mob s:rounded-base"
        >
          <div class="relative w-full [&_img]:w-full">
            <DatocmsImage
              v-if="data.bgImage"
              :data="data.bgImage.responsiveImage"
            />
          </div>
        </div>
      </div>
    </div>

    <UIGradientBot
      v-if="num > 1"
      :theme="theme"
      class="absolute -top-[6.2rem] left-0"
    />

    <div
      class="cover pointer-events-none absolute left-0 top-0 z-5 h-full w-full bg-jaffalt opacity-0"
    ></div>
  </div>
</template>

<style scoped>
.bullet {
  transition: all 0.75s ease-in-out;
  &.open {
    h4 {
      color: theme("colors.red");
    }
    background-color: theme("colors.jaffaltfade");
  }
}
</style>
