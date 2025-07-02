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

// get mouse movement
const { elementX, elementY } = useMouseInElement(main);

onMounted(() => {
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
});

const followMouse = () => {
  // reduce amount of calls to every 10
  if (count % 2 == 0) {
    // follow mouse
    gsap.to(follow.value, {
      duration: 0.5,
      x: elementX.value,
      y: elementY.value,
      ease: "power3.out",
    });
  }

  // increment
  count++;
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
  >
    <!-- bg elements -->
    <template v-if="page_data.background == 'blue'">
      <UICloud
        type="3"
        class="-scale-x-100 opacity-50 s:-left-[53.3rem] s:top-[46.6rem]"
      />
      <UICloud type="3" class="top-0 -scale-x-100 opacity-50 s:left-[93rem]" />
    </template>

    <SectionHeader
      :theme="theme"
      :data="page_data.header"
      class="max-s:px-side-mob"
    />

    <!-- slider -->
    <div ref="main" class="relative">
      <Carousel
        class="slider-wrap ml-[.4rem] mt-[5rem] !h-[50rem] -rotate-[15deg] !cursor-none space-x-[0] s:ml-[2.5rem] s:mt-[16.5rem] s:!h-[82rem]"
        :drag="true"
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
              class="relative font-barlow-cond text-sm-mob font-bold leading-[.95] s:text-sm"
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
              class="absolute bottom-0 left-0 z-1 h-auto w-full p-[3.2rem] text-body-sm-mob leading-sm s:text-body-sm"
            >
              <span v-html="formatText(slide.body)"></span>
            </div>
          </div>
        </div>
      </Carousel>

      <!-- scroll icon -->
      <div
        ref="follow"
        class="follow pointer-events-none absolute -left-[6.1rem] -top-[7.2rem] z-10 size-[12.2rem]"
      >
        <img src="/public/ui/scroll-icon.svg" alt="" class="opacity-0" />
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
