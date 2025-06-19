// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  app: {
    baseURL: '/',
    head: {
      title: 'Everest',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1',
        },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Barlow:wght@500&display=swap',
          media: 'print',
          onload: "this.onload=null;this.removeAttribute('media');",
          crossorigin: '',
        },
      ],
    },
  },

  ssr: true,

  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: false,
    },
    preset: 'netlify',
  },

  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/scripts',
    'nuxt-graphql-request',
  ],

  /* gtag: {
    id: "G-252493159",
  }, */

  runtimeConfig: {
    public: {
      datoCmsToken: process.env.DATO_CMS_TOKEN,
      BASE_URL: process.env.BASE_URL,
    },
  },

  css: ['~/assets/fonts/fonts.css', '~/assets/css/global.css'],
});