<script setup>
import gsap from "gsap";
import gql from "graphql-tag";
import {
  AscendingSliderFragment,
  HeaderFragment,
  ResponsiveImageFragment,
  LinkFragment,
} from "~/assets/graphql/fragments/global";
import { useEventListener } from "@vueuse/core";
import { useMouseInElement } from "@vueuse/core";

const props = defineProps(["theme", "data", "template"]);

const main = ref(null);
const follow = ref(null);
let active = false;
let count = 0;
const mouseDown = ref(false);
const section = ref(null);
let ctx;

// get mouse movement
const { elementX, elementY } = useMouseInElement(main);

onMounted(() => {
  // mouse follow
  if (!isTouchDevice()) {
    useEventListener(main.value, "mouseenter", () => {
      if (!active) {
        active = true;
        count = 0;

        // show icon
        const icon = follow.value.querySelector("img");
        gsap.set(follow.value, { x: elementX.value, y: elementY.value });
        gsap.fromTo(
          icon,
          { opacity: 0, scale: 0.5 },
          {
            duration: 0.5,
            opacity: 1,
            scale: 1,
            ease: "elastic.out(1.5,2)",
          },
        );
        useEventListener(main.value, "mousemove", followMouse);
      }
    });
    useEventListener(main.value, "mouseleave", () => {
      unfollowMouse();
    });
  }

  // parallax clouds
  ctx = gsap.context((self) => {
    const clouds = self.selector(".cloud");
    const cloudY = [40, 60];
    cloudParallax(section.value.$el, null, clouds, cloudY, "top bottom");
  }, section.value.$el);
});

onUnmounted(() => {
  ctx.revert();
});

const followMouse = () => {
  // follow mouse
  gsap.set(follow.value, {
    x: elementX.value,
    y: elementY.value,
  });
};
const unfollowMouse = () => {
  active = false;
  main.value.removeEventListener("mousemove", followMouse);

  const icon = follow.value.querySelector("img");
  gsap.killTweensOf(icon);
  gsap.to(icon, {
    duration: 0.25,
    opacity: 0,
    scale: 0.7,
    ease: "back.in(1)",
  });
};

const handleMouseDown = () => {
  mouseDown.value = true;
};

const handleMouseUp = () => {
  mouseDown.value = false;
};

// get data
let page_data;

// check for new data
if (props.data.modules && props.data.modules.length > 0) {
  page_data = props.data;
} else {
  // use fallback data
  const fallbackQuery = gql`
    query {
      global {
        benefitsModule {
          ...AscendingSliderFragment
        }
      }
    }
    ${AscendingSliderFragment}
    ${HeaderFragment}
    ${ResponsiveImageFragment}
    ${LinkFragment}
  `;

  const { data } = await useGraphqlQuery({
    query: fallbackQuery.loc.source.body,
  });
  page_data = data.value.global.benefitsModule;
}

const duplicated = computed(() => {
  if (page_data.modules.length >= 4) {
    return page_data.modules;
  }

  const duplicates = [...page_data.modules];
  const min = 5 - page_data.modules.length;

  for (let i = 0; i < min; i++) {
    duplicates.push({ ...page_data.modules[i % page_data.modules.length] });
  }

  return duplicates;
});
</script>

<template>
  <Section
    :theme="theme"
    class="pb-section-bot-mob pt-section-top-lg s:pb-section-bot"
    :class="page_data.background == 'blue' ? 'bg-skyblue' : 'bg-jaffa'"
    side="none"
    :anim="true"
    ref="section"
  >
    <!-- bg elements -->
    <div
      v-if="page_data.background == 'blue'"
      class="absolute left-0 top-0 w-full overflow-hidden"
      :class="template == 'home' ? 'h-[125%]' : 'h-full'"
    >
      <UICloud
        type="3"
        class="-top-[10rem] left-0 opacity-[.6]"
        :flip="true"
        :anim="true"
        :speed="85"
        :delay="-20"
      />
      <UICloud
        type="3"
        class="left-0 opacity-75 s:top-[45rem]"
        :flip="true"
        :anim="true"
        :speed="75"
      />
    </div>

    <SectionHeader
      :theme="theme"
      :data="page_data.header"
      class="max-s:px-side-mob"
    />

    <!-- slider -->
    <div ref="main" class="relative">
      <Carousel
        class="slider-wrap ml-[.4rem] mt-[5rem] !h-[50rem] -rotate-[15deg] space-x-[0] s:ml-[2.5rem] s:mt-[16.5rem] s:!h-[82rem] s:!cursor-none"
        :drag="true"
        @mousedown="handleMouseDown"
        @mouseup="handleMouseUp"
      >
        <!-- slides -->
        <div
          v-for="(slide, i) in duplicated"
          class="item z-1 h-[47.4rem] w-[35.2rem] shrink-0 px-[1.6rem] s:h-[62.8rem] s:w-[56.5rem] s:px-[5.5rem]"
        >
          <div
            class="relative h-full w-full rotate-[15deg] rounded-base-mob p-side-mob s:rounded-base s:p-[3.2rem] s:pt-[3.75rem]"
            :class="bgColor(slide)"
          >
            <h3
              class="relative font-barlow-cond text-sm-mob leading-[.95] s:text-sm"
            >
              <IconTri color="fill-black" class="mb-[1.35rem]" />
              <span v-html="slide.headline"></span>
            </h3>

            <!-- illustration -->
            <div
              class="illus absolute left-0 top-[12rem] z-0 flex w-full justify-center s:top-[20rem]"
            >
              <img
                v-if="slide.image"
                :src="slide.image.url"
                alt=""
                class="h-auto w-[15.2rem] object-contain s:w-[22rem]"
              />
            </div>

            <div
              class="absolute bottom-0 left-0 z-1 h-auto w-full p-side-mob text-body-sm-mob leading-sm s:p-[3.2rem] s:text-body-sm"
            >
              <span v-html="formatText(slide.body)"></span>
            </div>
          </div>
        </div>
      </Carousel>

      <!-- scroll icon -->
      <div
        ref="follow"
        class="follow pointer-events-none absolute -left-[6.1rem] -top-[7.2rem] z-10 hidden size-[12.2rem] s:block"
      >
        <div
          class="transition-all duration-300"
          :style="{
            transform: mouseDown ? 'scale(0.9)' : 'scale(1)',
            opacity: mouseDown ? 0.8 : 1,
          }"
        >
          <img src="/public/ui/scroll-icon.svg" alt="" class="opacity-0" />
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
