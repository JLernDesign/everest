<script setup>
import gql from "graphql-tag";
import { settingsQuery } from "~/assets/graphql/queries/settings";
import { menuQuery } from "~/assets/graphql/queries/menu";

/* check for redirects from cms */
const route = useRoute();
const redirectQuery = gql`
  query {
    redirect {
      redirects {
        oldUrl
        newUrl
      }
    }
  }
`;
const { data: redirect_data } = await useGraphqlQuery({
  query: redirectQuery.loc.source.body,
});
const redirects = redirect_data.value.redirect.redirects;

if (redirects) {
  let redirect = redirects.find((item) => item.oldUrl === route.path);
  if (redirect) {
    navigateTo(redirect.newUrl, { redirectCode: 301, external: true });
  }
}

const props = defineProps({
  error: Object,
  required: true,
});

const { locale } = useI18n();

// log error for debugging
console.log(props.error);

// get global settings data
const { data: header_data } = await useGraphqlQuery({
  query: settingsQuery.loc.source.body,
  variables: {
    locale: locale.value,
  },
});

const { data: menu_data } = await useGraphqlQuery({
  query: menuQuery.loc.source.body,
  variables: {
    locale: locale.value,
  },
});
const main_menu = menu_data.value.menu;

// make reused global data available
provide("global_cta", header_data.value.global.headerCta);
</script>

<template>
  <div
    class="wrapper section-wrap on relative min-h-screen overflow-hidden bg-skyblue"
  >
    <Header
      v-if="header_data"
      ref="header"
      :menu="main_menu"
      :data="header_data?.global"
    />

    <UICloud
      type="2"
      class="-left-[25rem] top-0"
      :anim="true"
      :speed="75"
      :num="2"
    />

    <div class="overflow-hidden pb-[4rem] pt-[9rem] text-center">
      <h1 class="font-barlow-cond text-[20rem] leading-[1] s:text-[57.2rem]">
        {{ error.statusCode == "404" ? "404" : error.statusCode }}
      </h1>

      <UICloud
        type="1"
        class="-left-[11.5rem] top-[26.5rem]"
        :flip="true"
        :anim="true"
        :speed="75"
        :num="1"
      />
      <UICloud
        type="2"
        class="left-[22.1rem] top-[43.5rem]"
        :anim="true"
        :speed="60"
        :rot="-10"
        :width="91"
        :num="3"
      />
      <UICloud
        type="3"
        class="left-[64rem] top-[45.7rem]"
        :anim="true"
        :speed="50"
        :num="4"
      />

      <div class="relative">
        <p
          class="leading-md-mob mt-4 text-body-md-mob s:text-body-md s:leading-md"
        >
          {{
            error.statusCode == "404"
              ? "Looks like you're lost. Return to home."
              : null
          }}
        </p>
        <CtaBtn class="mt-8" to="/">Home</CtaBtn>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
