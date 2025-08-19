// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },

  app: {
    baseURL: "/",
    head: {
      title: "Everest",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1",
        },
      ],
      script: [
        {
          src: "https://cdn-cookieyes.com/client_data/d1b7ffd5032a4a6b43bcaccf/script.js",
          id: "cookieyes",
        },
      ],
    },
  },

  /*   scripts: {
    registry: {
      googleTagManager: {
        id: "GTM-KS9LCPNL",
      },
    },
  }, */

  ssr: true,

  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: true,
    },
    preset: "netlify",
  },

  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/scripts",
    "nuxt-graphql-request",
    "@nuxtjs/i18n",
  ],

  runtimeConfig: {
    public: {
      datoCmsToken: process.env.DATO_CMS_TOKEN,
      BASE_URL: process.env.BASE_URL,
    },
  },

  i18n: {
    langDir: "locales",
    defaultLocale: "en",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "de", name: "Deutsch", file: "de.json" },
    ],
  },

  vite: {
    define: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
    },
  },

  css: ["~/assets/fonts/fonts.css", "~/assets/css/global.css"],
});
