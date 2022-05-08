import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {src: "https://unpkg.com/ionicons@latest/dist/ionicons/ionicons.esm.js", type: "module"},
      ]
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) => tag.startsWith("ion-"),
    }
  },
  modules: [
    '@pinia/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: '',
      enforceApi: false,
      // Portfolio data
      dataAvatar: '',
      dataFullname: '',
      dataNickname: '',
      dataGreeting: '',
      dataAbout: '',
      dataQuoteContent: '',
      dataQuoteAuthor: '',
      dataSkills: [],
      dataExperiences: [],
      // Social media data
      dataSocialGithub: '',
      dataSocialTwitter: '',
      dataSocialLinkedin: '',
      dataSocialWhatsapp: '',
    }
  },
  // @ts-ignore
  colorMode: { fallback: 'light', classSuffix: '' }
});
