<script setup>
import { gsap } from "gsap";
import gql from "graphql-tag";
import { LinkFragment } from "~/assets/graphql/fragments/global";
import { useClipboard } from "@vueuse/core";

const props = defineProps(["title"]);

const { copy } = useClipboard();
const sidebarQuery = gql`
  query {
    articleSidebar {
      cta {
        ...LinkFragment
      }
    }
  }
  ${LinkFragment}
`;

const { data } = await useGraphqlQuery({
  query: sidebarQuery.loc.source.body,
});

/* get sharing links */
const route = useRoute();
const base_url = useState("base_url");
const linkedin_url =
  "https://www.linkedin.com/sharing/share-offsite/?url=" +
  base_url.value +
  route.path;
const x_url =
  "https://x.com/intent/tweet?text=" +
  props.title +
  " " +
  base_url.value +
  route.path;
const facebook_url =
  "https://www.facebook.com/sharer/sharer.php?u=" + base_url.value + route.path;
const pinterest_url =
  "https://www.pinterest.com/pin/create/button/?url=" +
  base_url.value +
  route.path;
const copy_url = base_url.value + route.path;

const copy_to_clipboard = () => {
  copy(copy_url);

  // show popup
  gsap.killTweensOf(".copy-popup");
  gsap.to(".copy-popup", {
    opacity: 1,
    duration: 0.3,
    ease: "power3.out",
    onComplete: () => {
      gsap.to(".copy-popup", {
        opacity: 0,
        delay: 0.1,
        duration: 0.3,
        ease: "power3.in",
      });
    },
  });
};
</script>

<template>
  <div
    id="sidebar"
    class="z-2 s:h-0 s:w-[28.4rem] max-s:order-2 max-s:mt-[8rem] max-s:px-side-mob"
    data-datocms-noindex
  >
    <div class="menu relative">
      <div
        class="cta relative overflow-hidden rounded-base-mob bg-skyblue bg-[url(/public/blog/sidebar-callout@2x.png)] bg-cover px-side-mob pb-[3rem] pt-[21.2rem] text-center s:rounded-base"
      >
        <CtaGroup
          v-if="data.articleSidebar.cta"
          :data="data.articleSidebar.cta.buttons"
          theme="dark"
          align="center"
          class="flex-wrap !space-x-0 space-y-8"
        />
      </div>
      <div class="mt-[2.4rem] rounded-base-mob bg-shadowblue s:rounded-base">
        <div class="border-b-1 border-b-whiteline py-5 text-center">
          <h3 class="h5 font-barlow-cond text-h5 uppercase text-jaffa">
            Share
          </h3>
        </div>
        <div
          class="grid h-[5rem] auto-cols-fr grid-flow-col divide-x-1 divide-whiteline [&_svg]:transition-colors [&_svg]:duration-500"
        >
          <a
            :href="facebook_url"
            class="group grid place-content-center"
            target="_blank"
            ><SocialFacebook class="fill-red group-hover:fill-white"
          /></a>
          <a
            :href="linkedin_url"
            class="group grid place-content-center"
            target="_blank"
            ><SocialLinkedin class="fill-red group-hover:fill-white"
          /></a>
          <a
            :href="pinterest_url"
            class="group grid place-content-center"
            target="_blank"
            ><SocialPinterest class="fill-red group-hover:fill-white"
          /></a>
          <a
            :href="x_url"
            class="group grid place-content-center"
            target="_blank"
            ><SocialX class="fill-red group-hover:fill-white"
          /></a>
          <div
            @click="copy_to_clipboard"
            class="group relative grid cursor-pointer place-content-center"
          >
            <SocialWeblink class="fill-red group-hover:fill-white" />
            <div
              class="copy-popup pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-base-mob bg-white px-2 py-1 font-barlow-cond text-body-sm uppercase text-red opacity-0"
            >
              Copied
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
