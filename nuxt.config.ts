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
        {
          src: "//js.hs-scripts.com/48112164.js",
          defer: true,
          id: "hs-script-loader",
        },
        {
          textContent: `!function(e,t){var _=0;e.__default__=e.__default__||{},e.__default__.form_id=357046,e.__default__.team_id=674,e.__default__.listenToIds=["5350cf07-c779-4320-9bd6-a3ecc0bef59f"],function e(){var o=t.createElement("script");o.async=!0,o.src="https://import-cdn.default.com",o.onload=function(){!0,console.info("[Default.com] Powered by Default.com")},o.onerror=function(){++_<=3&&setTimeout(e,1e3*_)},t.head.appendChild(o)}()}(window,document);`,
          tagPosition: "head",
          type: "text/javascript",
        },
      ],
    },
  },

  site: {
    url: "https://everest-systems.com",
    name: "Everest Systems",
    trailingSlash: true,
    indexable: process.env.NUXT_ENV !== "production" ? false : true,
  },

  scripts: {
    registry: {
      googleTagManager: {
        id: "GTM-KS9LCPNL",
      },
    },
  },

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
    /* "@nuxtjs/i18n", */
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],

  runtimeConfig: {
    public: {
      datoCmsToken: process.env.DATO_CMS_TOKEN,
      vimeoAccessToken: process.env.NUXT_PUBLIC_VIMEO_ACCESS_TOKEN,
      BASE_URL: process.env.BASE_URL,
      NUXT_ENV: process.env.NUXT_ENV,
    },
  },

  /*   i18n: {
    langDir: "locales",
    defaultLocale: "en",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "de", name: "Deutsch", file: "de.json" },
    ],
  }, */

  vite: {
    esbuild: {
      drop: ["console"],
    },
  },

  css: ["~/assets/fonts/fonts.css", "~/assets/css/global.css"],

  sitemap: {
    sources: ["/api/__sitemap__/urls"],
  },

  robots: {
    sitemap: "https://everest-systems.com/sitemap.xml",
  },

  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: "append",
      },
    },
  },

  routeRules: {
    "/post/**": { redirect: "/blog/**" },
    "/de": { redirect: "/" },
    "/de/**": { redirect: "/**" },
    "/blog": { redirect: "/blog/page/1/" },
  },
});
