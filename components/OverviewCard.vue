<script setup>
import gsap from "gsap";
import { Image as DatocmsImage } from "vue-datocms";

const props = defineProps(["theme", "nav", "data", "num", "cards"]);
const main = ref(null);
const video = ref(null);
let ctx;

onMounted(() => {
  ctx = gsap.context((self) => {
    // animate items into place on scroll to section
    const items = self.selector(".anim-item");
    animIntoView(items, main.value, 0.1, "top 40%");

    // get active nav item and animate on when in view
    playInView(main.value, null, registerNav, 0, "top top+=5%");
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});

const registerNav = (state) => {
  const line = main.value.querySelector(".nav-item.active .line-fill");
  const title = main.value.querySelector(".nav-item.active .title");

  if (state == "enter") {
    animateNav(line, title, "on");
  }
};

const animateNav = (line, title, toggle) => {
  gsap.killTweensOf(line);
  gsap.killTweensOf(title);

  // on state
  if (toggle == "on") {
    gsap.to(line, {
      scaleX: 1,
      duration: 0.75,
      ease: "power3.out",
    });
    gsap.fromTo(
      title,
      {
        y: 10,
        opacity: 0,
        clipPath: "inset(0 100% 0 0)",
      },
      {
        delay: 0.25,
        y: 0,
        opacity: 1,
        duration: 1,
        clipPath: "inset(0 0% 0 0)",
        ease: "power3.out",
      },
    );

    // off state
  } else {
    gsap.to(line, {
      scaleX: 0,
      duration: 0.5,
      ease: "power3.in",
    });
    gsap.to(title, {
      y: 10,
      duration: 0.3,
      opacity: 0,
      clipPath: "inset(0 100% 0 0)",
      ease: "power2.in",
    });
  }
};

const hoverOn = (e) => {
  if (e.target.classList.contains("active")) return;

  const line = e.target.querySelector(".line-fill");
  const title = e.target.querySelector(".title");

  animateNav(line, title, "on");
};

const hoverOff = (e) => {
  if (e.target.classList.contains("active")) return;

  const line = e.target.querySelector(".line-fill");
  const title = e.target.querySelector(".title");

  animateNav(line, title, "off");
};

const handleClick = (num) => {
  const el = document.getElementById("overview-cards");
  const baseOs = rect(el).top + window.scrollY;
  const cardH = main.value.scrollHeight;
  //const num = Number(e.target.dataset.num);
  const offset = baseOs + cardH * num;
  console.log(baseOs, cardH, num, offset);
  gsap.to(window, {
    scrollTo: { y: offset },
    duration: 0.75,
    ease: "power3.inOut",
  });
};

const getDelay = () => {
  let del;
  if (props.num % 2 == 0) {
    del = -5;
  } else {
    del = -15;
  }
  return del;
};
</script>

<template>
  <div
    ref="main"
    class="overview-card section-wrap dark relative w-full border-b px-side-mob py-[6rem] s:px-[20rem] s:py-[11rem]"
    :class="
      theme == 'dark'
        ? 'border-[#3D4856] bg-shadowblue'
        : 'border-grayline bg-jaffa'
    "
  >
    <div class="content relative z-1 flex flex-col justify-between s:flex-row">
      <!-- text -->
      <div
        class="anim-item left flex w-full s:w-1/2 s:items-center max-s:order-2 max-s:mt-12 max-s:flex-col"
      >
        <div
          class="anim-item num left-0 top-0 mb-[2rem] s:absolute s:mb-[11rem]"
        >
          <IconTri color="fill-red" />
          <div class="font-barlow-cond text-num opacity-30">
            {{ num < 10 ? "0" + num : num }}
          </div>
        </div>

        <!-- text contents -->
        <div class="max-w-[60rem]">
          <h3
            v-if="data.productPage"
            class="mb-5 font-helvb text-md-mob leading-sm-md s:text-md"
            v-html="formatText(data.productPage.title)"
          ></h3>
          <span
            class="bullets block max-w-[48rem] space-y-16 [&_ul]:space-y-4"
            v-html="removeWidows(data.body)"
          ></span>

          <!-- cta button -->
          <CtaBtn
            v-if="data.productPage"
            :to="`/product/${data.productPage.slug}`"
            class="mt-8"
            >Learn More</CtaBtn
          >
        </div>

        <!-- slide nav -->
        <div
          v-if="nav"
          class="slide-nav absolute bottom-0 left-0 hidden h-[10rem] w-[21rem] bg-[url(/public/ui/peak.png)] bg-contain bg-bottom bg-no-repeat s:block"
        >
          <div class="flex h-full w-full flex-col justify-between">
            <div
              v-for="(item, i) in cards"
              class="nav-item relative flex grow translate-y-1/2 cursor-pointer flex-col justify-center"
              :class="item.id == data.id && 'active'"
              :data-id="item.id"
              :data-num="i"
              @mouseenter="hoverOn"
              @mouseleave="hoverOff"
              @click="handleClick(i)"
            >
              <div class="nav-line h-[1px] w-full bg-[#3D4856]">
                <div
                  class="line-fill h-[1px] w-full origin-left scale-x-0 bg-red"
                ></div>
              </div>
              <div
                class="title absolute -top-1/2 left-full h-[2rem] whitespace-nowrap pl-[1.2rem] font-barlow text-body-xsm uppercase text-red opacity-0"
                :class="item.id == data.id && 'pointer-events-none invisible'"
              >
                {{ item.productPage.title }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- image -->
      <div class="anim-item right w-full s:w-1/2 max-s:order-1">
        <div
          class="image relative flex aspect-[1.0675] w-full items-center justify-center overflow-hidden rounded-base-mob bg-skyblue s:rounded-base"
        >
          <UICloud
            type="2"
            class="-top-[45rem] left-0"
            :anim="true"
            :speed="60"
            :delay="getDelay()"
            container="!w-[100rem]"
          />
          <UICloud
            type="2"
            class="left-0 top-[0rem]"
            :anim="true"
            :speed="40"
            :delay="getDelay() * 2"
            container="!w-[100rem]"
          />

          <div
            class="image-ph relative h-full w-full max-s:p-side-mob [&>div]:h-full [&_img]:h-full [&_img]:w-full [&_img]:object-contain"
          >
            <DatocmsImage
              v-if="data.productPage.hero.image"
              :data="data.productPage.hero.image.responsiveImage"
            />
            <!-- <VideoAnim
              v-if="data.productPage"
              class="absolute left-1/2 top-1/2 aspect-square !h-auto -translate-x-1/2 -translate-y-1/2 [&_video]:h-full"
              :file="`infographics/${data.productPage.infographic}`"
              ref="video"
            /> -->
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
      class="cover pointer-events-none absolute left-0 top-0 z-5 h-full w-full bg-shadowblue opacity-0"
    ></div>
  </div>
</template>

<style scoped></style>
