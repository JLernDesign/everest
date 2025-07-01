<script setup>
import gql from "graphql-tag";
import { LinkFragment } from "~/assets/graphql/fragments/global";

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
</script>

<template>
  <div
    id="sidebar"
    class="z-2 s:h-0 s:w-[28.4rem] max-s:order-2 max-s:mt-[8rem] max-s:px-side-mob"
  >
    <div class="menu relative">
      <div
        class="cta rounded-base-mob relative overflow-hidden bg-skyblue bg-[url(/public/blog/sidebar-callout@2x.png)] bg-cover px-side-mob pb-[3rem] pt-[21.2rem] text-center s:rounded-base"
      >
        <CtaGroup
          v-if="data.articleSidebar.cta"
          :data="data.articleSidebar.cta.buttons"
          :theme="dark"
          align="center"
          class="flex-wrap !space-x-0 space-y-8"
        />
      </div>
      <div class="rounded-base-mob mt-[2.4rem] bg-shadowblue s:rounded-base">
        <div class="border-b-1 border-b-whiteline py-5 text-center">
          <h3
            class="h5 font-barlow-cond text-h5 font-bold uppercase text-jaffa"
          >
            Share
          </h3>
        </div>
        <div
          class="grid h-[5rem] auto-cols-fr grid-flow-col divide-x-1 divide-whiteline"
        >
          <a href="#" class="grid place-content-center"
            ><SocialFacebook class="fill-red"
          /></a>
          <a href="#" class="grid place-content-center"
            ><SocialLinkedin class="fill-red"
          /></a>
          <a href="#" class="grid place-content-center"
            ><SocialPinterest class="fill-red"
          /></a>
          <a href="#" class="grid place-content-center"
            ><SocialX class="fill-red"
          /></a>
          <a href="#" class="grid place-content-center"
            ><SocialWeblink class="fill-red"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>
