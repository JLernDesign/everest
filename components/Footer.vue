<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gql from "graphql-tag";

if (isSSR()) {
  gsap.registerPlugin(ScrollTrigger);
}

const props = defineProps(["menu", "data"]);
const main = ref(null);
let mm;
const h = 268;
const basew = 1800;

/* get all legal pages */
const legalQuery = gql`
  query {
    allLegals(orderBy: order_ASC) {
      title
      slug
    }
  }
`;

const { data: legals } = await useGraphqlQuery({
  query: legalQuery.loc.source.body,
});
const legalPages = legals.value.allLegals;

onMounted(() => {
  const footer = document.querySelector(".footer-details");

  // parallax reveal footer on scroll
  mm = gsap.matchMedia();
  mm.add(
    "(min-width: 650px)",
    (self) => {
      gsap.set(footer, { yPercent: -50 });
      gsap.to(footer, {
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          id: "footer-parallax",
          trigger: main.value,
          start: () => getFooterStart(),
          end: "bottom bottom",
          scrub: true,
        },
      });
    },
    main.value,
  );
});

onUnmounted(() => {
  mm && mm.revert();
});

const getFooterStart = () => {
  const w = window.innerWidth;
  const os = h * (w / basew);
  return "top-=" + os + " bottom";
};
</script>

<template>
  <footer class="main relative" ref="main">
    <!-- footer details -->
    <div class="footer-details relative bg-shadowblue p-side-mob s:p-side">
      <UIJagEdge color="fill-shadowblue" class="block s:hidden" />
      <div
        class="absolute -top-[26.6rem] left-0 hidden h-[26.8rem] w-full bg-shadowblue s:block"
      ></div>

      <!-- columns -->
      <div
        class="flex flex-col text-body-sm-mob leading-sm text-white s:flex-row s:divide-x-1 s:divide-darkline s:border-r-1 s:border-r-darkline s:text-body-sm max-s:gap-y-[7rem]"
      >
        <!-- text -->
        <div class="col flex w-full s:w-[32.5%] s:pr-[5rem] max-s:flex-col">
          <div class="max-w-[43.5rem]">
            <p
              v-if="data?.description"
              v-html="formatText(data.description)"
            ></p>
            <div
              class="mt-side-mob flex flex-col s:mt-side s:flex-row s:items-center s:justify-between max-s:gap-y-[3.5rem]"
            >
              <CtaGroup
                v-if="data?.footerCta"
                :data="data.footerCta.buttons"
                :align="left"
                theme="dark"
              />
              <ul
                v-if="data?.socialMedia"
                class="social flex items-end space-x-[2.5rem]"
              >
                <li v-for="item in data.socialMedia">
                  <a
                    :href="item.url"
                    target="_blank"
                    class="[&_svg]:transition-colors [&_svg]:duration-500 hover:[&_svg]:fill-white"
                  >
                    <SocialLinkedin
                      v-if="item.platform == 'linkedin'"
                      class="fill-red"
                    />
                    <SocialYoutube
                      v-if="item.platform == 'youtube'"
                      class="fill-red"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- links -->
        <div class="col hidden w-full s:block s:w-[22.5%] s:px-[5rem]">
          <div class="group">
            <!-- title -->
            <h3 class="font-barlow-cond text-[2.1rem] uppercase text-red">
              Explore Everest
            </h3>

            <!-- menu -->
            <FooterMenu :data="menu.main" />
          </div>
        </div>

        <!-- contact -->
        <div class="col w-full s:w-[45.5%] s:pl-[5rem]">
          <h3 class="font-barlow-cond text-[2.1rem] uppercase text-red">
            Contact
          </h3>
          <div
            v-if="data?.locations"
            class="relative mt-4 space-y-[1.25rem] s:mt-side s:columns-2 s:space-y-[3rem]"
          >
            <div v-for="item in data.locations">
              <span class="font-helvh">{{ item.location }}</span
              ><br />
              <span v-html="formatText(item.address)"></span>
            </div>

            <div
              class="div-line absolute left-1/2 top-0 !mt-0 -ml-side hidden h-full w-0 border-l-1 border-l-darkline s:block"
            ></div>
          </div>
        </div>
      </div>

      <!-- legal -->
      <div
        class="legal relative mt-[7rem] text-body-xsm text-white s:mt-[15rem] max-s:flex max-s:flex-col"
      >
        <div class="max-s:order-2 max-s:mt-[5rem]">
          <ul class="flex flex-wrap items-center leading-body">
            <template v-for="(item, i) in legalPages">
              <li>
                <NuxtLink :to="`/legal/${item.slug}`" class="hover:text-red">{{
                  item.title
                }}</NuxtLink>
              </li>
              <li v-if="i !== legalPages.length - 1" class="mx-5">•</li>
            </template>
            <li class="mx-5 hidden s:block">•</li>
            <li class="max-s:w-full">© 2025 Everest Systems, Inc</li>

            <template v-if="data?.emailAddress">
              <li class="mx-5 hidden s:block">•</li>
              <li>
                <a
                  :href="`mailto:${data.emailAddress}`"
                  class="hover:text-red"
                  >{{ data.emailAddress }}</a
                >
              </li>
            </template>
          </ul>
          <div class="mt-5 text-[#6E7174]">
            Design:
            <a href="https://griflan.com" target="_blank" class="hover:text-red"
              >Griflan</a
            >
          </div>
        </div>
        <div
          v-if="data?.badges"
          class="-top-1/2 right-0 flex space-x-[2rem] s:absolute max-s:order-1"
        >
          <img
            v-for="item in data.badges"
            :src="item.url"
            alt=""
            class="h-[6.8rem] w-auto"
          />
        </div>
      </div>

      <!-- close footer details -->
    </div>
  </footer>
</template>

<style scoped></style>
